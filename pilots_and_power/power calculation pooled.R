library(plyr)
library(dplyr)
library(pbapply)
library(lmtest)
library(clubSandwich)
source("power_functions.R")
set.seed(1353)


#script to calculate power for the main effect of a (disruptive climate protest) treatment,
#based on simulations:
#- for different outcomes
#- making the treatment effect different sizes


##power simulations using the null-treatment dataset

#read in the UK study dataset with simulated null effects,
#plus calculated quantities like question option step sizes
load("simulated_null_data.Rdata")
d <- read.csv("simulated_null_data.csv")
#created by script power_simulate_nulleffects.R

#assumptions about sample size and retention rate between waves
n_wave1 <- 3500 #recruited in wave 1
retention_est <- .95 #predicted % retained until wave 2
n_wave2 <- round(n_wave1 * retention_est)
prop_treat <- .8 #proportion of respondents treated

#different treatment effects; only positive because these will be symmetrical
ATEs <- list("Concern"=c(.15, .2, .3, .4),
             "Policy"=c(.15, .2, .3, .4),
             "Behavior"=c(.15, .2, .3, .4))
outcomes <- names(ATEs)

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
  
  #make vector with the right number of each article id and permute it
  d_sample$Article <- 0
  n_articles <- length(article_effects)
  articles <- rep(1:n_articles, length.out=n_treated_sample)
  d_sample$Article[d_sample$Treated_sim==1] <- sample(articles) #permutation
  
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
  
  #TO DO: make sure next steps are taken for each outcome,
  #and then BH correction is applied (and not, so we can see
  #its effect). Also reconsider the decision
  #of not testing salience, since three tests is less than five and
  #so BH correction will not be conservative enough. BH also means
  #that we have to consider the correlations between the different outcomes'
  #ATEs, like maybe they are random but the likelihoods come from a "strong effects
  #likely" and a "weak effects likely" scenario.
  
  ##Step 4: add random effect of article

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
#- making the treatment effect larger or smaller

power_byoutc <- lapply(outcomes, function(outcome){
  
  message("calculating power for outcome: ", outcome)
    
    power_byaddon <- lapply(ATEs[[outcome]], function(ATE){
      
      message("calculating power for intended ATE: ", ATE)

      #names for the various simulated w2 outcome versions
      outcome_name_nulsim_w2 <- paste0(outcome, "_nulsim_w2") #discrete, no treatment effect
      outcome_name_addon_w2 <- paste0(outcome, "_addon_w2") #discrete, added treatment effect
      
      #for each combination of parameters, simulate data many times,
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
save(power_byoutc, file="power_pooled.Rdata")

