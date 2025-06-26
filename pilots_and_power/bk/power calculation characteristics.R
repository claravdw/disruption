setwd("~/GDrive/Climate disobedience/data UK")
library(plyr)
library(dplyr)
library(pbapply)
library(lmtest)
library(clubSandwich)
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

#function to try and move a given number of respondents' outcome y up by one
#step, provided there are that many respondents that are able to move. If not,
#move as many as possible.
move_by_one_step <- function(y, addon, y_min, y_max, stepsize, n_to_move, verbose=F){
  
  if(addon > 0){
    
    movable <- which(y != y_max) #idx of up-movable observations
    n_to_move <- min(length(movable), n_to_move) #we cannot move more than the movable number
    sample_moveup <- sample(movable, size=n_to_move, replace=F) #sample from the movables
    y[sample_moveup] <- y[sample_moveup] + stepsize #move them up one step
    
  } else if (addon < 0) {
    
    movable <- which(y != y_min) #idx of down-movable observations
    n_to_move <- min(length(movable), n_to_move) #we cannot move more than the movable number
    sample_moveup <- sample(movable, size=n_to_move, replace=F) #sample from the movebles
    y[sample_moveup] <- y[sample_moveup] - stepsize #move them down one step
    
  }
  
  if (verbose) message("moved ", length(sample_moveup), " moveable respondents by one step of size ", stepsize)
  
  return(y)
  
}

add_to_outcome <- function(y, addon, y_min, y_max, stepsize, margin=stepsize/(length(y)-1), verbose=F){
  
  #loop until we have achieved as much of an in-/decrease to the mean as needed
  #(up to a margin of error)
  n <- length(y)
  
  if(verbose) message("trying to add ", round(addon, 3), " to the mean of y")
  if(verbose) message("within a margin of: ", round(margin, 3))
  
  addon_achieved <- 0
  addon_left <- addon - addon_achieved
  while(abs(addon_left) > margin){
    
    #check how many respondents need to be moved up or down one more step based on addon
    addon_as_step_pct <- abs(addon_left) / stepsize
    n_to_move <- round(n * addon_as_step_pct)
    if(verbose) message("trying to move ", n_to_move, " out of ", n, " respondents")
    #e.g. if addon is .1, which is one-fifth of the step size .5, we need to move
    #one in five respondents up
    
    #try to move this number (if it is more than the number of moveable respondents,
    #we will move as many as possible)
    y_new <- move_by_one_step(y, addon_left, y_min, y_max, stepsize, n_to_move)
    
    #check the amount of addon that was achieved in this step
    addon_this_step <- mean(y_new, na.rm=T) - mean(y,  na.rm=T)
    addon_achieved <- addon_achieved + addon_this_step
    addon_left <- addon - addon_achieved
    
    #use the updated outcome
    y <- y_new
    if(verbose) message("managed to add ", round(addon_this_step, 3), " to the mean of y in this step")
    if(verbose) message("in total, added ", round(addon_achieved, 3), " to the mean of y; ", round(addon_left, 3), " left")
    if(verbose) message("\n")
    if(verbose) Sys.sleep(3)
  }
  
  if(verbose) message("succesfully added the required amount to the mean")
  if(verbose) message("\n")

  return(y)
  
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


##power simulations using the null-treatment dataset

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
                          outcome, outcome_name_nulsim_w2, outcome_name_addon_w2,
                          n_wave2, prop_treat,
                          article_effects, stepsize=stepsizes[[outcome]]){
  
  ##Step 1: randomly assign to treatment
  
  #make vector with the right number of 0 and 1's and permute it
  n_treated <- round(nrow(d) * prop_treat)
  n_control <- nrow(d) - n_treated
  treat_statuses <- c(rep(1, times=n_treated), rep(0, times=n_control))
  d$Treated_sim <- sample(treat_statuses) #permutation
  
  ##Step 2: add scenario's treatment effect
  
  d[[outcome_name_addon_w2]] <- d[[outcome_name_nulsim_w2]]
  treated <- d$Treated_sim==1
  d[[outcome_name_addon_w2]][treated] <- add_to_outcome(
    y = d[[outcome_name_addon_w2]][treated],
    addon = ATE,
    y_min = minmax[1, outcome],
    y_max = minmax[2, outcome],
    stepsize = stepsizes[[outcome]])
  
  ##Step 3: sample with replacement for the treated and control group
  ##to get as many observations as there will be in the study's wave 2
  
  n_treated_sample <- round(n_wave2 * prop_treat)
  n_control_sample <- n_wave2 - n_treated_sample
  sample_treated <- sample(which(d$Treated_sim==1), size=n_treated_sample, replace=T)
  sample_control <- sample(which(d$Treated_sim==0), size=n_control_sample, replace=T)
  d_sample <- d[c(sample_treated, sample_control),]
  
  ##Step 4: assign respondents to articles and add random effect of them
  
  # #make vector with the right number of each article id and permute it
  d_sample$Article <- 0
  n_articles <- length(article_effects)
  articles <- rep(1:n_articles, length.out=n_treated_sample)
  d_sample$Article[d_sample$Treated_sim==1] <- sample(articles) #permutation

  #add article effect
  for(article in 1:n_articles){

    #message("working on article n. ", article)
    readers <- d_sample$Article == article
    d_sample[[outcome_name_addon_w2]][readers] <- add_to_outcome(
      y = d_sample[[outcome_name_addon_w2]][readers],
      addon = article_effects[[article]],
      y_min = minmax[1, outcome],
      y_max = minmax[2, outcome],
      stepsize = stepsizes[[outcome]])
  }
  
  ##Step 5: estimate main treatment effect and its significance
  
  fit <- lm(get(outcome_name_addon_w2) ~ Treated_sim + get(outcome)
            #to test controlling for demographics:
            #+ Age + Sex + Ideology
            , data=d_sample)
  
  #clustered SEs
  cluster_se <- vcovCR(fit, cluster = d_sample$Article, type = "CR4")
  est <- coeftest(fit, vcov = cluster_se)["Treated_sim", 1]
  p <- coeftest(fit, vcov = cluster_se)["Treated_sim", 4]
  
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
      outcome_name_nulsim_w2 <- paste0(outcome, "_nulsim_w2") #discrete, no treatment effect
      outcome_name_addon_w2 <- paste0(outcome, "_addon_w2") #discrete, added treatment effect
      
      #for each combination of parameters, simulate data 500 times,
      #each time drawing with replacement from the UK sample (with adjusted outcomes for the treated)
      power_out <- pbreplicate(250, simulate_main(d, ATE,
                                                 outcome = outcome,
                                                 outcome_name_nulsim_w2 = outcome_name_nulsim_w2,
                                                 outcome_name_addon_w2 = outcome_name_addon_w2,
                                                 n_wave2, prop_treat,
                                                 article_effects = article_effects, stepsize=stepsizes[[outcome]]))
      
      #get mean treatment (characteristic) effect estimate, p-value and significance
      power_summ <- t(apply(power_out, 1, mean))
      power_summ <- cbind(ATE, power_summ)
      #note: mean of binary significance is power: % of times effect detected
      
    })
    
    power_byaddon <- do.call(rbind, power_byaddon)
    
})

names(power_byoutc) <- outcomes
save(power_byoutc, file="../../All the disobedience/UK disruption power/power_pooled_150.Rdata")

