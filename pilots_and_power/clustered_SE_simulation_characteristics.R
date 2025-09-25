library(pbapply)
library(lmtest)
library(sandwich)
library(clubSandwich)
library(lme4)
set.seed(123)  # for reproducibility

# Simulate 1000 articles with four binary characteristics
n_articles <- 1000
article_characteristics <- matrix(rbinom(n_articles*4, 4, .25)/4, nrow=n_articles)
hist(article_characteristics)

#calculate the effect of each article given some characteristic effects
char_ATEs <- c(.15, .2, .3, .4)
article_sd_unexp <- .15 #standard deviation unexplained by the characteristics
article_effects <- sapply(1:n_articles, function(article){
    
    #look up the characteristic scores of this id
    id_charscores <- article_characteristics[article,]
    
    #dot product of the characteristics and their ATEs
    effect <- char_ATEs  %*% as.numeric(id_charscores)
    
    #plus an additional, unexplained effect
    effect <- effect + rnorm(1, 0, article_sd_unexp)
    
  })
sd(article_effects)

# Simulation parameters
n_sims <- 250
n_treated <- 2800
n_articles_per_sim <- 100
respondents_per_article <- 28
n_bootstraps <- 250

result <- simplify2array(pblapply(1:n_sims, function(i) {
  
  # Step a: Simulate respondent effects
  respondent_effects <- rnorm(n_treated, mean = 0, sd = 1)
  
  # Step b: Randomly draw 100 articles
  sampled_articles <- sample(1:n_articles, n_articles_per_sim)
  
  # Step c: Assign 28 respondents to each article
  treated_ids <- sample(1:n_treated)  # shuffle
  #for each article, get the list of respondent ids that are assigned to it
  treated_assignment <- split(treated_ids[1:(n_articles_per_sim * respondents_per_article)], 
                              rep(sampled_articles, each = respondents_per_article))
  
  # Step d: Set up dataset
  df <- data.frame(
    respondent_id = 1:n_treated,
    respondent_effect = respondent_effects,
    article_id = 0,
    article_effect = 0  # default = 0 (for control)
  )
  #create columns for characteristics
  charnames <- paste0("char", char_ATEs)
  df[,charnames] <- 0
  
  # Step e: Assign article IDs, effect and characteristics to respondents
  for (art in names(treated_assignment)) {
    #get respondents assigned to this article
    ids <- treated_assignment[[art]]
    #add article id and effect to df
    df$article_id[ids] <- as.numeric(art)
    df$article_effect[ids] <- article_effects[as.numeric(art)]
    #assign characteristics of articles to repondents
    art_chars <- article_characteristics[as.numeric(art),]
    df[ids, charnames] <- matrix(rep(art_chars, length(ids)), ncol = 4, byrow = TRUE)
  }
  
  # Step f: Define outcome
  df$outcome <- df$respondent_effect + df$article_effect
  
  # Step g: run analysis and get SEs
  
  # fit model and get estimate
  formula_string <- paste("outcome ~ ", paste(charnames, collapse= " + "))
  formula_base <- as.formula(formula_string)
  fit <- lm(formula_base, data=df)
  est <- coeftest(fit)[-1, 1]
  se <- coeftest(fit)[-1, 2]
  
  # get RE estimate of effect size and SE
  formula_RE <- as.formula(paste(formula_string, "+ (1 | article_id)"))
  fit_RE <- lmer(formula_RE, data = df)
  est_RE <- coef(summary(fit_RE))[-1, 1]
  se_RE <- coef(summary(fit_RE))[-1, 2]
  
  # get vcovCL SE estimate
  cluster_CL <- vcovCL(fit, cluster = df$article_id)
  se_CL <- coeftest(fit, vcov = cluster_CL)[-1, 2]
  
  # get vcovCL SE estimate
  cluster_CR <- vcovCR(fit, cluster = df$article_id, type = "CR4")
  se_CR <- coeftest(fit, vcov = cluster_CR)[-1, 2]
  
  # get bootstrapped SE estimate
  boot_estimates <- sapply(1:n_bootstraps, function(b) {
    
    # Step 1: sample article_ids with replacement
    sampled_articles <- sample(unique(df$article_id),
                               size = length(unique(df$article_id)),
                               replace = TRUE)
    
    # Step 2: for each sampled article, sample rows with replacement
    df_list <- lapply(sampled_articles, function(aid) {
      rows <- df[df$article_id == aid, ]
      rows[sample(nrow(rows), size = nrow(rows), replace = TRUE), ]
    })
    df_sampled <- do.call(rbind, df_list)
    
    # Step 3: run regression
    fit <- lm(formula_base, data = df_sampled)
    
    # Step 4: store coefficients on characteristics
    coef(fit)[-1]
    
  })
  # Step 6–7: bootstrap standard error
  se_boot <- sd(boot_estimates)
  
  #store them
  return(cbind(est=est, se=se, est_RE=est_RE, se_RE=se_RE,
           se_CL=se_CL, se_CR=se_CR, se_boot=se_boot))
  
}))


# Compare average estimate across simulations (SE)
# with real treatment effect

apply(result[,"est",], 1, mean)
apply(result[,"est_RE",], 1, mean)

# Compare "real" estimate variability across simulations (SE)
# with average SE estimates for various clustering techniques,
#for each characteristic (with different ATEs)

apply(result[,"est",], 1, sd) #real sd
apply(result[,"se",], 1, mean) #uncorrected SE
apply(result[,"se_RE",], 1, mean) #random effects
apply(result[,"se_CL",], 1, mean) #cluster correction
apply(result[,"se_CR",], 1, mean) #other cluster correction
apply(result[,"se_boot",], 1, mean)  #bootstrap

# By what factor is the non-corrected SE usually off?

lapply(1:4, function(i) apply(result[,"est",], 1, sd) / apply(result[i,"est",], 1, sd))

#correction factor
sd(df_result$est) / mean(df_result$se)
