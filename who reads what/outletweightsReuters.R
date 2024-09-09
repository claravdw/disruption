#script to determine weights of our ten chosen outlets, based on consumption,
#so that weights sum to one and are proprional to the 

library(foreign) # for read.spss()
library(data.table)
library(dplyr)
library(lme4)
library(ggplot2)

##data prep

#import data
d_all <- read.spss( "Reuters DNR 2024 - UK.sav", to.data.frame=TRUE )
varLabels <- attr(d_all,"variable.labels")
varNames <- colnames(d_all)

#get column names of ideology and media columns
media_qs <- grep("^Q5[AB]\\d{2}$", varNames)
weight <- grep("weight", varNames)
# Richard Fletcher: The political leaning variable is Q1F,
# the offline news use variables start Q5a, online Q5b, and cross platform Q5_Unique

#get nice names for variables
d_wide <- d_all[, c(1, weight, media_qs)]
medianames <- varLabels[media_qs] #get media outlet names
medianames <- gsub("[^A-Za-z0-9 ]", " ", medianames) #replace special characters with space
medianames <- gsub("\\s+", " ", medianames) #eliminate multiple spaces
medianames <- gsub("\\s$", "", medianames) #eliminate ending spaces
colnames(d_wide) <- c("id", "weight", medianames)
d_wide <- d_wide[,!(colnames(d_wide) %in% c("Other1", "Other2", "Don t Know", "Don t know.1", "None of these"))]

#convert variable types
d_wide <- d_wide %>%
  mutate_at(vars(-c("id","weight")), funs(recode(.,`Yes` = 1, `No`=0)))


##join top online and offline sources

#source is consumed if either online or offline version is consumed
d_wide$Guardian <- as.numeric((d_wide[,"Guardian online"]==1) | (d_wide[,"Guardian Observer"]==1))
d_wide$DailyMail <- as.numeric((d_wide[,"Daily Mail Mail on Sunday"]==1) | (d_wide[,"MailOnline"]==1))
d_wide$Sun <- as.numeric((d_wide[,"Sun Sun on Sunday"]==1) | (d_wide[,"Sun online"]==1))
d_wide$Telegraph <- as.numeric((d_wide[,"Telegraph online"]==1) | (d_wide[,"Daily Telegraph Sunday Telegraph"]==1))
d_wide$TheTimes <- as.numeric((d_wide[,"The Times Sunday Times"]==1) | (d_wide[,"The Times online"]==1))
d_wide$Mirror <- as.numeric((d_wide[,"Mirror online"]==1) | (d_wide[,"Daily Mirror Sunday Mirror"]==1))
d_wide$Metro <- as.numeric((d_wide[,"Metro free paper"]==1) | (d_wide[,"Metro online"]==1))
d_wide$DailyExpress <- as.numeric((d_wide[,"Express online"]==1) | (d_wide[,"The Express Sunday Express"]==1))
d_wide$FinancialTimes <- as.numeric((d_wide[,"Financial Times online"]==1) | (d_wide[,"Financial Times"]==1))

#note: TV stations are NOT joined with their online text websites 
#d_wide$CNN_joined <- as.numeric((d_wide[,"CNN"]==1) | (d_wide[,"CNN com"]==1))
#d_wide$Channel4 <- as.numeric((d_wide[,"Channel 4 News online C4 News online"]==1) | (d_wide[,"Channel 4 News"]==1))
#d_wide$SkyNews <- as.numeric((d_wide[,"Sky News 24 hour news"]==1) | (d_wide[,"Sky News online"]==1))
#d_wide$ITV <- as.numeric((d_wide[,"ITV News"]==1) | (d_wide[,"ITV News online"]==1))
#d_wide$AlJazeera <- as.numeric((d_wide[,"Al Jazeera"]==1) | (d_wide[,"Al Jazeera online"]==1))
#d_wide$GBnews <- as.numeric((d_wide[,"GB News online"]==1) | (d_wide[,"GB News 24 hour news"]==1))

#delete originals
mixsources <- c("Guardian online", "Guardian Observer",
                "Daily Mail Mail on Sunday", "MailOnline",
                "Sun Sun on Sunday","Sun online",
                "Telegraph online","Daily Telegraph Sunday Telegraph",
                "The Times Sunday Times","The Times online",
                "Mirror online","Daily Mirror Sunday Mirror",
                "Metro free paper","Metro online",
                "Express online","The Express Sunday Express",
                "Financial Times online","Financial Times"
                #"GB News online", "GB News 24 hour news",
                #"Sky News 24 hour news", "Sky News online",
                #"Al Jazeera", "Al Jazeera online",
                #"Channel 4 News online C4 News online","Channel 4 News",
                #"CNN","CNN com",
                #"ITV News", "ITV News online",
                )
d_wide <- d_wide[!names(d_wide) %in% mixsources]


##find most-consumed sources

#get data from wide to long
d <- melt(setDT(d_wide), id.vars = c("id","weight"), variable.name = "outlet", value.name = "consumed")
#d <- d[d$outlet %in% our_outlets,]

#convert variable types
#d$consumed <- recode(d$consumed, No = 0, Yes = 1)
#d$outlet <- factor(d$outlet) #drop non-included outlets

#get outlet weights
outlet_weights <- tapply(d$consumed*d$weight, d$outlet, sum, na.rm=T)
outlet_weights <- sort(outlet_weights, decreasing=T)

#delete top outlets that don't qualify
leftout <- c(
  #mainly video/audio news
  "BBC Radio News", "BBC TV News", "Channel 4 News", "Channel 5 News", "Sky News 24 hour news",
  "ITV News", "GB News 24 hour news", "Al Jazeera",
  #mainly non-political news
  "GB News online", "Metro", "MSN News", "Yahoo News", "The Lad Bible news", "JOE co uk",
  #general answer categories
  "Commercial radio news", "Commercial radio news online e g LBC TalkRadio",
  "Other regional or local newspaper website",
  "Regional or local newspaper", "Other online sites from outside country text",
  #not UK
  "AlJazeera","HuffPost")
outlet_weights <- outlet_weights[!names(outlet_weights) %in% leftout]

#get top-10 outlets
top_outlet_weights <- head(outlet_weights, 10)
print(top_outlet_weights)

#if we had a 100 articles, how many would come from each source?
top_outlet_weights <- top_outlet_weights/sum(top_outlet_weights) #weights sum to 1
#round(outlet_weights*100) 

#list of outlets from Ofcom report
# our_outlets <- c("Daily Mail Mail on Sunday",
#                  "Guardian Observer",
#                  "Metro free paper",
#                  "Sun Sun on Sunday",
#                  "The Times Sunday Times",
#                  "Daily Telegraph Sunday Telegraph",
#                  "Daily Mirror Sunday Mirror",
#                  "The Express Sunday Express",
#                  "BBC News online",
#                  "Sky News online")
