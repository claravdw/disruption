library(pbapply)
library(lmtest)
library(sandwich)
library(clubSandwich)
library(lme4)
set.seed(123)  # for reproducibility

# Simulate 1000 articles with their own effects
n_articles <- 1000
article_sd <- 0.2 #where 1 is the sd of the outcome variable
article_effects <- rnorm(n_articles, mean = 0.25, sd = article_sd)
#so: real average treatment effect of an article is 0.25,
#real s.d. of article effects is 0.2 in Cohen's ds
#as respondents themselves have effects N(0,1)

# Simulation parameters
n_sims <- 250
n_respondents <- 3500
n_control <- 700
n_treated <- 2800
n_articles_per_sim <- 100
respondents_per_article <- 28
n_bootstraps <- 250

df_result <- pbsapply(1:n_sims, function(i) {
  
  # Step a: Simulate respondent effects
  respondent_effects <- rnorm(n_respondents, mean = 0, sd = 1)
  
  # Step b: Random assignment to control vs treated
  assignment <- sample(c(rep("control", n_control), rep("treated", n_treated)))
  
  # Step c: Randomly draw 100 articles
  sampled_articles <- sample(1:n_articles, n_articles_per_sim)
  
  # Step d: Assign treated respondents to each article
  treated_ids <- which(assignment == "treated")
  treated_ids <- sample(treated_ids)  # shuffle
  #for each article, get the list of respondent ids that are assigned to it
  treated_assignment <- split(treated_ids[1:(n_articles_per_sim * respondents_per_article)], 
                              rep(sampled_articles, each = respondents_per_article))
  
  # Step e: Build dataset
  df <- data.frame(
    respondent_id = 1:n_respondents,
    assignment = assignment,
    respondent_effect = respondent_effects,
    article_id = 0,
    article_effect = 0  # default = 0 (for control)
  )
  
  # Assign article IDs and effects to treated respondents
  for (art in names(treated_assignment)) {
    ids <- treated_assignment[[art]]
    df$article_id[ids] <- as.numeric(art)
    df$article_effect[ids] <- article_effects[as.numeric(art)]
  }
  
  # Step f: Define outcome
  df$outcome <- df$respondent_effect + df$article_effect
  
  # Step g: run analysis and get SEs
  
  # fit model and get estimate
  fit <- lm(outcome ~ assignment, data=df)
  est <- coeftest(fit)["assignmenttreated", 1]
  se <- coeftest(fit)["assignmenttreated", 2]
  
  # get RE estimate of effect size and SE
  fit_RE <- lmer(outcome ~ 1 + assignment + (- 1 + assignment | article_id), data = df)
  est_RE <- coef(summary(fit_RE))["assignmenttreated", 1]
  se_RE <- coef(summary(fit_RE))["assignmenttreated", 2]
  
  # get vcovCL SE estimate
  cluster_CL <- vcovCL(fit, cluster = df$article_id)
  se_CL <- coeftest(fit, vcov = cluster_CL)["assignmenttreated", 2]
  
  # get vcovCL SE estimate
  cluster_CR <- vcovCR(fit, cluster = df$article_id, type = "CR4")
  se_CR <- coeftest(fit, vcov = cluster_CR)["assignmenttreated", 2]
  
  
  # # get bootstrapped SE estimate
  # boot_estimates <- sapply(1:n_bootstraps, function(b) {
  #   
  #   # Step 1: sample article_ids with replacement
  #   sampled_articles <- sample(unique(df$article_id), 
  #                              size = length(unique(df$article_id)), 
  #                              replace = TRUE)
  #   
  #   # Step 2: for each sampled article, sample rows with replacement
  #   df_list <- lapply(sampled_articles, function(aid) {
  #     rows <- df[df$article_id == aid, ]
  #     rows[sample(nrow(rows), size = nrow(rows), replace = TRUE), ]
  #   })
  #   df_sampled <- do.call(rbind, df_list)
  #   
  #   # Step 3: also sample control group respondents with replacement
  #   rows_ctrl <- df[df$assignment=="control",]
  #   df_ctrl <- rows_ctrl[sample(nrow(rows_ctrl), size = nrow(rows_ctrl), replace = TRUE), ]
  #   df_sampled <- rbind(df_sampled, df_ctrl)
  #   
  #   # Step 4: run regression
  #   fit <- lm(outcome ~ assignment, data = df_sampled)
  #   
  #   # Step 5: store coefficient on assignment
  #   coef(fit)[["assignmenttreated"]]
  #   
  # })
  # # Step 6–7: bootstrap standard error
  # se_boot <- sd(boot_estimates)
  se_boot <- NA
  
  #store them
  return(c(est=est, se=se, est_RE=est_RE, se_RE=se_RE,
           se_CL=se_CL, se_CR=se_CR, se_boot=se_boot))
  
})
df_result <- as.data.frame(t(df_result))


# Compare average estimate across simulations (SE)
# with real treatment effect

mean(df_result$est)
mean(df_result$est_RE)

# Compare "real" estimate variability across simulations (SE)
# with average SE estimates for various clustering techniques

sd(df_result$est) #real sd
mean(df_result$se) #uncorrected SE
mean(df_result$se_RE) #random effects
mean(df_result$se_CL) #cluster correction
mean(df_result$se_CR) #other cluster correction
mean(df_result$se_boot) #bootstrap

#unclear why RE has non-convergence and huge SEs...

# By what factor is the non-corrected SE usually off?

hist(df_result$se / sd(df_result$est))
mean(df_result$se / sd(df_result$est))
#when article_effects have sd .2, too small by a factor of ca. 88.4%
#when article_effects have sd .25, too small by a factor of ca. 85.5%
#when article_effects have sd .50, too small by a factor of ca. 71%

#correction factor
sd(df_result$est) / mean(df_result$se)
