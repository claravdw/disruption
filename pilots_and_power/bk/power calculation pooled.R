setwd("~/GDrive/Climate disobedience/data UK")
library(plyr)
library(dplyr)
library(pbapply)
library(ggplot2)
set.seed(1353)

#script to calculate power for the main effect of a (disruptive climate protest) treatment,
#based on simulations on the data from Clara's UK Just Stop Oil experiment:
#- for different outcomes
#- making the treatment effect different sizes

##functions

#function to go back from underlying latent trait to discreet score
round_back <- function(y_latent, stepsize, y_min, y_max){
  
  #arguments:
  #y_latent: the latent version of the variable
  #stepsize: the steps in the discreet version, e.g. 1 or 0.5
  #y_min and y_max: the minimum and maximum of the discreet version
  
  y <- round_any(y_latent, accuracy=stepsize)
  y <- pmax(y, y_min) #no lower than the original min
  y <- pmin(y, y_max) #no higher than the original max
  
  return(y)

}

#function to calculate how much should be added to the latent scores to achieve
#a desired ATE increase or decrease, given that some respondents will have ceiling
#effects.
#Note: this only works if the absolute value of the addon is below the step size.
get_latent_addon <- function(addon, discrete_var, selection_var=NULL, selection_value=1,
                             stepsize=.5){
  
  #if a selection variable was given, select only observations
  #where it was equal to the selection value
  if(is.null(selection_var)){
    filter <- rep(TRUE, times=length(discrete_var))
  } else {
    filter <- selection_var == selection_value
  }
  
  #If we need an ATE increase, respondents already answering the top category cannot
  #be used, as an increase for them will not lead to an increased response.
  if(addon > 0){
    y_max <- max(discrete_var, na.rm=T)
    moveable_prop <- mean(discrete_var[filter] != y_max, na.rm=T)
  #Vice versa for a decrease: the bottom category respondents cannot be used.
  } else {
    y_min <- min(discrete_var, na.rm=T)
    moveable_prop <- mean(discrete_var[filter] != y_min, na.rm=T)
  }
  
  if(abs(addon) > stepsize) {
    warning("Add-on for selection value ", selection_value, " is greater than step size;
              correction will not take into
              account ceiling effects for observations choosing second-highest option")
  }
  
  #The ATE in/decrease needs to be achieved with moveable respondents
  #only; their movement should be proportionally bigger.
  add_to_latent <- addon / moveable_prop

  message("moveable_prop: ", moveable_prop)
  
  return(add_to_latent)
  
}


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
  outcome_name_latent_w2 <- paste0(outcome, "_latent_w2") 
  outcome_name_nulsim_w2 <- paste0(outcome, "_nulsim_w2")
  #last one will contain the adjusted discrete outcomes after
  #adding/subtracting treatment effects, so that we end up
  #with simulated, discrete outcomes with a zero treatment effect
  
  #get sizes of the discrete outcome's steps
  stepsize <- stepsizes[outcome]
  
  #add uniformly distributed unmeasured variation between scale steps
  #(e.g. 4 could mean anywhere between 3.5 and 4.5)
  #obs_latent_diff <- runif(nrow(d), min=-stepsize/2, max=stepsize/2)
  d[[outcome_name_latent_w2]] <- NA
  for(treat_group in c(0,1)){
    for(lvl in lvls[[outcome]]){
      
      rows <- d$Treated == treat_group & !is.na(d[[outcome_name_w2]]) & d[[outcome_name_w2]] == lvl
      
      #create a vector of evenly distributed extra variation
      obs_latent_diff <- seq(from=-stepsize/2 + 0.001, to=stepsize/2 - 0.001, length.out = sum(rows))
      obs_latent_diff <- sample(obs_latent_diff) #permute them
        
      #add this unmeasured variation
      d[rows, outcome_name_latent_w2] <- d[rows, outcome_name_w2] + obs_latent_diff 
      
    }
  }
  
  #calculate the quantity that needs to be added to achieve the desired ATE
  #decrease or increase.
  add_to_latent <- get_latent_addon(addon = -real_ATEs[outcome],
                                    discrete_var = d[[outcome_name_w2]],
                                    selection_var = d$Treated, selection_value=1,
                                    stepsize = stepsize)
  message("add_to_latent: ", add_to_latent)

  #add/subtract that quantity from these latent outcomes for treated obs.
  d[outcome_name_latent_w2] <- ifelse(d$Treated,
                                      d[,outcome_name_latent_w2] + add_to_latent,
                                      d[,outcome_name_latent_w2])
  
  #round back to discreet version and add that to the dataframe
  d[outcome_name_nulsim_w2] <- round_back(d[,outcome_name_latent_w2], stepsize,
                                  min(d[outcome], na.rm=T), max(d[outcome], na.rm=T))
  message("treated w2 mean correction: ", mean(d[d$Treated==1, outcome_name_nulsim_w2], na.rm = T) -
            mean(d[d$Treated==1, outcome_name_w2], na.rm = T))
  
  #check: is the new ATE about zero?
  fit <- lm(get(outcome_name_nulsim_w2) ~ Treated + get(outcome), data=d) 
  coef <- summary(fit)$coefficients[2,1]
  message(outcome, " ATE reduced to: ", coef)
  message("\n")
  
}

#assumptions about sample size and retention rate between waves
n_wave1 <- 3500 #recruited in wave 1
retention_est <- .95 #predicted % retained until wave 2
n_wave2 <- round(n_wave1 * retention_est)
prop_treat <- .8 #proportion of respondents treated

