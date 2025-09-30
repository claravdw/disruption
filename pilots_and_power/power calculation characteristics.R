library(plyr)
library(dplyr)
library(pbapply)
library(lmtest)
library(lmerTest)
library(sandwich)
library(clubSandwich)
library(corrplot)
library(tidyr)
library(dplyr)
library(multtest)
set.seed(1353)


#script to do characteristic power simulations using the null-treatment dataset

##read and clean study data

#read in the UK study dataset
d <- read.csv("disruption_data_clean2.csv")

#kick out wave 2 dropouts
d <- d[!is.na(d$Treated),]

#pick items going into the scale
scale_items <- c("Concern_humanity", "Concern_myself", "Govt", "Behavior_donate", "Behavior_march",
                 "Policy_tax", "Policy_goal", "Nonewoil", "Fossilinv")

#scale both w1 and w2 by their w1 standard deviations
item_means <- sapply(scale_items, function(item) mean(d[,item], na.rm=T))
item_sds <- sapply(scale_items, function(item) sd(d[,item], na.rm=T))
items_w1 <- do.call(cbind, lapply( scale_items, function(item)
  (d[,item] - item_means[item]) / item_sds[item] ))
items_w2 <- do.call(cbind, lapply( scale_items, function(item)
  (d[,paste0(item, "_w2")] - item_means[item]) / item_sds[item] ))

#create a scale out of the outcomes and subtract the estimated ATE from the treated group
d$outcome_scale <- apply(items_w1, 1, mean, na.rm=T)
d$outcome_scale_w2 <- apply(items_w2, 1, mean, na.rm=T)
ATE_est <- summary(lm(outcome_scale_w2 ~ outcome_scale + Treated, data=d))$coefficients[3, 1]
d$outcome_scale_w2[d$Treated==1] <- d$outcome_scale_w2[d$Treated==1] - ATE_est
#result is a dataset of control respondents (cf. script power_simulate_nulleffects.R,
#but simpler here due to continuous outcome)


##read and clean article pilot ratings

#read in the pilot article ratings and merge RA and crowd
d_RA <- read.csv("rating_data/RA_pilot_clean.csv")
d_crowd <- read.csv("rating_data/crowdsourcing_pilot_clean.csv")
d_ratings <- merge(d_RA, d_crowd, by="id")

#add the LLM ratings
d_LLM <- read.csv("rating_data/LLM_pilot_clean.csv")
d_ratings$id <- gsub("_original.html", "", d_ratings$id)
d_ratings$id <- gsub("_summary.html", "", d_ratings$id)
d_ratings <- merge(d_ratings, d_LLM, by="id")

# Visualize the correlation matrix
cor_matrix <- cor(d_ratings[-1], use = "pairwise.complete.obs")
corrplot(cor_matrix,
         method = "color",         # color-shaded squares
         type = "upper",           # only upper triangle
         addCoef.col = "black",    # add correlation coefficients
         tl.col = "black",         # text label color
         tl.srt = 45,              # label rotation
         number.cex = 0.7,         # size of the coefficients
         col = colorRampPalette(c("red", "white", "blue"))(200))  # color scale

#impute missing values with the column mean
#and re-scale all columns to 0-1
#[] <- assignment keeps d_ratings as a data frame (not a list)
d_ratings[] <- lapply(d_ratings, function(col) {
  
  if (is.numeric(col)) {
    #impute
    col[is.na(col)] <- mean(col, na.rm = TRUE)
    #scale to [0, 1]
    col_min <- min(col, na.rm = TRUE)
    col_max <- max(col, na.rm = TRUE)
    col <- (col - col_min) / (col_max - col_min)
  } else if (is.logical(col)){
    col <- as.numeric(col)
  }
  
  return(col)
})

#duplicate rows to pretend there are 100 articles
#(this is important for the clustering by article
#not to become overly conservative)
d_ratings2 <- d_ratings
d_ratings2$id <- paste0(d_ratings2$id, "_2")
d_ratings <- rbind(d_ratings, d_ratings2)

#get article ids
ids <- d_ratings$id

