setwd("~/GDrive/Climate disobedience/data UK")
library(plyr)
library(psych)
library(pbapply)
library(ggplot2)

#script to calculate power for the main effect of a (disruptive climate protest) treatment,
#based on simulations on the data from Clara's UK Just Stop Oil experiment:
#- for different outcomes
#- making the treatment effect larger or smaller (than in the UK experiment)
#- at different proportions Control versus Treated,

save_results <- F #set to T if results file and plots should be overwritten

#get UK data
d <- read.csv("disruption_data_clean2.csv")

#kick out wave 2 dropouts
d <- d[!is.na(d$Treated),]

#outcomes of interest
outcomes <- c("SalienceClim_any", "Concern", "Policy") #, "Nonewoil", "Govt"
#items of interest
items <- c("Nonewoil","Concern_humanity", "Concern_myself", "Govt","Policy_tax","Policy_goal","Fossilinv","Behavior_donate","Behavior_march")

#alpha of these items (based on wave 1)
alpha(d[items])

#create scale from items, standardizing each by their wave 1 mean and sd
d$scale <- 0
d$scale_w2 <- 0
for(item in items){
  item_mean <- mean(d[,item], na.rm=T)
  item_sd <- sd(d[,item], na.rm=T)
  d$scale <- d$scale_w1 + ( (d[,item]-item_mean) / item_sd )
  d$scale_w2 <- d$scale_w2 + ( (d[,paste0(item, "_w2")]-item_mean) / item_sd )
}
d$scale <- d$scale / length(items)
d$scale_w2 <- d$scale_w2 / length(items)

#estimate original study effects on all outcomes of interest
for(outcome in c(outcomes, "scale")){
  form <- as.formula(paste0(outcome, "_w2 ~ Treated + ", outcome))
  print(form)
  fit <- lm(form, data=d)
  est <- summary(fit)$coefficients["Treated", 1]
  print(est)
}

#simulate the latent outcomes behind the observed wave 2 outcomes
for(outcome in outcomes){
  
  #get sizes of steps between outcome scale options
  outcome_lvls <- sort(unique(d[[outcome]]))
  stepsize <- abs(min(head(outcome_lvls, -1) - outcome_lvls[-1]))
  
  #assume a uniform distribution of unmeasured variation between scale steps
  #(e.g. 4 could mean anywhere between 3.5 and 4.5)
  outcome_name_w2 <- paste0(outcome, "_w2")
  outcome_name_latent_w2 <- paste0(outcome, "_latent_w2")
  obs_latent_diff <- runif(nrow(d), min=-stepsize/2, max=stepsize/2)
  
  #add this unmeasured variation
  d[outcome_name_latent_w2] <- d[[outcome_name_w2]] + obs_latent_diff
  
}

#assumptions about sample size and retention rate between waves
n_planned <- 3500 * (47/50)
retention_est <- .95

##function to sample from the original dataset (using outcomes with treatment effects "added on")
##and calculate the ATE for one outcome, regressing wave 2 outcome on treatment and wave 1

