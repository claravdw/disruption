#script to model the probability of a person consuming an outlet given their ideology, based on
#Reuters media consumption survey data.

library(foreign) # for read.spss()
library(data.table)
library(dplyr)
library(lme4)
library(ggplot2)

##import data
d <- read.csv("Reuters_top_outlets.csv")

#see how many consumers data are based on
tapply(d$consumed, list(d$outlet, d$ideology), sum)
table(d$ideology[d$outlet=="BBC News online"]) #how many ideologues total

#collapse ideology 1-2 and 6-7
d$ideology[d$ideology==1] <- 2
d$ideology[d$ideology==7] <- 6

##model and predict readership

#logistic regression model of readership by ideology
fit <- glm(consumed ~ ideology*outlet, data = d, family = binomial)
save(fit, file="modelfitReuters.Rdata")
#each source gets its own intercept and slope for ideology

#get predictions by ideology and outlet
d_predict <- expand.grid(ideology=sort(unique(na.omit(d$ideology))), outlet=unique(d$outlet))
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
  geom_point(data=d_raw)
ggsave("source_consumption_by_ideology.pdf")