#drop characteristics that were found to be too low-powered to include
dropchars <- c("visualAppearanceCostumes", 
               "levelOfDisruption.PublicDamaging",
               "levelOfDisruption.BusinessNon.damaging",
               "demogr.Student")
d_ratings <- d_ratings[,!names(d_ratings) %in% dropchars]


##set parameters

#group characteristics into blocks
#char_blocks <- c(rep(1, 9), 2, 4, 3, 3, 2, 2, 2)
char_blocks <- c(rep(1, 10), 2, 4, 3, 3, 2, 2, 2)
names(char_blocks) <- colnames(d_ratings)[-1]
char_blocks #double check

#assumptions about sample size and retention rate between waves
n_wave1 <- 3500 #recruited in wave 1
retention_est <- .95 #predicted % retained until wave 2
n_wave2 <- round(n_wave1 * retention_est)
prop_treat <- .8 #proportion of respondents treated

#different treatment effect scenarios
ATE_chars <- c(0, 0, 0, 0, 0, 0, 0, 0, .15, .2, .3, .4)

#calculate the typical sd of article effects that we get when
#randomly sampling the effect of each characteristic from
#this distribution (to inform other simulations)
effect_sds <- sapply(1:500, function(x){
  
  characteristics <- names(char_blocks)
  char_ATEs <- sapply(characteristics, function(x) sample(ATE_chars, 1))
  article_effects <- sapply(ids, function(article){
    
    #look up the characteristic scores of this id
    id_charscores <- d_ratings[d_ratings$id == article,]
    
    #dot product of the characteristics and their ATEs
    char_ATEs  %*% as.numeric(id_charscores[characteristics])
    
  })
  sd(article_effects)
  
})
mean(effect_sds)

#sd of article effects not due to characteristics
article_sd_unexp <- .05