#different treatment effects; only positive because these will be symmetrical
ATEs <- list("Concern"=c(.15, .2, .3, .4),
             "Policy"=c(.15, .2, .3, .4),
             "Behavior"=c(.15, .2, .3, .4),
             "Concern_myself"=c(.15, .2, .3, .4))

#article effects
n_articles <- 100
article_sd <- .1
article_effects <- rnorm(n_articles, 0, article_sd) #random effects of article

#function to assign observations from the original dataset to treatment, add treatment effects
#to achieve the desired ATE and estimate the ATE and its significance for one outcome by
#regressing wave 2 outcome on treatment and wave 1
simulate_main <- function(d, ATE,
                          outcome, outcome_name_latent_w2, outcome_name_addon_w2,
                          n_wave2=n_wave2, prop_treat=prop_treat,
                          article_effects=article_effects, stepsize=stepsizes[[outcome]]){
  
  ##Step 1: randomly assign to treatment and article
  
  #for treatment, make vector with the right number of 0 and 1's and permute it
  n_treated <- round(nrow(d) * prop_treat)
  n_control <- nrow(d) - n_treated
  treat_statuses <- c(rep(1, times=n_treated), rep(0, times=n_control))
  d$Treated_sim <- sample(treat_statuses) #permutation
  
  #for article
  d$Article <- NA
  n_articles <- length(article_effects)
  articles <- rep(1:n_articles, length.out=n_treated)
  d$Article[d$Treated_sim==1] <- sample(articles) #permutation
  
  ##Step 2: add scenario's treatment effect, plus article effect
  
  #for each article, get quantity to be added to latent w2 outcome
  #(adjusting for floor/ceiling effects)
  add_by_article <- sapply(1:n_articles, function(article_id){
    
    #get total treatment effect: ATE plus article effect
    TE <- ATE + article_effects[article_id]
    #figure out addon, correcting for ceiling or floor effects
    get_latent_addon(addon=TE, discrete_var = d[[outcome_name_nulsim_w2]],
                     selection_var = d$Article, selection_value=article_id,
                     stepsize=stepsizes[[outcome]])
    
  })
  
  #add article's total calculated addon to the latent outcome for simulated treated
  #participants
  outcome_latent_w2 <-  d[[outcome_name_latent_w2]] +
    ifelse(d$Treated_sim, add_by_article[d$Article], 0)
  
  #go back to original scale by rounding and put into a column in d 
  d[outcome_name_addon_w2] <- round_back(outcome_latent_w2,
                                         stepsizes[outcome],
                                         min(d[outcome], na.rm=T),
                                         max(d[outcome], na.rm=T))
  
  ##Step 3: sample with replacement for the treated and control group
  ##to get as many observations as there will be in the study's wave 2
  
  n_treated_sample <- round(n_wave2 * prop_treat)
  n_control_sample <- n_wave2 - n_treated
  sample_treated <- sample(which(d$Treated_sim==1), size=n_treated_sample, replace=T)
  sample_control <- sample(which(d$Treated_sim==0), size=n_control_sample, replace=T)
  d_sample <- d[c(sample_treated, sample_control),]
  
  ##Step 4: estimate main treatment effect and its significance
  
  fit <- lm(get(outcome_name_addon_w2) ~ Treated_sim + get(outcome), data=d_sample)
  est <- summary(fit)$coefficients["Treated_sim", 1]
  p <- summary(fit)$coefficients["Treated_sim", 4]
  
  outputs <- c("est"=est, "sign"=p<.05)
  return(outputs)
  
}

#average ATE estimate and power for the effect of stimulus characteristics
#- for different outcomes
#- making the treatment effect larger or smaller,
#- making the effects of protest characteristics larger or smaller

power_byoutc <- lapply(outcomes, function(outcome){
  
  message("calculating power for outcome: ", outcome)
    
    power_byaddon <- lapply(ATEs[[outcome]], function(ATE){
      
      message("calculating power for intended ATE: ", ATE)

      #names for the various simulated w2 outcome versions
      outcome_name_w2 <- paste0(outcome, "_w2") #discrete, original treatment effect
      outcome_name_latent_w2 <- paste0(outcome, "_latent_w2") #continuous, no treatment effect
      outcome_name_nulsim_w2 <- paste0(outcome, "_nulsim_w2") #discrete, no treatment effect
      outcome_name_addon_w2 <- paste0(outcome, "_addon_w2") #discrete, added treatment effect
      
      #for each combination of parameters, simulate data 500 times,
      #each time drawing with replacement from the UK sample (with adjusted outcomes for the treated)
      power_out <- pbreplicate(250, simulate_main(d, ATE,
                                                 outcome = outcome,
                                                 outcome_name_latent_w2 = outcome_name_latent_w2,
                                                 outcome_name_addon_w2 = outcome_name_addon_w2,
                                                 n_wave2, prop_treat))
      
      #get mean treatment (characteristic) effect estimate, p-value and significance
      power_summ <- t(apply(power_out, 1, mean))
      power_summ <- cbind(ATE, power_summ)
      #note: mean of binary significance is power: % of times effect detected
      
    })
    
    power_byaddon <- do.call(rbind, power_byaddon)
    
})

names(power_byoutc) <- outcomes
save(power_byoutc, file="../../All the disobedience/UK disruption power/power_pooled.Rdata")

