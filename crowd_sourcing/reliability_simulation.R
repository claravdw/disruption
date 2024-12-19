library(irr)

n_art <- 50
n_rater <- 10
noise_sd <- c(.5, 1, 1.5, 2)

simulate_reliability <- function(n_art, n_rater, noise_sd){
  
  #true scores of the articles from a discrete uniform
  true_article_scores <- rep(1:5, each=n_art/5)
  
  #add "noise" from the raters having their own opinions
  ratings <- sapply(1:n_rater, function(x) true_article_scores + rnorm(n_art, 0, noise_sd))
  #(for simplicity, do raters not have any systematic bias, only error)
  
  #icc for just the first pair of raters
  icc_est <- icc(ratings[,1:2], model="oneway")$value
  #one-way model due to no systematic rater effects
  
  #absolute distance between all-rater average and the true mean
  mean_ratings <- apply(ratings, 1, mean)
  #return(mean_ratings)
  error <- mean(abs(mean_ratings - true_article_scores))
  
  return(c("icc"=icc_est, "err"=error))
  
}

icc_err <- sapply(noise_sd, function(sd){
  icc_err_per_sim <- replicate(100, simulate_reliability(n_art, n_rater, sd))
  mean_icc_err <- apply(icc_err_per_sim, 1, mean)
})
round(icc_err, 2)

#plotting the result of one simulation:
#plot(icc_err_per_sim["icc",], icc_err_per_sim["err",], xlab = "ICC", ylab = "Sample mean error")