#function to assign observations from the original dataset to treatment, add characteristic effects
#to calculate the right ATE for each article, and estimate the ATE and its significance for one outcome by
#regressing wave 2 outcome on characteristics (and wave 1 outcomes) block by block
simulate_main <- function(d, ATE_chars, ids, n_wave2, prop_treat){
  
  
  ##Step 1: sample with replacement to get as many observations as
  ##there will be in the study's wave 2 treated group
  
  n_treated_sample <- round(n_wave2 * prop_treat)
  sample_treated <- sample(nrow(d), size=n_treated_sample, replace=T)
  d_sample <- d[sample_treated,]
  
  
  ##Step 2: randomly assign to articles
  
  #make vector with the right number of each article ids and permute it
  articles <- rep(sample(ids), length.out=n_treated_sample)
  d_sample$Article <- sample(articles) #permutation
  
  #merge in article characteristics
  d_sample <- merge(d_sample, d_ratings, by.x="Article", by.y="id")
  
  
  ##Step 3: randomly sample ATE scenario per characteristic,
  #and create the article's total ATE from its characteristics
  
  #get an ATE for each characteristic
  characteristics <- names(char_blocks)
  char_ATEs <- sapply(characteristics, function(x) sample(ATE_chars, 1))
  
  #get the total ATE for each article based on its
  #characteristics
  article_effects <- sapply(ids, function(article){
    
    #look up the characteristic scores of this id
    id_charscores <- d_ratings[d_ratings$id == article,]
    
    #dot product of the characteristics and their ATEs
    effect <- char_ATEs  %*% as.numeric(id_charscores[characteristics])
    
    #plus an additional, unexplained effect
    effect <- effect + rnorm(1, 0, article_sd_unexp)
    
  })
  
  
  ##Step 4: add article's ATE to all its readers
  
  d["outcome_scale_addon_w2"] <- d["outcome_scale_w2"]
  #add article effect
  for(article in ids){
    
    #message("working on article n. ", article)
    readers <- d_sample$Article == article
    d_sample[readers, "outcome_scale_addon_w2"] <- 
      d_sample[readers, "outcome_scale_w2"] + article_effects[article]
    
  }
  
  
  ##Step 5: estimate characteristic treatment effects, adding them block by block
  ##and save the estimates and their significance
  
  outputs <- lapply(1:max(char_blocks), function(block){
    
    #get characteristics in this block
    chars_of_interest <- characteristics[char_blocks == block]
    
    #get characteristics in previous blocks
    covariates <- characteristics[char_blocks < block]
    
    #add characteristics from this and all previous blocks to a RE model
    IVs <- paste(c(chars_of_interest, covariates), collapse = " + ")
    formula <- as.formula(
      paste("outcome_scale_addon_w2 ~ outcome_scale + ", IVs, " + (1 | Article)")
    )
    fit <- lmer(formula, data=d_sample)
    
    #get coefs of characteristics in the block
    est <- coef(summary(fit))[chars_of_interest, 1]
    p <- coef(summary(fit))[chars_of_interest, 5]
    #p-values are added due to package lmerTest
    
    #add clustered SE approach for comparison
    formula <- as.formula(
      paste("outcome_scale_addon_w2 ~ outcome_scale + ", IVs)
    )
    fit <- lm(formula, data=d_sample)
    cluster_se <- vcovCL(fit, cluster = d_sample$Article)
    #alternative:
    #cluster_se <- vcovCR(fit, cluster = d_sample$Article, type = "CR4")
    est_CL <- coeftest(fit, vcov = cluster_se)[chars_of_interest, 1]
    p_CL <- coeftest(fit, vcov = cluster_se)[chars_of_interest, 4]
    
    #add their ATEs in this iteration
    results_of_interest <- data.frame(characteristic = chars_of_interest,
                                      block = block,
                                      ATE = char_ATEs[chars_of_interest],
                                      est, p=p, sign=p<.05,
                                      #keep the clustered SEs for comparison
                                      est_CL, p_CL, sign_CL=p_CL<.05)
    
  })
  outputs <- do.call(rbind, outputs)
  
  #add two-stage FDR-adjusted p-values
  fdr_result <- mt.rawp2adjp(outputs$p, proc="TSBH")
  outputs$fdr <- fdr_result$adjp[order(fdr_result$index), "TSBH_0.05"]
  #should be equivalent to: adjust.p(outputs$p, pi0.method = "bky")
  #classic non-adaptive BH (1995) is: p.adjust(outputs$p, method="BH")
  
  #add significance for those
  outputs$fdr_sign <- outputs$fdr < .05
  
  #do the same for the clustered SE approach
  fdr_result_CL <- mt.rawp2adjp(outputs$p_CL, proc="TSBH")
  outputs$fdr_CL <- fdr_result_CL$adjp[order(fdr_result_CL$index), "TSBH_0.05"]
  outputs$fdr_sign_CL <- outputs$fdr_CL < .05
  
  return(outputs)
  
}

#simulate data many times, each time drawing with replacement from the UK sample,
#adding article ATEs composed of randomly drawn characteristic effects
power_out <- pblapply(1:3000, function(i) simulate_main(d, ATE_chars, ids, n_wave2, prop_treat))
df_power_out <- do.call(rbind, power_out)

#get mean treatment (characteristic) effect estimate and significance
#by absolute ATE
power_summ <- df_power_out %>%
  group_by(ATE, characteristic, block) %>%
  summarise(across(everything(), mean, na.rm = TRUE))
#note: mean of binary significance is power: % of times effect detected

#leave out cases where ATE was set to zero for realism
power_summ <- power_summ[power_summ$ATE != 0,]

#transform to wide and sort by block, then characteristic,
#using the RE-based, FDR-corrected p-values (fdr_sign)
power_wide <- power_summ[,c("characteristic","block","ATE","sign","fdr_sign","sign_CL","fdr_sign_CL")] %>%
  pivot_wider(
    id_cols = c(characteristic, block),
    names_from = ATE,
    values_from = c(fdr_sign, fdr_sign_CL),
    names_sep = "_ATE"
  ) %>%
  arrange(block, characteristic)

#sort by block and then name, round off
power_wide <- power_wide[order(power_wide$block, power_wide$characteristic), ]
power_wide_rounded <- power_wide %>%
  mutate(across(where(is.numeric), ~ round(.x, 3)))

#write to files
save(power_out, power_wide, n_wave2, prop_treat, ATE_chars, file="power_characteristics.Rdata")
write.csv(power_wide_rounded, "power_characteristics_expanded.csv", row.names=F)