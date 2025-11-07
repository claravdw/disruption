##load, clean and merge data

#load clean Ro and Asger ratings of the same articles
df_Asg <- read.csv("../rating_data/RA_pilot_clean.csv")
df_Ro <- read.csv("Ro_practice_clean.csv")

#drop non-specific articles that i accidentally had Ró code
nonspec <- c("Sun_2022-11-07_LOVEDUP-Just-Stop_summary.html",
             "The-Times_2021-09-25_Chaos-This-is_summary.html")
df_Ro <- df_Ro[!(df_Ro$id %in% nonspec),]

#only keep pilot columns that were kept after power calculations
common_cols <- intersect(colnames(df_Asg), colnames(df_Ro))
df_Asg <- df_Asg[, common_cols]

#merge
df <- merge(df_Asg, df_Ro, by="id", suffixes = c(".Asger",".Ro"))
df <- df[,order(colnames(df))]

#inspect differences
View(df)
write.csv(df, "Asger_Ro_comparison.csv", row.names = FALSE)

##analyze results for all articles

compare_ratings <- function(one_char, df){
  
  print(one_char)
  #get characteristic column names
  char_Asg <- paste0(one_char, ".Asger")
  char_Ro <- paste0(one_char, ".Ro")
  #drop cases with missingness
  complete <- complete.cases(df[,c(char_Asg, char_Ro)])
  #get difference in means
  x <- as.numeric(df[complete, char_Asg])
  y <- as.numeric(df[complete, char_Ro])
  diff <- mean(y-x)
  #scatterplot
  png(filename=paste0("plots/", one_char))
  plot(jitter(x, .1), jitter(y, .5), main = one_char)
  dev.off()
  return(diff)
  
}

#difference between the ratings for each characteristic
common_chars <- common_cols[-1] #drop "id" as a column of interest
diffs <- as.data.frame(t(sapply(common_chars, function(one_char) compare_ratings(one_char, df))))