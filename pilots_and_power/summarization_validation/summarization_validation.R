library(BayesFactor)

##load, clean and merge data

#load clean RA ratings of summarized and unsummarized versions
#of the same articles
df_summ <- read.csv("../rating_data/RA_pilot_clean.csv")
df_unsumm <- read.csv("RA_pilot_unsummarized_clean.csv")

#flag the articles in the "summarized" coding pilot
#that were actually originals (due to being short enough)
df_summ$never_summed <- grepl("_original.html", df_summ$id)

#replace "summary" with "original" in ids in order to
#match ids between the summarized and unsummarized pilots
df_summ$id <- gsub("_summary.html", "_original.html", df_summ$id)

#create "folded" columns for tone of portrayal
df_summ$portray_folded <- abs(df_summ$portrayal - 3)
df_unsumm$portray_folded <- abs(df_unsumm$portrayal - 3)

#only keep pilot columns that were kept after power calculations
#(the others are absent in the sunsummarized rating file)
common_cols <- intersect(colnames(df_summ), colnames(df_unsumm))
df_summ <- df_summ[, c(common_cols, "never_summed")]

#merge
df <- merge(df_summ, df_unsumm, by="id", suffixes = c(".sum",".unsum"))
#inspect differences
View(df[,order(colnames(df))])


##analyze results for all (actually summarized) articles

#Bayesian test of the difference between the ratings for one characteristic
Bayes_test_sum_unsum <- function(one_char, df){
  
  #get characteristic column names
  char_sum <- paste0(one_char, ".sum")
  char_unsum <- paste0(one_char, ".unsum")
  #drop cases with missingness
  complete <- complete.cases(df[,c(char_sum, char_unsum)])
  #drop cases that were not summarized
  keep <- complete & !df$never_summed
  #get difference in means
  x <- df[keep, char_sum]
  y <- df[keep, char_unsum]
  diff <- mean(y-x)
  #perform t-test
  ttest <- ttestBF(x = x,
                   y = y,
                   rscale = "medium",
                   paired = TRUE)
  return(c(mean_sum=mean(x), mean_unsum=mean(y), diff=diff, BF=as.vector(ttest)))
  
}

#Bayesian test of the difference between the ratings for each characteristic
common_chars <- common_cols[-1] #drop "id" as a column of interest
result <- as.data.frame(t(sapply(common_chars, function(one_char) Bayes_test_sum_unsum(one_char, df))))
names(result)[4] <- "BayesFactor"

#write result to file, round to two decimal digits
result_round <- result %>%  mutate(across(where(is.numeric), ~ sprintf("%.2f", round(., 2))))
write.csv(result_round, "summarization_validation_results.csv", quote = FALSE)


##analyze results for specific articles only

#some articles' originals were actually not "owe-specific". Drop these.
df_owe_specific <- read.csv("batch6_llm_screening_selected_Asger_and_Clara.tsv", sep="\t")
df <- merge(df, df_owe_specific[,c("id","Owe_specific_Clara")], by="id")
df_only_spec <- df[df$Owe_specific_Clara=="Yes",]

#re-analyze using only specific articles
result_only_spec <- as.data.frame(t(sapply(common_chars, function(one_char) Bayes_test_sum_unsum(one_char, df_only_spec))))
names(result_only_spec)[4] <- "BayesFactor"

#write result to file, round to two decimal digits
result_only_spec_round <- result_only_spec %>%  mutate(across(where(is.numeric), ~ sprintf("%.2f", round(., 2))))
write.csv(result_only_spec_round, "summarization_validation_results_speconly.csv", quote = FALSE)



##check differences in means for never-summarized articles

diff_neversum <- sapply(common_chars, function(one_char){
  
  #get characteristic column names
  char_sum <- paste0(one_char, ".sum")
  char_unsum <- paste0(one_char, ".unsum")
  #drop cases with missingness
  complete <- complete.cases(df[,c(char_sum, char_unsum)])
  #drop cases that were summarized
  keep <- complete & df$never_summed
  #get difference in means
  x <- df[keep, char_sum]
  y <- df[keep, char_unsum]
  diff <- mean(y-x)
  
})

