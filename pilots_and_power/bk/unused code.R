#generate evenly distributed "extra" latent variations, as
#many as there are observations
obs_latent_diff_treated <- seq(from=-stepsize/2 + 0.001, to=stepsize/2 - 0.001, length.out = sum(d$Treated))
obs_latent_diff_treated <- sample(obs_latent_diff_treated) #permute them

#add this unmeasured variation
d[outcome_name_latent_w2] <- NA
d[d$Treated==1, outcome_name_latent_w2] <- d[d$Treated==1, outcome_name_w2] + obs_latent_diff_treated

obs_latent_diff_control <- seq(from=-stepsize/2 + 0.001, to=stepsize/2 - 0.001, length.out = sum(!d$Treated))
obs_latent_diff_control <- sample(obs_latent_diff_control) #permute them
d[d$Treated==0, outcome_name_latent_w2] <- d[d$Treated==0, outcome_name_w2] + obs_latent_diff_control  

#prop.table(table(cut(d[,outcome_name_latent_w2], seq(-0.50,1.50, by=.1))))
#hist(d[,outcome_name_latent_w2], breaks=seq(-0.80,1.50, by=.1))
prop.table(table(Treated=d$Treated, Salience=d[outcome_name_latent_w2]>.5), 1)

#hist(d[d$Treated==1, outcome_name_latent_w2], breaks=seq(-0.80,1.50, by=.1))
#prop.table(table(Treated=d$Treated, Salience=d[outcome_name_latent_w2]>.5), 1)

print(
  ggplot(d[d$Treated == 1, ], aes_string(x = outcome_name_latent_w2, fill = outcome_name_w2)) +
    geom_histogram(stat = "count", position = "stack", binwidth = 0.05) +
    labs(x = outcome_name_latent_w2, fill = outcome_name_w2) +
    theme_minimal()
)

message("Wave 2 treated table, original:")
print(prop.table(table(d[d$Treated==1, outcome_name_w2])))

message("Wave 2 treated table, subtracted:")
print(prop.table(table(outcome_roundback[d$Treated==1])))

if(outcome == "SalienceClim_any"){
  
  message("Salience, wave 2 treated group, original:")
  print(prop.table(table(d[d$Treated==1, outcome_name_w2])))
  
  message("Salience, wave 2 treated group, no treatment effect:")
  print(prop.table(table(d[d$Treated==1, outcome_name_nulsim_w2])))
}

#check: get actual "population" treatment effects obtained after adding the addons
#fit <- lm(get(outcome_name_addon_w2) ~ Treated + get(outcome), data=d)
#pop <- summary(fit)$coefficients["Treated", 1]
#message("population ATE: ", pop)

#if(outcome == "SalienceClim_any"){

#  message("Salience, wave 2 treated group, no treatment effect:")
#  print(prop.table(table(d[d$Treated==1, outcome_name_nulsim_w2])))

#  message("Salience, wave 2 treated group, ATE added:")
#  print(prop.table(table(d[d$Treated==1, outcome_name_addon_w2])))
#}


# Define bin parameters
bin_breaks <- seq(-0.5, 1.5, by = 0.05)

# Filter, bin, and count the data
counts <- d %>%
  filter(Treated == 1) %>%
  mutate(
    binned = cut(
      !!sym(outcome_name_latent_w2),
      breaks = bin_breaks,
      include.lowest = TRUE,
      right = FALSE
    )
  ) %>%
  count(binned, !!sym(outcome_name_w2)) %>%
  filter(!is.na(binned))

# Create the plot
ggplot(counts, aes(x = binned, y = n, fill = !!sym(outcome_name_w2))) +
  geom_col(position = "stack") +
  labs(x = outcome_name_latent_w2, y = "Count", fill = outcome_name_w2) +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

