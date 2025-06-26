library(dplyr)
library(tidyr)
library(ggplot2)

##Load and clean data

#load data
d <- read.delim("block_word_counts_20250624_174618_corrected.tsv", sep="\t")

#define characteristics of interest
chars <- c("general_disruption", "protester_messaging", "positive_comments", "negative_comments")
#could include "total" but since we are not taking a percentage, we don't need it

#for each one, sum the words and pictures across all article elements,
#and then make a sum where every picture counts for 50 words
df_chars <- lapply(chars, function(char){
  
  char_wordcols <- grep(paste0(char, ".*words"), colnames(d))
  char_piccols <- grep(paste0(char, ".*pictures"), colnames(d))
  wordsums <- apply(d[char_wordcols], 1, sum)
  picsums <- apply(d[char_piccols], 1, sum)
  df_char <- data.frame(cbind(wordsums, picsums))
  colnames(df_char) <- paste0(char, c("_words", "_pictures"))
  df_char[,paste0(char, "_words_pics")] <- df_char[,1] + 50*df_char[,2]
  
  return(df_char)
  
})
df_chars <- do.call(cbind, df_chars)

#keep relevant characteristics
df_chars <- df_chars[,paste0(chars, "_words_pics")]


##Descriptive analysis

# Plot faceted histograms
d_long <- df_chars %>%
  pivot_longer(cols = everything(), names_to = "variable", values_to = "value")
ggplot(d_long, aes(x = value)) +
  geom_histogram(bins = 30, fill = "steelblue", color = "white") +
  facet_wrap(~ variable, scales = "free") +
  theme_minimal() +
  labs(x = "Value", y = "Count", title = "Histograms of Selected Variables")


##Write relevant characteristics to file

#drop positive comments as these are extremely rare
df_chars <- df_chars[,names(df_chars) != "positive_comments_words_pics"]

#take the log
df_chars_log <- log1p(df_chars)

#add id
df_chars_log$id <- d$id

write.csv(df_chars_log, "LLM_pilot_clean.csv", row.names=F)
