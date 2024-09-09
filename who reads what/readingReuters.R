# Richard Fletcher: "The political leaning variable is Q1F, the offline news use variables start Q5a, online Q5b, and cross platform Q5_Unique. The weighting variable is ‘weight’."

# Code written fairly carefully by Ben (unless otherwise noted written by LLM)

library(foreign) # for read.spss()
library(questionr) # for wtd.table()
library(ggplot2)
library(patchwork)


setwd("H:/My Drive/Projects/Environmental psychology/Moderators of protest response/who reads what")
dF <- read.spss( "Reuters DNR 2024 - UK.sav", to.data.frame=TRUE )
#names(dF)
varLabels <- attr(dF,"variable.labels")

nOffline <- 37 #from examining names(dF)
nOnline <- 43

createDistributionMatrix <- function( saveAs, varNameStem, nVars ) {
  varNames <- paste0(varNameStem, sprintf("%02d", 1:nVars))
  sources <- c()
  distributions <- matrix( nrow = nVars, ncol = 10 )
  for( i in 1:nVars ) {
    thisVarName <- varNames[i]
    if( thisVarName %in% names( dF ) ) { #at least one varNames in the sequence is missing - Q5AI24 and Q5AI26 exist, but not Q5A25 (maybe an import error?)
      thisSource <- varLabels[thisVarName]
      sources[i] <- thisSource
      selectThoseWhoConsumeThisSource <- dF[, thisVarName ]=="Yes"
      nNotWeighted <- sum( table( dF$Q1F[ selectThoseWhoConsumeThisSource ] ) )
      weightedTable <- wtd.table( dF$Q1F[ selectThoseWhoConsumeThisSource ], weights = dF$weight[ selectThoseWhoConsumeThisSource ] )
      nWeighted <- sum( weightedTable )
      weightedTableProp <- prop.table(weightedTable)
      distributions[i,] <- c( nNotWeighted, nWeighted, weightedTableProp )
    } else sources[i] <- "Missing variable"
  }
  rownames(distributions) <- sources
  colnames(distributions) <- c( "n", "nWeighted", names( table( dF$Q1F ) ) )
  print(round(distributions,2))
  write.csv(distributions,paste0(saveAs,".csv"))
  plot_row_distributions(distributions[!is.na(distributions[,1]),])
}

#The below code is as-is from Claude LLM. The prompt was: Write an R function to cycle through the rows of a matrix (passed to the function) and plot a frequency distribution for each row, waiting for a keypress before advancing to the next row. The frequencies are already calculated - they are in columns 3 to 10 of the matrix. The column names of columns 3 to 10 should be the x-axis labels for the plot. The plot title should be the row name and the value of column 2 for that row, with the value of column 2 preceded by "n = ". Before any plotting, the matrix should be sorted by column 2, descending.

plot_row_distributions <- function(matrix) {
  # Sort the matrix by column 2 in descending order
  sorted_matrix <- matrix[order(matrix[,2], decreasing = TRUE), ]  
  # Get the column names for x-axis labels
  x_labels <- colnames(sorted_matrix)[3:10]
  # Loop through each row
  for (i in 1:nrow(sorted_matrix)) {
    # Extract current row data
    row_data <- sorted_matrix[i, 3:10]
    # Create the plot title
    plot_title <- paste(rownames(sorted_matrix)[i], "n =", round( sorted_matrix[i, 2], 1 ) )
    # Create the bar plot
    barplot(row_data, 
            main = plot_title,
            xlab = "Categories",
            ylab = "Frequency",
            names.arg = x_labels,
            col = "skyblue",
            border = "navy")
    # Wait for user input before continuing
    cat("Press [Enter] to continue to the next plot...\n")
    readline()
  }
}

createDistributionMatrix( "offline", "Q5A", nOffline ) # If you just paste in the whole script, following lines get eaten by the keypress-waiter in this function
createDistributionMatrix( "online", "Q5B", nOnline ) 


#NOTES on further demographic variables
#There are very many variables in the file. It seems the first 67 are demographic - we can see the names like this:

names(dF)[1:67]

#The variable labels tend to be the question asked, so we can get a good idea of this data like this, for example:

table(dF$income_uk)
varLabels["income_uk"]




#########################################################
# PLOTTING IN A GRID


plot_row_distributions <- function(matrix, ncol = 3) {
  # Sort the matrix by column 2 in descending order
  sorted_matrix <- matrix[order(matrix[,2], decreasing = TRUE), ]
  sorted_matrix <- sorted_matrix[1:12,]  
  
  # Get the column names for x-axis labels
  x_labels <- colnames(sorted_matrix)[3:10]
  
  # Create an empty list to store the plots
  plot_list <- list()
  
  # Loop through each row
  for (i in 1:nrow(sorted_matrix)) {
    # Extract current row data
    row_data <- sorted_matrix[i, 3:10]
    
    # Create a data frame for ggplot
    plot_data <- data.frame(
      Category = factor(x_labels, levels = x_labels),
      Frequency = as.numeric(row_data)
    )
    
    # Create the plot title
    plot_title <- paste(rownames(sorted_matrix)[i], "n =", round( sorted_matrix[i, 2], 1 ) )
    
    # Create the ggplot
    p <- ggplot(plot_data, aes(x = Category, y = Frequency)) +
      geom_bar(stat = "identity", fill = "skyblue", color = "navy") +
      labs(title = plot_title, x = "Categories", y = "Frequency") +
      theme_minimal() +
      theme(axis.text.x = element_text(angle = 45, hjust = 1))
    
    # Add the plot to the list
    plot_list[[i]] <- p
  }
  
  # Combine all plots using patchwork
  combined_plot <- wrap_plots(plot_list, ncol = ncol)
  
  ggsave("plotGrid.pdf", combined_plot, width = 8.27, height = 11.69, units = "in")
  
  # Return the combined plot
  return(combined_plot)
}