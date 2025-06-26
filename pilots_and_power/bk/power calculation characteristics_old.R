setwd("~/GDrive/Climate disobedience/data UK")
library(plyr)
library(pbapply)
library(ggplot2)

#script to calculate power for the main effect of a (disruptive climate protest) treatment,
#based on simulations on the data from Clara's UK Just Stop Oil experiment:
#- for different outcomes
#- making the treatment effect larger or smaller (than in the UK experiment)
#- at different proportions Control versus Treated,

#get UK data
d <- read.csv("disruption_data_clean2.csv")

#kick out wave 2 dropouts
d <- d[!is.na(d$Treated),]

#outcomes of interest
outcomes <- c("SalienceClim_any", "Nonewoil", "Concern", "Govt", "Policy")

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
n_planned <- 2500
retention_est <- .94

##function to sample from the original dataset (using outcomes with treatment effects "added on")
##and calculate the ATE for one outcome, regressing wave 2 outcome on treatment and wave 1

simulate_main <- function(d, prop_treat, n=n_planned, retention=retention_est){
  
  ##Step 1: sample
  
  n_treated <- round(n*prop_treat*retention)
  sample_treated <- sample(which(d$Treated==1), size=n_treated, replace=T)
  d_sample <- d[sample_treated,]
  #we don't sample control participants as they cannot be used for this
  
  
  ##Step 2: estimate main treatment effect and its significance
  
  fit <- lm(outcome_addon_w2 ~ Moderator + outcome_w1, data=d_sample)
  est <- summary(fit)$coefficients["Moderator", 1]
  p <- summary(fit)$coefficients["Moderator", 4]
  
  outputs <- c("est"=est, "sign"=p<.05)
  
}

#proportion of respondents treated; we will likely want more than 50%
props_treat <- c(.75, .8, .85, .9)

#different add-ons to the treatment effect, when the moderator is on
#only positive because these will be symmetrical
addons <- list("SalienceClim_any"=c(0, 0.03, .06, .1),
               "Nonewoil"=c(0, .075, .15, .2, .25, .33),
               "Concern"=c(0, .075, .15, .25, .33, .4),
               "Govt"=c(0, .075, .15, .25, .33, .4),
               "Policy"=c(0.075, .15, .2, .25))

#proportion of respondents for whom the moderator was switched on
props_mod <- c(.9, .5, .75)

#average ATE estimate and power for the effect of stimulus characteristics
#- with more or less rare characteristics
#- for different outcomes
#- making the treatment effect larger or smaller,
#- at different proportions Control versus Treated

power_byoutc <- pblapply(outcomes, function(outcome){
  
  message("calculating power for outcome: ", outcome)
  
  power_bypropmod <- pblapply(props_mod, function(prop_mod){
    
    message("calculating power for prop_mod: ", prop_mod)
    
    power_byaddon <- pblapply(addons[[outcome]], function(addon){
      
      message("calculating power for addon: ", addon)
      
      #take treated respondents only
      d_treat <- d[d$Treated==1,]
      
      #simulate values of the binary moderator (characteristic)
      d_treat$Moderator <- rbinom(nrow(d_treat), 1, prop_mod)
      
      #store latent w2 outcome in vector for convenience
      outcome_latent_w2 <- d[,paste0(outcome, "_latent_w2")]
      
      #add/substract the additional treatment effect to/from this latent outcome
      outcome_addon_w2 <-  ifelse(d$Moderator, outcome_latent_w2+addon, outcome_latent_w2)
      
      #go back to original scale by rounding and put into a column in d 
      d$outcome_addon_w2 <- round_any(outcome_addon_w2, accuracy=stepsize)
      d$outcome_addon_w2 <- pmin(d$outcome_addon_w2, max(d[outcome], na.rm=T)) #no higher than the original max
      d$outcome_addon_w2 <- pmax(d$outcome_addon_w2, min(d[outcome], na.rm=T)) #no lower than the original min
      message("d$outcome_addon_w2, treated, Moderator on ", mean(d$outcome_addon_w2[d$Treated==1 & d$Moderator==1], na.rm=T))
      message("d$outcome_addon_w2, treated, Moderator off ", mean(d$outcome_addon_w2[d$Treated==1 & d$Moderator==0], na.rm=T))

      #also put (unchanged) wave 1 outcome in an "outcome_w1" column in d for ease of use
      d$outcome_w1 <- d[[outcome]]
      print(t.test((d$outcome_addon_w2 - d$outcome_w1)[d$Treated==1 & d$Moderator==1],
                   (d$outcome_addon_w2 - d$outcome_w1)[d$Treated==1 & d$Moderator==0]))
      
      
      #get actual "population" treatment effect (of the characteristic) obtained after adding the addons
      fit <- lm(outcome_addon_w2 ~ Moderator + outcome_w1, data=d[d$Treated==1,])
      pop <- summary(fit)$coefficients["Moderator", 1]
      message("pop ", pop)
      
      cbind(prop_mod, addon, pop)
      
      # power_byprop <- pblapply(props_treat, function(prop_treat){
      #   
      #   message("calculating power for treated proportion: ", prop_treat)
      #   
      #   #for each combination of parameters, simulate data 500 times,
      #   #each time drawing with replacement from the UK sample (with adjusted outcomes for the treated)
      #   power_out <- pbreplicate(10, simulate_main(d, prop_treat))
      #   
      #   #get mean treatment (characteristic) effect estimate, p-value and significance
      #   power_summ <- t(apply(power_out, 1, mean))
      #   power_summ <- cbind(prop_treat, prop_mod, addon, pop, power_summ)
      #   #note: mean of binary significance is power: % of times effect detected
      #   
      # })
      # power_byprop <- do.call(rbind, power_byprop)
      
    })
    
    power_byaddon <- do.call(rbind, power_byaddon)
    
  })
  
  power_bypropmod <- do.call(rbind, power_bypropmod)
  
})
names(power_byoutc) <- outcomes
save(power_byoutc, file="../../All the disobedience/UK disruption power/power_hetero.Rdata")

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
          ggtitle(paste(outcome, "- scale from", scalemin, "to", scalemax)) +
          scale_y_continuous(limits = c(0, 1)) + 
          geom_hline(yintercept=.8, color="grey") +
          facet_grid(~ as.factor(prop_mod)) +
          labs(color="proportion treated") +
          xlab("Heterogeneous effect") + 
          ylab("Power"))
  #ggsave(paste0("../../All the disobedience/UK disruption power/power_hetero_", outcome,".pdf"))
  
}
