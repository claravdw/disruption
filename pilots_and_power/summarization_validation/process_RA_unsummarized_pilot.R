library(stringr)
library(dplyr)
library(tidyr)
library(ggplot2)

## Load data

# This is the RA coded data; sheet 2 from the auto-generated Google form response sheets
dF <- read.delim("Article Characteristics Coding v4c (Responses) - Short column names.tsv", sep="\t",
                 stringsAsFactors=FALSE, check.names=FALSE, quote = "")

# This is the data that describes the coding form the humans filled in; most needed for the response options
form_data <- read.delim("../rating_data/protestCharacteristicFormB6.tsv", sep="\t", stringsAsFactors=FALSE,
                        check.names=FALSE, quote = "")


## Delete text responses and metadata, and merge

text_questions <- form_data$Name[form_data$Type == "TEXT"]
metadata <- c("Timestamp", "Coder", "Title")
dF <- dF[!colnames(dF) %in% c(text_questions, metadata)]


## Use the form_data response options to get the ordinality right for Likert scales

multiple_choice_questions <- form_data$Name[form_data$Type == "MULTIPLE_CHOICE"]
for (question in multiple_choice_questions) {
  if(question %in% colnames(dF)){
    response_options_text <- as.character(form_data$`Response options`[form_data$Name == question])
    response_options <- unlist(strsplit(response_options_text, "; "))
    ordinal_options <- response_options[!grepl("not enough detail|Not enough information", response_options)]
    #in version v4c, the issue bundling question has no follow-up
    if(question=="Issue bundling"){
      ordinal_options <- gsub(" \\(skip next question\\)", "", ordinal_options)
    }
    dF[[question]] <- factor(dF[[question]],
                             levels = ordinal_options,
                             ordered = TRUE)
    dF[[question]] <- as.integer(dF[[question]])
  }
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


## Turn natureOfDisruption into binary presence indicators

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
nature_binary <- nature_binary[,!colnames(nature_binary) %in% "Spray green paint at Police Officers"]
names(nature_binary) <- paste0("nature,",
                               c( "Blockade", "Interrupting", "Attached", "Alterations", "Vandalism"))
                               #rename columns

#join Alterations and Vandalism together
nature_binary$`nature,AlteratVandal` <- nature_binary$`nature,Vandalism` | nature_binary$`nature,Alterations`

#add back into dataframe
dF <- cbind(dF, nature_binary)
dF <- subset(dF, select=-c(natureOfDisruption))


## Write questions we decided to keep to file

dF_kept <- dF[c("id",
                "numberOfProtesters",
                "levelOfDisruption,BusinessDamaging",
                "levelOfDisruption,PublicEveryday",
                "levelOfDisruption,GovernmentOrAuthority",
                "levelOfDisruption,CultureOrSport",
                "issueBundling",
                "nature,Blockade",
                "nature,Attached",
                "nature,AlteratVandal",
                "nature,Interrupting",
                "portrayal")]
write.csv(dF_kept, "RA_pilot_unsummarized_clean.csv", row.names=F)
