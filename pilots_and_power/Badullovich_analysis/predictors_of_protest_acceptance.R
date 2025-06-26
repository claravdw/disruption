setwd("~/GDrive/All the disobedience/pilots and power/Badullovich_analysis")
library(dplyr)


##read in data

#NOTE: replace with real path to data
d <- read.csv("ClimateProtest_dataset_w-demographics_Badullovich-etal-2023.csv")

##NOTE: for testing on Clara's end only, delete this block
#fill in demographic columns
n <- nrow(d)
d$age <- sample(c("18-24", "25-34", "35-44", "45-54", "55-64", "65 and over"), n, replace=T)
d$gender <- sample(c("Female", "Male", "Other", "Prefer not to say"), n, replace=T)
d$education <- sample(c("High School", "Bachelor’s degree", "Masters’s degree or above", "Other"), n, replace=T)
d$ideology <- sample(c("Very conservative", "Somewhat conservative",
                       "Moderate (middle of the road)", "Somewhat liberal", "Very liberal"), n, replace=T)
#note: I assume these are cleaned, with the missing value indicators replaced with NA,
#and that they are all factors (non-numeric)


##recode and process

#recode age and ideology to three-category
d$ideology_3pt <- recode(d$ideology, "Very conservative" = "conservative", "Somewhat conservative" = "conservative",
                         "Moderate (middle of the road)" = "moderate", "Somewhat liberal" = "liberal", "Very liberal"="liberal")
d$age_3pt <- recode(d$age, "18-24"="18-34", "25-34"="18-34",
                    "35-44"="35-55", "45-54"="35-55",
                    "55-64"="55 and over",
                    "65 and over"="55 and over")

#get an average appropriateness score for all disruptive tactics, per respondent
disruptive_cols <- c("Chaining.to.building.of.entity.failing.to.protect.climate",
                     "Sit.in.building.of.entity.failing.to.protect.climate",
                     "Labor.strike.at.company.failing.to.protect.climate",
                     "School.strike",
                     "Spray.painting.building.failing.to.protect.climate",
                     "Breaking.into.building.owned.by.company.govt..failing.to.protec",
                     "Throwing.soup.on.painting",
                     "Blocking.sidewalk",
                     "Blocking.road",
                     "Cycling.slowly.in.front.of.traffic",
                     "Cyber.attacks.against.company.govt..failing.to.protect.climate",
                     "Physical.assault.corporate.govt..official.failing.to.protect.cl",
                     "Verbally.intimidate.corporate.govt..official.failing.to.protect",
                     "Throwing.water...harmless.substance.on.corporate.govt..official")
d$disruption_appr <- apply(d[disruptive_cols], 1, mean, na.rm=T)


##fit models with individual predictors

#ideology
fit_ideo <- summary(lm(disruption_appr ~ ideology_3pt, data=d))

#age
fit_age <- summary(lm(disruption_appr ~ age_3pt, data=d))

#gender
fit_gender <- summary(lm(disruption_appr ~ gender, data=d))

#education
fit_edu <- summary(lm(disruption_appr ~ education, data=d))


##fit models with each predictor plus ideology

#age
fit_age_ideo <- summary(lm(disruption_appr ~ age_3pt + ideology, data=d))

#gender
fit_gender_ideo <- summary(lm(disruption_appr ~ gender + ideology, data=d))

#education
fit_edu_ideo <- summary(lm(disruption_appr ~ education + ideology, data=d))


##fit model with all predictors combined

fit_all <- summary(lm(disruption_appr ~ age_3pt + gender + education + ideology_3pt, data=d))


##save to file
save(fit_ideo, fit_age, fit_gender, fit_edu, fit_age_ideo, fit_gender_ideo, fit_edu_ideo, fit_all,
     "predictors_of_acceptance.Rdata")


##analysis
#NOTE: for Clara to run with the saved fitted models

r2_ideo <- fit_ideo$r.squared
r2_age <- fit_age$r.squared
r2_gender <- fit_gender$r.squared
r2_edu <- fit_edu$r.squared

partialr2_age <- fit_age_ideo$r.squared - r2_age
partialr2_gender <- fit_gender_ideo$r.squared - r2_gender
partialr2_edu <- fit_edu_ideo$r.squared - r2_edu