setwd("~/GDrive/Climate disobedience/data UK")
library(plyr)
library(pbapply)
library(ggplot2)

#script to calculate power for the interaction effect between (disruptive climate protest) treatment,
#and a moderator that is a binary characteristic of the treatment (e.g. was industry targeted),
#based on simulations on the data from Clara's UK Just Stop Oil experiment:
#- for different outcomes
#- at different proportions Control versus Treated,
#- making the interaction effect larger or smaller
#using a two-wave set-up where analyses control for wave 1 outcomes (Scenario B in main
#effect power calculations)

#get UK data
d <- read.csv("disruption_data_clean2.csv")

#kick out wave 2 dropouts
d <- d[!is.na(d$Treated),]

#outcomes of interest
outcomes <- c("SalienceClim_any", "Nonewoil", "Concern", "Govt", "Policy")


##Option 1: simulations

simulate_main <- function(d, outcome, prop_treat, ATE_addons, prop_mod, n=2500, retention=.94){
  
  ##Step 1: sample
  
  #Scenario is two waves, n=1000
  n_treated <- round(n*prop_treat*retention)
  sample_treated <- sample(which(d$Treated==1), size=n_treated, replace=T)
  d_sample <- d[sample_treated,]
  #we don't sample control participants as they cannot be used for this
  
  ##Step 2: simulate values of the binary moderator
  
  #d_sample$Moderator <- rbinom(n_treated, 1, prop_mod)
  n_mod_on <- round(n_treated*prop_mod) #respondents that should have moderator on
  n_mod_off <- n_treated - n_mod_on #respondents that should have moderator on
  d_sample$Moderator <- sample(c(rep(1, n_mod_on), c(rep(0, n_mod_off))))
  
  sapply(ATE_addons, function(addon){
    
    #make variables for wave 1 and 2 outomes
    d_sample$outcome_w1 <- d_sample[[outcome]]
    d_sample$outcome_w2 <- d_sample[,paste0(outcome, "_w2")]
    
    ##Step 3: add or substract additional treatment effect in wave 2 depending on moderator values
    
    #check how many respondents need to be moved up one step based on addon
    n_to_move <- round(n_treated * prop_mod * addon)
    #e.g. if addon is .1, we need to move 1 in 10 up among the treated respondents with moderator "on"
    
    #move this many up, among the respondents who have the moderator "on" and are not at the max level
    outcmax <- max(d$outcome_w2, na.rm=T)
    sample_moveup <- sample(which(d_sample$Moderator==1 & d_sample$outcome_w2!=outcmax), size=n_to_move, replace=F)
    d_sample$outcome_w2[sample_moveup] <- d_sample$outcome_w2[sample_moveup] + 1
    
    ##Step 4: estimate interaction effect and its significance
    
    #fit interaction model
    fit <- lm(outcome_w2 ~ Moderator + outcome_w1, d=d_sample)
    est <- summary(fit)$coefficients["Moderator", 1]
    p <- summary(fit)$coefficients["Moderator", 4]
    #all observations are treated, so this "interaction" is really the main effect of the moderator
    
    outputs <- c("est"=est, "p"=p, "sign"=p<.05)
    
  })
  
}

#proportion of respondents treated; we will likely want more than 50%
props_treat <- c(.75, .8, .85)

#different add-ons to the treatment effect, when the moderator is on
#i.e. no add-on (same as in actual full sample), more pos, more neg
addons <- list("SalienceClim_any"=c(0, 0.03, .06, .1),
               "Nonewoil"=c(0, .075, .15, .2, .25),
               "Concern"=c(0, .075, .15, .25, .33, .4),
               "Govt"=c(0, .075, .15, .25, .33, .4),
               "Policy"=c(0, 0.075, .15, .2, .25))

#proportion of respondents for whom the moderator was switched on
props_mod <- c(.5, .75, .9)

#average ATE estimate, average p-value, and power for the interaction effect
power_byoutc <- pblapply(outcomes, function(outcome){
  
  message("calculating power for outcome:", outcome)
  
  power_byprop <- pblapply(props_treat, function(prop_treat){
    
    message("calculating power for treated proportion:", prop_treat)
    
    power_bypropmod <- pblapply(props_mod, function(prop_mod){
      
      #for each combination of parameters, simulate data 500 times, each time drawing with replacement from the UK sample
      power_out <- pbreplicate(500, simulate_main(d, outcome, prop_treat, ATE_addons=addons[[outcome]], prop_mod))
      power_summ <- t(apply(power_out, c(1,2), mean))
      power_summ <- cbind(prop_treat, addon=addons[[outcome]], prop_mod, power_summ)
      
    })
    
    power_bypropmod <- do.call(rbind, power_bypropmod)
    
  })
  power_byprop <- do.call(rbind, power_byprop)
  
})
names(power_byoutc) <- outcomes
save(power_byoutc, file="../../All the disobedience/UK disruption power/power_hetero.Rdata")

for(outcome in outcomes){
  
  #format data for plot
  d_power <- as.data.frame(power_byoutc[[outcome]])
  colnames(d_power) <- c("prop_treat", "addon", "prop_mod", "est", "p", "sign")
  
  #for plot title
  scalemin <- min(d[outcome], na.rm = T)
  scalemax <- max(d[outcome], na.rm = T)
  
  #make plot
  print(ggplot(d_power, aes(x=addon, y=sign, color=as.factor(prop_treat)))+
          geom_line() +
          ggtitle(paste(outcome, "- scale from", scalemin, "to", scalemax)) +
          scale_y_continuous(limits = c(0, 1)) + 
          geom_hline(yintercept=.8, color="grey") +
          facet_grid(~ as.factor(prop_mod)) +
          labs(color="proportion treated") +
          xlab("Heterogeneous effect") + 
          ylab("Power"))
  ggsave(paste0("../../All the disobedience/UK disruption power/power_hetero_", outcome,".pdf"))
  
}
