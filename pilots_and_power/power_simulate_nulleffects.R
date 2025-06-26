setwd("~/GDrive/All the disobedience/pilots and power")
library(plyr)
library(dplyr)
library(pbapply)
library(lmtest)
library(clubSandwich)
source("power_functions.R")
set.seed(1353)


#script to adjust the data from Clara's UK Just Stop Oil experiment
#in order to force a set of discrete outcomes to have null treatment effects
#(i.e. simulate a pool of only untreated respondents). Later we can add ATEs
#at will so we can calculate power for different effect sizes
#(see power calculation pooled.R)


##data import and calculations

#get UK data
d <- read.csv("disruption_data_clean2.csv")

#kick out wave 2 dropouts
d <- d[!is.na(d$Treated),]

#rescale Policy to seven-point scale
d$Policy <- ( (d$Policy-1) * (7-1) / (5-1) ) + 1

#outcomes of interest
outcomes <- c("Concern", "Policy", "Behavior", "Concern_myself")

#get outcome scale options and sizes of steps between them
lvls <- sapply(outcomes, function(outcome){
  sort(unique(d[[outcome]]))
})
stepsizes <- sapply(outcomes, function(outcome){
  abs(min(head(lvls[[outcome]], -1) - lvls[[outcome]][-1]))
})
minmax <- sapply(outcomes, function(outcome){
  c(min(d[[outcome]], na.rm=T),
    max(d[[outcome]], na.rm=T))
})

#calculate the treatment effects on each outcome
real_ATEs <- sapply(outcomes, function(outcome){
  outcome_w2 <- paste0(outcome, "_w2")
  fit <- lm(get(outcome_w2) ~ Treated + get(outcome), data=d) 
  coef <- summary(fit)$coefficients["Treated","Estimate"]
})

#simulate the latent outcomes behind the observed wave 2 outcomes
#and subtract the real treatment effect from them
for(outcome in outcomes){
  
  message("ATE to be corrected for: ", real_ATEs[outcome])
  
  #get discrete outcome var. names 
  outcome_name_w2 <- paste0(outcome, "_w2")
  outcome_name_nulsim_w2 <- paste0(outcome, "_nulsim_w2")
  
  #adjust discrete outcomes, so that we end up with a zero treatment effect
  d[[outcome_name_nulsim_w2]] <- d[[outcome_name_w2]]
  d[[outcome_name_nulsim_w2]][d$Treated==1] <- add_to_outcome(
    y = d[[outcome_name_w2]][d$Treated==1],
    addon = -real_ATEs[[outcome]],
    y_min = minmax[1, outcome],
    y_max = minmax[2, outcome],
    stepsize = stepsizes[[outcome]])
  
  #check: is the new ATE about zero?
  fit <- lm(get(outcome_name_nulsim_w2) ~ Treated + get(outcome), data=d) 
  coef <- summary(fit)$coefficients[2,1]
  message(outcome, " ATE reduced to: ", coef)
  message("\n")
  
}

#save simulated null results data
#write.csv(d, "simulated_null_data.csv", row.names = FALSE)
save(d, stepsizes, minmax, file="simulated_null_data.Rdata")

