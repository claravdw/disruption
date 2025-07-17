library(haven)
library(dplyr)
library(naniar)
library(ggplot2)
library(dplyr)
library(irr)
library(tidyr)
library(psych)
library(gtools)

#note: for privacy reasons, the survey response .sav files that this
#script processes are not made available in the disruption GitHub
#repository

crowd_wide <- read_sav("Crowdsourcing pilot.sav")
no_of_rounds <- 5 #number of articles seen by each crowdsourcing coder

#drop raters who spent less than 12 minutes
crowd_wide <- crowd_wide[crowd_wide$Duration__in_seconds_ > 720,]

#add catch-up sample (of the dropped articles)
catchup_wide <- read_sav("Crowdsourcing pilot catch-up sample.sav")

#function that return one round's worth of answers from the wide data frame
get_one_round <- function(no, d_wide){
  
  #get the responses from this round (not the article full texts)
  roundvars <- colnames(d_wide)[grep(no, colnames(d_wide))]
  roundvars <- roundvars[-grep("article", roundvars)]
  
  #drop the timer questions
  roundvars <- roundvars[-grep("timer", roundvars)]  
  
  #add respondent ID and other relevant vars
  othervars <- c("ProlificID")
  crowd_oneround <- d_wide[c(othervars, roundvars)]
  
  #add round variable
  crowd_oneround$round <- no
  
  #remove round indicators from var names
  Apattern <- paste0("A", no, "_")
  colnames(crowd_oneround) <- gsub(Apattern, "", colnames(crowd_oneround))
  colnames(crowd_oneround) <- gsub(no, "", colnames(crowd_oneround))
  
  return(crowd_oneround)
  
}

#loop over rounds and put the relevant responses and IDs
#into a long dataframe
crowd <- lapply(1:no_of_rounds, get_one_round, crowd_wide)
d_crowd <- do.call(rbind, crowd)

#same for catch-up sample
catchup <- lapply(1:no_of_rounds, get_one_round, catchup_wide)
d_catchup <- do.call(rbind, catchup)


##clean data

#leave out "Chaos at airports" article; no protest
d_crowd <- d_crowd[d_crowd$id != "Daily-Mail_2021-09-27_Chaos-at-airports_summary.html",]

#leave out (1) from article file names in catch-up
d_catchup$id <- gsub("\\(1\\)", "", d_catchup$id)
#(used to make sure articles were repeated if needed)

#add NA for the questions that were left out in catch-up sample
#(because we already decided not to use them)
miscol <- colnames(d_crowd)[!colnames(d_crowd) %in% colnames(d_catchup)]
for(col in miscol){
  d_catchup[[col]] <- NA
}

#join original and catch-up sample
d_crowd <- rbind(as.data.frame(d_crowd), as.data.frame(d_catchup))

#leave out "99" responses
d_crowd <- d_crowd %>% replace_with_na_all(condition = ~.x == 99)


##analyze "unclear" responses

#flag cases where respondents say unclear
disruption_unclear <- d_crowd$disruption_clarity == 1
radicalness_unclear <- is.na(d_crowd$radicalness_clarity) | d_crowd$radicalness_clarity == 1
#i.e. "no demand given"
ordinary_unclear <- d_crowd$ordinary_clarity == 1

#check for which articles most respondents say unclear
disrupt_most_unclear <- tapply(disruption_unclear, d_crowd$id, function(x) mean(x) >= .5)
radical_most_unclear <- tapply(radicalness_unclear, d_crowd$id, function(x) mean(x) >= .5)
ordinary_most_unclear <- tapply(ordinary_unclear, d_crowd$id, function(x) mean(x) >= .5)

#check how many such articles there are
sum(disrupt_most_unclear)
sum(radical_most_unclear)
sum(ordinary_most_unclear)

#replace all ratings on that question with NA for those articles
ids_disrupt_unclear <- names(disrupt_most_unclear)[disrupt_most_unclear]
ids_radical_unclear <- names(radical_most_unclear)[radical_most_unclear]
ids_ordinary_unclear <- names(ordinary_most_unclear)[ordinary_most_unclear]
d_crowd$disruption[d_crowd$id %in% ids_disrupt_unclear] <- NA
d_crowd$radicalness[d_crowd$id %in% ids_radical_unclear] <- NA
d_crowd$ordinary[d_crowd$id %in% ids_ordinary_unclear] <- NA
#in the final study, we will impute these and introduce a imputation dummy


##analyze ICCs

#column names of quantitative questions
quant_qs <- c("acceptance", "disruption", "radicalness",
              "issuebundle", "ordinary", "portrayal")

#function to calculate the type 3 ICC
#(i.e. rater FEs, consistency only)
calculate_icc <- function(q){
  
  #go from long to wide
  d_wide <- d_crowd %>%
    pivot_wider(
      id_cols = id,
      names_from = ProlificID,
      values_from = q,
      names_sep = "_"
    )
  
  #we use pysch::ICC because it can deal with missing values
  rcols <- c("ICC", "p", "lower bound", "upper bound")
  result <- ICC(as.matrix(d_wide[-1]), lmer=TRUE, missing=FALSE)$results[5,rcols]
  
  return(result)
}

# Create ICC results table
icc_results <- t(sapply(quant_qs, calculate_icc))
icc_results


##investigate rareness of characteristics

d_long <- d_crowd %>%
  select(all_of(quant_qs)) %>%
  pivot_longer(cols = everything(), names_to = "variable", values_to = "value")

# Plot faceted histograms
ggplot(d_long, aes(x = value)) +
  geom_histogram(bins = 30, fill = "steelblue", color = "white") +
  facet_wrap(~ variable, scales = "free") +
  theme_minimal() +
  labs(x = "Value", y = "Count", title = "Histograms of Selected Variables")

#means for Pilot 2 overview table
round(apply(d_crowd[quant_qs], 2, mean, na.rm=TRUE), 2)


##average by article and write to file

#list of columns we decided to keep
keep_qs <- c("acceptance", "disruption", "ordinary")

#summarize each by article
d_ratings <- d_crowd %>%
  group_by(id) %>%
  summarise(across(all_of(keep_qs), \(x) mean(x, na.rm = TRUE)))

##write to file
write.csv(d_ratings, "crowdsourcing_pilot_clean.csv", row.names=F)



##investigate timing

hist(crowd_wide$Duration__in_seconds_)
summary(crowd_wide$Duration__in_seconds_/60) #in mins

#add the two pages of each round
timers_per_round <- lapply(1:no_of_rounds, function(no){
  
  timer_page1 <- paste0("A", no, "_timer_qset1_Page_Submit")
  timer_page2 <- paste0("A", no, "_timer_qset2_Page_Submit")
  time_spent <- crowd_wide[timer_page1] + crowd_wide[timer_page2]
  names(time_spent) <- "time_spent"
  time_spent$round <- no
  return(time_spent)
  
})
d_timers <- do.call(rbind, timers_per_round)

#time spent per round
time_per_round <- aggregate(d_timers$time_spent, list(d_timers$round), mean, na.rm=T)
names(time_per_round) <- c("round", "time_spent")
ggplot(time_per_round, aes(x=round, y=time_spent)) +
  geom_bar(stat = "identity")

#in minutes
time_per_round$time_spent / 60
#conclusion: approx. 3 extra minutes are spent
#on answering questions the first time; then
#about 3 minutes per article