simulate_main <- function(d, prop_treat, addon, n=n_planned, retention=retention_est){
  
  ##Step 1: sample

  n_treated <- round(n*retention*prop_treat)
  sample_treated <- sample(which(d$Treated==1), size=n_treated, replace=T)
  sample_control <- sample(which(d$Treated==0), size=n-n_treated, replace=T)
  d_sample <- d[c(sample_treated, sample_control),]
  
  #make variables for wave 1 and 2 outcomes
  outcomename_w2 <- paste0(outcome, "_w2")
  d_sample$outcome_w1 <- d_sample[[outcome]]
  d_sample$outcome_w2 <- d_sample[[outcomename_w2]]
  
  ##Step 2: add or substract additional treatment effect in wave 2
  
  #check how many respondents need to be moved up or down one step based on addon
  n_to_move <- round(n_treated * abs(addon))
  #e.g. if addon is .1, we need to move 1 in 10 up among the treated respondents
  
  #move this many, among the respondents who have the treatment on and are not at the max level
  if(addon > 0){
    outcmax <- max(d[outcomename_w2], na.rm=T)
    sample_moveup <- sample(which(d_sample$Treated==1 & d_sample$outcome_w2!=outcmax), size=n_to_move, replace=F)
    d_sample$outcome_w2[sample_moveup] <- d_sample$outcome_w2[sample_moveup] + 1
  } else if (addon < 0) {
    outcmin <- min(d[outcomename_w2], na.rm=T)
    sample_moveup <- sample(which(d_sample$Treated==1 & d_sample$outcome_w2!=outcmin), size=n_to_move, replace=F)
    d_sample$outcome_w2[sample_moveup] <- d_sample$outcome_w2[sample_moveup] - 1
  }
  
  ##Step 3: estimate main treatment effect and its significance
  
  fit <- lm(outcome_w2 ~ Treated + outcome_w1, data=d_sample)
  est <- summary(fit)$coefficients["Treated", 1]
  p <- summary(fit)$coefficients["Treated", 4]
  
  outputs <- c("est"=est, "sign"=p<.05)
  
}

#proportion of respondents treated; we will likely want more than 50%
props_treat <- .8 #c(.75, .8, .85, .9)

#different add-ons to the treatment effect
#i.e. no add-on (same as in actual full sample), more pos, more neg
addons <- list("SalienceClim_any"=c(0, 0.05, .1, -0.05, -.1),
               "Nonewoil"=c(0, -.2, -.15, -.075, .075, .15, .2),
               "Concern"=c(0, .075, .15, .25, -.075, -.15, -.25),
               "Govt"=c(0, .1, .15, .25, -.1, -.15, -.25),
               "Policy"=c(0, -.2, -.15, -.075, .075, .15, .2))

#average ATE estimate and power for the main treatment effect:
#- for different outcomes
#- making the treatment effect larger or smaller,
#- at different proportions Control versus Treated
power_byoutc <- pblapply(outcomes, function(outcome){
  
  message("calculating power for outcome: ", outcome)
  
  power_byaddon <- pblapply(addons[[outcome]], function(addon){
    
    message("calculating power for addon: ", addon)
  
    power_byprop <- pblapply(props_treat, function(prop_treat){
      
      message("calculating power for treated proportion: ", prop_treat)
      
      #for each combination of parameters, simulate data 500 times,
      #each time drawing with replacement from the UK sample (with adjusted outcomes for the treated)
      power_out <- pbreplicate(500, simulate_main(d, prop_treat, addon))
      
      #get mean treatment effect estimate, p-value and significance
      power_summ <- t(apply(power_out, 1, mean))
      power_summ <- cbind(prop_treat, addon, power_summ)
      #note: mean of binary significance is power: % of times effect detected
      
    })
    power_byprop <- do.call(rbind, power_byprop)
    
    
  })
  
  power_byaddon <- do.call(rbind, power_byaddon)
  
})
names(power_byoutc) <- outcomes

#save to file
if(save_results) save(power_byoutc, file="../../All the disobedience/UK disruption power/power.Rdata")

#plot the results and write to pdfs
for(outcome in outcomes){

  #format data for plot
  d_power <- as.data.frame(power_byoutc[[outcome]])
  
  #for plot title
  scalemin <- min(d[outcome], na.rm = T)
  scalemax <- max(d[outcome], na.rm = T)
  
  #make plot
  print(ggplot(d_power, aes(x=est, y=sign, color=as.factor(prop_treat)))+
    geom_line() +
    geom_point(data=d_power[d_power$addon==0,], size=3) +
    ggtitle(paste(outcome, "- scale from", scalemin, "to", scalemax, ", n=", n_planned)) +
    scale_y_continuous(limits = c(0, 1)) + 
    geom_hline(yintercept=.8, color="grey") +
    labs(color="proportion treated") +
    xlab("Treatment effect") + 
    ylab("Power"))
  
  #save plot to file
  if(save_results) ggsave(paste0("../../All the disobedience/UK disruption power/power_main_", outcome,"_owe_3per50.pdf"))
  
}

