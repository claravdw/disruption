library(BayesFactor)

#load clean RA ratings of summarized and unsummarized versions
#of the same articles
df_summ <- read.csv("RA_pilot_clean.csv")
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
common_cols <- intersect(colnames(df_summ), colnames(df_unsumm))
df_summ <- df_summ[, c(common_cols, "never_summed")]

#merge
df <- merge(df_summ, df_unsumm, by="id", suffixes = c(".sum",".unsum"))
#inspect differences
View(df[,order(colnames(df))])

#Bayesian test of the difference between the ratings for each characteristic
common_chars <- common_cols[-1] #drop "id" as a column of interest
result <- as.data.frame(t(sapply(common_chars, function(one_char){
  
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
  c(mean_sum=mean(x), mean_unsum=mean(y), diff=diff, BF=as.vector(ttest))
  
})))
names(result)[4] <- "BayesFactor"
round(result, 3)

#check differences in means for non-summarized articles
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

