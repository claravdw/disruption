# Contact information

The author of this repository is Clara Vandeweerdt. Contact info: clara.vandeweerdt@ifs.ku.dk

# Modules

To run a module, run main.py in its main directory. 

## Google URL scraping

Directory: google_scraping

This module takes one or more newspaper websites, one or more search strings, and a date range. It will search Google using the search strings using month-by-month date ranges, scrape the URLs from the results,  combine and de-duplicate them, and write them to month-by-month csv files for each newspaper.

The script opens a non-headless Selenium Chrome webdriver, because it is necessary for a human to solve the captchas that Google throws.

csv files are stored in the article_urls folder, in a subfolder named after the newspaper.

## Content scraping

Directory: content_scraping

This module takes one or more newspapers and does three things: (1) scrape the contents of the urls obtained from Google for that newspaper, (2) parse the contents based on newspaper-specific parsing scripts, and (3) download the images (article photos) found in that parsed content.

Disclaimer: newspapers may at any point change their approach to denying requests from bots and the layout of their article pages. This can make the scraping and the parsing scripts for that newspaper less functional.

### Scraping

### Parsing

### Image downloading
