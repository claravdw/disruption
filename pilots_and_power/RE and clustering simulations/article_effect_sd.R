#calculate the typical sd of article effects that we get when
#randomly sampling the effect of each characteristic from
#this distribution
effect_sds <- sapply(1:500, function(x){
  
  char_ATEs <- sapply(characteristics, function(x) sample(ATE_chars, 1))
  
  article_effects <- sapply(ids, function(article){
    
    #look up the characteristic scores of this id
    id_charscores <- d_ratings[d_ratings$id == article,]
    
    #dot product of the characteristics and their ATEs
    char_ATEs  %*% as.numeric(id_charscores[characteristics])
    
  })
  
  sd(article_effects)
  
})
mean(effect_sds)

#set an appropriate