setwd("~/GDrive/All the disobedience/pilots and power")
library(plyr)
library(dplyr)
library(pbapply)
library(lmtest)
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
dropchars <- c("visualAppearanceCostumes", #"negative_comments_words_pics",
               "levelOfDisruption.PublicDamaging")
d_ratings <- d_ratings[,!names(d_ratings) %in% dropchars]


##set parameters

#group characteristics into blocks
char_blocks <- c(rep(1, 9), 2, 4, 3, 3, 2, 2, 2)
names(char_blocks) <- colnames(d_ratings)[-1]
char_blocks #double check

#assumptions about sample size and retention rate between waves
n_wave1 <- 3500 #recruited in wave 1
retention_est <- .95 #predicted % retained until wave 2
n_wave2 <- round(n_wave1 * retention_est)
prop_treat <- .8 #proportion of respondents treated

#different treatment effect scenarios
ATE_chars <- c(0, 0, 0, 0, 0, 0, 0, 0, .15, .2, .3, .4)

#function to assign observations from the original dataset to treatment, add characteristic effects
#to calculate the right ATE for each article, and estimate the ATE and its significance for one outcome by
#regressing wave 2 outcome on characteristics (and wave 1 outcomes) block by block
simulate_main <- function(d, ATE_chars, ids, n_wave2, prop_treat){
  
  
  ##Step 1: randomly assign original sample (of simulated control respondents)
  ##to articles
  
  #make vector with the right number of each article ids and permute it
  articles <- rep(sample(ids), length.out=nrow(d))
  d$Article <- sample(articles) #permutation
  
  #merge in article characteristics
  d <- merge(d, d_ratings, by.x="Article", by.y="id")
  
  
  ##Step 2: randomly sample ATE scenario per characteristic,
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
    char_ATEs  %*% as.numeric(id_charscores[characteristics])
    
  })
  
  
  ##Step 3: add article's ATE to all its readers
  
  d["outcome_scale_addon_w2"] <- d["outcome_scale_w2"]
  #add article effect
  for(article in ids){
    
    #message("working on article n. ", article)
    readers <- d$Article == article
    d[readers, "outcome_scale_addon_w2"] <- 
     d[readers, "outcome_scale_w2"] + article_effects[article]
    
  }
  #TO DO: consider adding some noise to reflect that the individual
  #TEs might not be this even (causing sampling error to be larger)
  
  
  ##Step 4: sample with replacement to get as many observations as
  ##there will be readers of each article in study 2
  
  d_sample <- d[0,]
  n_treated_sample <- round(n_wave2 * prop_treat)
  n_per_article <- round(n_treated_sample / length(ids))
  for(article in ids){
    readers <- d$Article == article
    sample_article <- sample(which(readers), size=n_per_article, replace=T)
    d_sample <- rbind(d_sample, d[sample_article,])
  }

  
  ##Step 5: estimate characteristic treatment effects, adding them block by block
  ##and save the estimates and their significance
  
  outputs <- lapply(1:max(char_blocks), function(block){

    #get characteristics in this block
    chars_of_interest <- characteristics[char_blocks == block]

    #get characteristics in previous blocks
    covariates <- characteristics[char_blocks < block]

    #add characteristics from this and all previous blocks to the model
    IVs <- paste(c(chars_of_interest, covariates), collapse = " + ")
    formula <- as.formula(
      paste("outcome_scale_addon_w2 ~ outcome_scale + ", IVs)
    )
    fit <- lm(formula, data=d_sample)

    #clustered SEs
    cluster_se <- vcovCR(fit, cluster = d_sample$Article, type = "CR4")

    #get coefs of characteristics in the block
    est <- coeftest(fit, vcov = cluster_se)[chars_of_interest, 1]
    p <- coeftest(fit, vcov = cluster_se)[chars_of_interest, 4]

    #add their ATEs in this iteration
    results_of_interest <- data.frame(characteristic = chars_of_interest,
                                      block = block,
                                      ATE = char_ATEs[chars_of_interest],
                                      est, p=p, sign=p<.05)

  })
  outputs <- do.call(rbind, outputs)
  
  #add two-stage FDR-adjusted p-values
  fdr_result <- mt.rawp2adjp(outputs$p, proc="TSBH")
  outputs$fdr <- fdr_result$adjp[order(fdr_result$index), "TSBH_0.05"]
  #should be equivalent to: adjust.p(outputs$p, pi0.method = "bky")
  #classic non-adaptive BH (1995) is: p.adjust(outputs$p, method="BH")
  
  #add significance for those
  outputs$fdr_sign <- outputs$fdr < .05

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

#transform to wide and sort by block, then characteristic
power_wide <- power_summ[,c("characteristic","block","ATE","sign","fdr_sign")] %>%
  pivot_wider(
    id_cols = c(characteristic, block),
    names_from = ATE,
    values_from = c(sign, fdr_sign),
    names_sep = "_ATE"
  ) %>%
  arrange(block, characteristic)

#sort by block and then name
power_wide <- power_wide[order(power_wide$block, power_wide$characteristic), ]

#write to files
save(power_wide, n_wave2, prop_treat, ATE_chars, file="power_characteristics.Rdata")
power_wide_rounded <- power_wide %>%
  mutate(across(where(is.numeric), ~ round(.x, 3)))
write.csv(power_wide_rounded, "power_characteristics.csv", row.names=F)

