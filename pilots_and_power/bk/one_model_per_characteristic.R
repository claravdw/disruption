##alternative Step 5: test each characteristic separately;
#this results in much lower power (and is not the paper's approach)

outputs <- lapply(characteristics, function(char){

  #add only this characteristic to the model
  formula <- as.formula(paste("outcome_scale_addon_w2 ~ outcome_scale + ", char))
  fit <- lm(formula, data=d_sample)

  #clustered SEs
  cluster_se <- vcovCR(fit, cluster = d_sample$Article, type = "CR4")

  #get coefs of characteristics in the block
  est <- coeftest(fit, vcov = cluster_se)[char, 1]
  p <- coeftest(fit, vcov = cluster_se)[char, 4]

  #add their ATEs in this iteration
  results_of_interest <- data.frame(characteristic = char,
                                    block = 99,
                                    ATE = char_ATEs[char],
                                    est, sign=p<.05)

})
outputs <- do.call(rbind, outputs)