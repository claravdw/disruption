#script to model the probability of a person consuming an outlet given their ideology, based on
#Reuters media consumption survey data.

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
ideology_q <- grep("^Q1F$", varNames)
media_qs <- grep("^Q5[AB]\\d{2}$", varNames)
# Richard Fletcher: The political leaning variable is Q1F,
# the offline news use variables start Q5a, online Q5b, and cross platform Q5_Unique

#TO DO: consider using survey weights, 
#weight <- grep("weight", varNames)

#get nice names for variables
d_wide <- d_all[, c(1, ideology_q, media_qs)]
medianames <- varLabels[media_qs] #get media outlet names
medianames <- gsub("[^A-Za-z0-9 ]", " ", medianames) #replace special characters wth space
medianames <- gsub("\\s+", " ", medianames) #eliminate multiple spaces
medianames <- gsub("\\s$", "", medianames) #eliminate ending spaces
colnames(d_wide) <- c("id", "ideology", medianames)
d_wide <- d_wide[,!(colnames(d_wide) %in% c("Other1", "Other2", "Don't Know", "None of these"))]

#TO DO: join some online and offline sources

#make list of our outlets
our_outlets <- c("Daily Mail Mail on Sunday",
                 "Guardian Observer",
                 "Metro free paper",
                 "Sun Sun on Sunday",
                 "The Times Sunday Times",
                 "Daily Telegraph Sunday Telegraph",
                 "Daily Mirror Sunday Mirror",
                 "The Express Sunday Express",
                 "BBC News online",
                 "Sky News online")
#all sources, alphabetically: sort(unique(as.character(d$ideology)))

#get data from wide to long
d <- melt(setDT(d_wide), id.vars = c("id","ideology"), variable.name = "outlet", value.name = "consumed")

#convert variable types
d$ideology <- as.numeric(d$ideology)
d$ideology[d$ideology==8] <- NA #Don't knows
d$consumed <- recode(d$consumed, No = 0, Yes = 1)


##model and predict readership

#logistic regression model of readership by ideology
fit <- glmer(consumed ~ ideology*outlet, data = d, family = binomial, nAGQ=0)
save(fit, file="modelfitReuters.Rdata")
#each source gets its own intercept and slope for ideology

#get predictions by ideology and outlet
d_predict <- expand.grid(ideology=sort(unique(na.omit(d$ideology))), outlet=our_outlets)
preds <- predict(fit, newdata=d_predict, type="response", re.form=~(ideology|outlet))
d_predict <- cbind(d_predict, probability=preds)

#get raw data (probability of outlet consumption in sample) to compare to
d_raw_wide <- data.frame(tapply(d$consumed, list(d$outlet, d$ideology), mean))
d_raw_wide$outlet <- rownames(d_raw_wide)
d_raw <- melt(setDT(d_raw_wide), id.vars = c("outlet"), variable.name = "ideology", value.name = "probability")
d_raw$ideology <- as.numeric(gsub("X", "", d_raw$ideology))

#plot
#tap <- tapply(d$consumed, list(d$outlet, d$ideology), sum)
ggplot(data=d_predict, aes(x=ideology, y=probability)) +
  geom_line() +
  facet_wrap(~outlet) +
  geom_point(data=d_raw[d_raw$outlet %in% our_outlets])
ggsave("source_consumption_by_ideology.pdf")

#see how many consumers data are based on
consumers <- tapply(d$consumed, list(d$outlet, d$ideology), sum)
consumers[our_outlets,] #how many readers per ideology
table(d_wide$ideology) #how many ideologues total
consumers <- tapply(d$consumed, list(d$outlet, d$ideology), sum)
