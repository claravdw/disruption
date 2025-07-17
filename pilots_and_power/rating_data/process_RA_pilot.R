library(stringr)
library(dplyr)
library(tidyr)
library(ggplot2)

## Load data

# This is the RA coded data; sheet 2 from the auto-generated Google form response sheets
dF_A <- read.delim("Article Characteristics Coding v4 (Responses) - Short column names.tsv", sep="\t",
                 stringsAsFactors=FALSE, check.names=FALSE, quote = "")
dF_B <- read.delim("Article Characteristics Coding v4b (Responses) - Short column names.tsv", sep="\t",
                 stringsAsFactors=FALSE, check.names=FALSE, quote = "")
#version B contains additional Issue Bundling and Portrayal questions

# This is the data that describes the coding form the humans filled in; most needed for the response options
form_data <- read.delim("protestCharacteristicFormB6.tsv", sep="\t", stringsAsFactors=FALSE,
                        check.names=FALSE, quote = "")


## Delete text responses and metadata, and merge

text_questions <- form_data$Name[form_data$Type == "TEXT"]
metadata <- c("Timestamp", "Coder", "Title")
dF_A <- dF_A[!colnames(dF_A) %in% c(text_questions, metadata)]
dF_B <- dF_B[!colnames(dF_B) %in% c(text_questions, metadata)]
dF <- merge(dF_A, dF_B, by="id")


## Use the form_data response options to get the ordinality right for Likert scales

multiple_choice_questions <- form_data$Name[form_data$Type == "MULTIPLE_CHOICE"]
for (question in multiple_choice_questions) {
  response_options_text <- as.character(form_data$`Response options`[form_data$Name == question])
  response_options <- unlist(strsplit(response_options_text, "; "))
  ordinal_options <- response_options[!grepl("not enough detail|Not enough information", response_options)]
  dF[[question]] <- factor(dF[[question]],
                           levels = ordinal_options,
                           ordered = TRUE)
  dF[[question]] <- as.integer(dF[[question]])
}


## Make the variable names more usable

stringToCamelCase <- function(x) {
  sapply(x, function(str) {
    parts <- unlist(strsplit(str, "[ _]"))
    paste0(
      tolower(parts[1]),
      paste0(toupper(substring(parts[-1], 1, 1)),
             tolower(substring(parts[-1], 2)),
             collapse="")
    )
  })
}
names(dF) <- sapply(names(dF), stringToCamelCase)


## Turn natureOfDisruption and demographics into binary presence indicators

#function to split entries and remove None responses
split_checkbox <- function(x){
  
  #split entry by comma
  entry_split <- str_split(x, ", ")[[1]]
  
  #delete "None of the above"
  entry_split <- entry_split[entry_split != "None of the above"]
  return(entry_split)
  
}

#function to turn split entries into matrices of binary indicators
split_to_binary <- function(list_of_splits, all_options){

  binary <- lapply(list_of_splits, function(entry_split){
    sapply(all_options, function(option){
      option %in% entry_split
    })
  })
  binary <- as.data.frame(t(do.call(cbind, binary)))
  rownames(binary) <- NULL
  return(binary)
  
}

#apply to nature variable
nature_splits <- sapply(dF$natureOfDisruption, split_checkbox) #split lists by comma
all_nature_options <- sort(unique(unlist(nature_splits))) #get all the options
nature_binary <- split_to_binary(nature_splits, all_nature_options) #turn split lists into matrix of binaries
names(nature_binary) <- paste0("nature,",
                               c( "Blockade", "Injunction", "Interrupting", "Attached", "Alterations", "Vandalism"))
                               #rename columns

#join Alterations and Vandalism together
nature_binary$`nature,AlteratVandal` <- nature_binary$`nature,Vandalism` | nature_binary$`nature,Alterations`

#apply to demographics variable
demo_splits <- sapply(dF$demographics, split_checkbox) #split lists by comma
all_demo_options <- sort(unique(unlist(demo_splits))) #get all the options
demo_binary <- split_to_binary(demo_splits, all_demo_options) #turn split lists into matrix of binaries
names(demo_binary) <-  paste0("demogr,",
                              c("Occupation", "PrivateSchool", "Student", "Unemployed", "VeryOld"))
                              #rename columns. "veryYoung" does not occur as a value.

#add back into dataframe
dF <- cbind(dF, nature_binary, demo_binary)
dF <- subset(dF, select=-c(natureOfDisruption, demographics))


## Deal with NAs

#For costumes, NA (not enough info) should count as 1 (no costumes)
dF$visualAppearanceCostumes <- dF$visualAppearanceCostumes %>% replace_na(1)


## Investigate results

# numeric columns only
d_numeric <- dF %>%
  select(where(~ is.numeric(.) || is.logical(.)))

# Plot faceted histograms
d_long <- d_numeric %>%
  pivot_longer(cols = everything(), names_to = "variable", values_to = "value")
ggplot(d_long, aes(x = value)) +
  geom_histogram(bins = 30, fill = "steelblue", color = "white") +
  facet_wrap(~ variable, scales = "free") +
  theme_minimal() +
  labs(x = "Value", y = "Count", title = "Histograms of Selected Variables")

#tables per numeric variable
apply(d_numeric, 2, table)

#means for Pilot 2 overview table
round(apply(d_numeric, 2, mean, na.rm=TRUE), 2)

#median protester count
median(d_numeric$numberOfProtesters, na.rm=TRUE)


## Write questions we decided to keep to file

dF_kept <- dF[c("id",
                "numberOfProtesters",
                "levelOfDisruption,BusinessDamaging",
                "levelOfDisruption,PublicEveryday",
                "levelOfDisruption,GovernmentOrAuthority",
                "levelOfDisruption,PublicDamaging",
                "levelOfDisruption,CultureOrSport",
                "levelOfDisruption,BusinessNon-damaging",
                "visualAppearanceCostumes",
                "issueBundling",
                "nature,Blockade",
                "nature,Attached",
                "nature,AlteratVandal",
                "nature,Interrupting",
                "demogr,Student",
                "portrayal")]
write.csv(dF_kept, "RA_pilot_clean.csv", row.names=F)
