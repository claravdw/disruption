library(plyr)
library(dplyr)
library(pbapply)
library(lmtest)
library(clubSandwich)
library(multtest)
library(tidyr)
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
ATEs <- c(.15, .2, .3, .4)
outcomes <- c("Concern", "Policy", "Behavior")

#article effects
n_articles <- 100
article_sd <- .1
article_effects <- rnorm(n_articles, 0, article_sd) #random effects of article

#function to assign observations from the original dataset to treatment, add treatment effects
#to achieve the desired ATE and estimate the ATE and its significance for one outcome by
#regressing wave 2 outcome on treatment and wave 1
simulate_main <- function(d, ATEs, outcomes, n_wave2, prop_treat, article_effects){
  
  #create (empty) output dataframe
  outputs <- data.frame(matrix(ncol = 4, nrow = length(outcomes)))
  rownames(outputs) <- outcomes
  colnames(outputs) <- c("ATE", "est", "p", "sign")
  
  
  ##Step 1: randomly assign to treatment
  
  #make vector with the right number of 0 and 1's and permute it
  n_treated <- round(nrow(d) * prop_treat)
  n_control <- nrow(d) - n_treated
  treat_statuses <- c(rep(1, times=n_treated), rep(0, times=n_control))
  d$Treated_sim <- sample(treat_statuses) #permutation
  
  ##Step 2: add scenario's treatment effect
  
  for(outcome in outcomes){
    
    #randomly select an ATE from the options
    ATE <- sample(ATEs, 1)
    outputs[outcome,"ATE"] <- ATE #store in outputs df
    
    #create a new "addon" outcome variable from the simulated null data,
    #and then add to it gradually until we reach the right ATE
    d[[paste0(outcome, "_addon_w2")]] <- d[[paste0(outcome, "_nulsim_w2")]]
    treated <- d$Treated_sim==1
    d[[paste0(outcome, "_addon_w2")]][treated] <- add_to_outcome(
      y = d[[paste0(outcome, "_addon_w2")]][treated],
      addon = ATE,
      y_min = minmax[1, outcome],
      y_max = minmax[2, outcome],
      stepsize = stepsizes[[outcome]])
    
  }
  
  ##Step 3: sample with replacement for the treated and control group
  ##to get as many observations as there will be in the study's wave 2
  
  n_treated_sample <- round(n_wave2 * prop_treat)
  n_control_sample <- n_wave2 - n_treated_sample
  sample_treated <- sample(which(d$Treated_sim==1), size=n_treated_sample, replace=T)
  sample_control <- sample(which(d$Treated_sim==0), size=n_control_sample, replace=T)
  d_sample <- d[c(sample_treated, sample_control),]
  
  #assign treated group to article treatments:
  #make vector with the right number of each article id and permute it
  d_sample$Article <- 0
  n_articles <- length(article_effects)
  articles <- rep(1:n_articles, length.out=n_treated_sample)
  d_sample$Article[d_sample$Treated_sim==1] <- sample(articles) #permutation
  
  
  ##Step 4: add random effect of article
  
  for(outcome in outcomes){
    
    #add article effect
    for(article in 1:n_articles){
      
      #message("working on article n. ", article)
      readers <- d_sample$Article == article
      d_sample[[paste0(outcome, "_addon_w2")]][readers] <- add_to_outcome(
        y = d_sample[[paste0(outcome, "_addon_w2")]][readers],
        addon = article_effects[[article]],
        y_min = minmax[1, outcome],
        y_max = minmax[2, outcome],
        stepsize = stepsizes[[outcome]])
    }
  }
  
  ##Step 5: estimate main treatment effect and its significance
  
  for(outcome in outcomes){
    
    fit <- lm(get(paste0(outcome, "_addon_w2")) ~ Treated_sim + get(outcome)
              #to test controlling for demographics:
              #+ Age + Sex + Ideology
              , data=d_sample)
    
    #clustered SEs
    cluster_se <- vcovCR(fit, cluster = d_sample$Article, type = "CR4")
    est <- coeftest(fit, vcov = cluster_se)["Treated_sim", 1]
    p <- coeftest(fit, vcov = cluster_se)["Treated_sim", 4]
    
    outputs[outcome,c("est","p","sign")] <- c(est, p, p<.05)
    
  }
  
  #add two-stage FDR-adjusted p-values
  fdr_result <- mt.rawp2adjp(outputs$p, proc="TSBH")
  outputs$fdr <- fdr_result$adjp[order(fdr_result$index), "TSBH_0.05"]
  #should be equivalent to: adjust.p(outputs$p, pi0.method = "bky")
  #classic non-adaptive BH (1995) is: p.adjust(outputs$p, method="BH")
  
  #add significance for those
  outputs$fdr_sign <- outputs$fdr < .05
  
  #add column for outcome
  outputs$outcome <- outcomes
  
  return(outputs)
  
}

#simulate data many times, each time taking the UK sample (with simulated null effects),
#adding a true ATE to it, drawing with replacement from it, and estimating the ATE
power_out <- pblapply(1:1000, function(i) simulate_main(d, ATEs, outcomes, n_wave2, prop_treat,
                                            article_effects))
df_power_out <- do.call(rbind, power_out)

#get mean treatment effect estimate and significance
#by outcome and true ATE
power_summ <- df_power_out %>%
  group_by(outcome, ATE) %>%
  summarise(across(everything(), mean, na.rm = TRUE))

#transform to wide and sort by outcome
power_wide <- power_summ[,c("outcome","ATE","sign","fdr_sign")] %>%
  pivot_wider(
    id_cols = c(outcome),
    names_from = ATE,
    values_from = c(sign, fdr_sign),
    names_sep = "_ATE"
  ) %>%
  arrange(outcome)

#write to files
save(power_wide, n_wave2, prop_treat, ATEs, file="power_pooled.Rdata")
power_wide_rounded <- power_wide %>%
  mutate(across(where(is.numeric), ~ round(.x, 3)))
write.csv(power_wide_rounded, "power_pooled.csv", row.names=F)

