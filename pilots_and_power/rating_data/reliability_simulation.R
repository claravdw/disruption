library(irr)
library(psych)
set.seed(123)


#simulate rating data with varying levels of noise, and see what ICC levels
#correspond to what amount of error in the final rating averaged over many coders

n_art <- 100 #number of articles rated
n_rater <- 14 #number of raters per article
noise_sd <- c(.5, 1, 1.5, 2, 2.5, 3) #various settings for the amount of noise
scalepoints <- 5 #points of the rating scale

simulate_reliability <- function(n_art, n_rater, noise_sd){

  #true scores of the articles from a binomial
  true_article_scores <- rbinom(n_art, scalepoints, .5)
  
  #add "noise" from the raters having their own opinions
  ratings <- sapply(1:n_rater, function(x) true_article_scores + rnorm(n_art, 0, noise_sd))
  #(for simplicity, do raters not have any systematic bias, only error)
  
  #icc for just the first three raters (as in the pilot)
  icc3 <- icc(ratings[,1:3], model="oneway", unit="average")$value
  #one-way model due to no systematic rater effects
  
  #icc for all raters (as in the final study)
  icc14 <- icc(ratings, model="oneway", unit="average")$value
  
  #absolute distance between all-rater average and the true mean
  mean_ratings <- apply(ratings, 1, mean)
  #return(mean_ratings)
  error <- mean(abs(mean_ratings - true_article_scores))
  
  return(c("icc3"=icc3, "icc14"=icc14, "err"=error))
  
}

icc_err <- sapply(noise_sd, function(sd){
  icc_err_per_sim <- replicate(100, simulate_reliability(n_art, n_rater, sd))
  mean_icc_err <- apply(icc_err_per_sim, 1, mean)
})
round(icc_err, 2)

#plotting the result of one simulation:
#plot(icc_err_per_sim["icc",], icc_err_per_sim["err",], xlab = "ICC", ylab = "Sample mean error")
