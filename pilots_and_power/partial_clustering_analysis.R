
#alternative analysis with clustering only on the treated
#as of now, I don't understand why these turn up much larger SEs

#version 1: pre-estimating the coefficient of the wave 1 outcome and holding it constant 

fit <- lm(get(paste0(outcome, "_addon_w2")) ~ Treated_sim + get(outcome), data=d_sample)

#get coefficient of wave 1 outcome (should be held constant)
wave1_coef <- coeftest(fit)["(Intercept)", 1]

#estimate treatment group intercept and its SE (with clustering)
d_sample_treated <- d_sample[d_sample$Treated_sim==1,]
fit_treated <- lm(get(paste0(outcome, "_addon_w2")) ~ + offset(wave1_coef*get(outcome)),
                  data=d_sample_treated)
cluster_se_treated <- vcovCL(fit_treated, cluster = d_sample_treated$Article)
est_treated <- coeftest(fit_treated, vcov = cluster_se_treated)["(Intercept)", 1]
se_treated <- coeftest(fit_treated, vcov = cluster_se_treated)["(Intercept)", 2]

#estimate control group intercept and its SE (without clustering)
d_sample_control <- d_sample[d_sample$Treated_sim==0,]
fit_control <- lm(get(paste0(outcome, "_addon_w2")) ~ + offset(wave1_coef*get(outcome)),
                  data=d_sample_control)
est_control <- coeftest(fit_control)["(Intercept)", 1]
se_control <- coeftest(fit_control)["(Intercept)", 2]


#version 2: first-differencing with wave 1 outcome

#estimate treatment group intercept and its SE (with clustering)
outcome_diff <- d_sample[paste0(outcome, "_addon_w2")] - d_sample[outcome]
fit_treated <- lm(outcome_diff[d_sample$Treated_sim==1,] ~ 1)
cluster_se_treated <- vcovCL(fit_treated, cluster = d_sample$Article[d_sample$Treated_sim==1])
est_treated <- coeftest(fit_treated, vcov = cluster_se_treated)["(Intercept)", 1]
se_treated <- coeftest(fit_treated, vcov = cluster_se_treated)["(Intercept)", 2]

#estimate control group intercept and its SE (without clustering)
fit_control <- lm(outcome_diff[d_sample$Treated_sim==0,] ~ 1)
est_control <- coeftest(fit_control)["(Intercept)", 1]
se_control <- coeftest(fit_control)["(Intercept)", 2]

#estimate treated-control difference and its SE
est_alt <- est_treated - est_control
se_alt <- sqrt(se_treated^2 + se_control^2)


#version 3: no controlling for wave 1 outcome

#estimate treatment group intercept and its SE (with clustering)
fit_treated <- lm(get(paste0(outcome, "_addon_w2")) ~ 1, data=d_sample_treated)
cluster_se_treated <- vcovCL(fit_treated, cluster = d_sample_treated$Article)
est_treated <- coeftest(fit_treated, vcov = cluster_se_treated)["(Intercept)", 1]
se_treated <- coeftest(fit_treated, vcov = cluster_se_treated)["(Intercept)", 2]

#estimate control group intercept and its SE (without clustering)
fit_control <- lm(get(paste0(outcome, "_addon_w2")) ~ 1, data=d_sample_control)
est_control <- coeftest(fit_control)["(Intercept)", 1]
se_control <- coeftest(fit_control)["(Intercept)", 2]

#estimate treated-control difference and its SE
est_alt <- est_treated - est_control
se_alt <- sqrt(se_treated^2 + se_control^2)