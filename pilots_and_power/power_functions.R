
##functions

#function to go back from underlying latent trait to discreet score
round_back <- function(y_latent, stepsize, y_min, y_max){
  
  #arguments:
  #y_latent: the latent version of the variable
  #stepsize: the steps in the discreet version, e.g. 1 or 0.5
  #y_min and y_max: the minimum and maximum of the discreet version
  
  y <- round_any(y_latent, accuracy=stepsize)
  y <- pmax(y, y_min) #no lower than the original min
  y <- pmin(y, y_max) #no higher than the original max
  
  return(y)
  
}

#function to try and move a given number of respondents' outcome y up by one
#step, provided there are that many respondents that are able to move. If not,
#move as many as possible.
move_by_one_step <- function(y, addon, y_min, y_max, stepsize, n_to_move, verbose=F){
  
  if(addon > 0){
    
    movable <- which(y != y_max) #idx of up-movable observations
    n_to_move <- min(length(movable), n_to_move) #we cannot move more than the movable number
    sample_moveup <- sample(movable, size=n_to_move, replace=F) #sample from the movables
    y[sample_moveup] <- y[sample_moveup] + stepsize #move them up one step
    
  } else if (addon < 0) {
    
    movable <- which(y != y_min) #idx of down-movable observations
    n_to_move <- min(length(movable), n_to_move) #we cannot move more than the movable number
    sample_moveup <- sample(movable, size=n_to_move, replace=F) #sample from the movebles
    y[sample_moveup] <- y[sample_moveup] - stepsize #move them down one step
    
  }
  
  if (length(movable) == 0) stop("Error: no more movable respondents; cannot add ", round(addon, 2))
  if (verbose) message("moved ", length(sample_moveup), " moveable respondents by one step of size ", stepsize)
  
  return(y)
  
}

add_to_outcome <- function(y, addon, y_min, y_max, stepsize, margin=stepsize/(length(y)-1), verbose=F){
  
  #loop until we have achieved as much of an in-/decrease to the mean as needed
  #(up to a margin of error)
  n <- length(y)
  
  if(verbose) message("trying to add ", round(addon, 3), " to the mean of y")
  if(verbose) message("within a margin of: ", round(margin, 3))
  
  addon_achieved <- 0
  addon_left <- addon - addon_achieved
  movable_respondents <- T #are there any movable respondents left?
  while(abs(addon_left) > margin & movable_respondents){
    
    #check how many respondents need to be moved up or down one more step based on addon
    addon_as_step_pct <- abs(addon_left) / stepsize
    n_to_move <- round(n * addon_as_step_pct)
    if(verbose) message("trying to move ", n_to_move, " out of ", n, " respondents")
    #e.g. if addon is .1, which is one-fifth of the step size .5, we need to move
    #one in five respondents up
    
    #try to move this number (if it is more than the number of movable respondents,
    #we will move as many as possible)
    y_new <- tryCatch(
      move_by_one_step(y, addon_left, y_min, y_max, stepsize, n_to_move, verbose=verbose),
      #if there are no more movable respondents, print error message and return the original outcome
      error = function(e) {
        message(e$message)
        #message("no more movables")
        movable_respondents <<- F #set flag to True in outer environment
        return(y)
        Sys.sleep(3)
      }
    )
    #y_new <- move_by_one_step(y, addon_left, y_min, y_max, stepsize, n_to_move, verbose=verbose)
    
    #check the amount of addon that was achieved in this step
    addon_this_step <- mean(y_new, na.rm=T) - mean(y,  na.rm=T)
    addon_achieved <- addon_achieved + addon_this_step
    addon_left <- addon - addon_achieved
    
    #use the updated outcome
    y <- y_new
    if(verbose) message("managed to add ", round(addon_this_step, 3), " to the mean of y in this step")
    if(verbose) message("in total, added ", round(addon_achieved, 3), " to the mean of y; ", round(addon_left, 3), " left")
    if(verbose) message("\n")
    if(verbose) Sys.sleep(.25)
  }
  
  if(verbose) message("succesfully added the required amount to the mean")
  if(verbose) message("\n")
  
  return(y)
  
}