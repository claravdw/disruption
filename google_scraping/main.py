import time
import os
import sys
from selenium import webdriver

sys.path.append(os.path.join(os.path.dirname(__file__), 'google_scraper'))
import scraper as scrap #script to scrape pages of Google results for URLs
import query as qu #script to form a URL that is a google.com search query
import data_structuring as ds #script to turn list of urls into csv

"""
This script takes one or more newspaper websites, one or more search strings, and a date range.
It will (1) split the date range up into months, (2) search Google using each of the search
strings, (3) scrape the URLs from the results, (4) combines and de-duplicates them (within
and across months), and (5) writes them to month-by-month csv files.

The script opens a non-headless Selenium Chrome webdriver, because it is necessary for a human
to solve the captchas that Google throws.

csv files are stored in the article_urls folder, in a subfolder named after the newspaper.
"""


def main(paper_name, paper_url, search_terms, start_date, end_date, browser, url_folder):

    """This function calls the scraper function from the scraper script and provides it with the right query and dates,
    one month at a time starting from the start date, getting a list of scraped URLs in return"""
    
    #list of all scraped urls across period, in order to get rid of duplicates
    all_period_urls = []
    
    duration = qu.months_difference(start_date, end_date)
    month_end = None #in case duration is 0

    #cover each of the full months included in the period
    for k in range(0, duration):

        print("scraping next month of", paper_name, "URLs starting from", start_date)
        time.sleep(3.8)
        
        #get end date: plus one month minus one day
        month_end = qu.add_time(start_date, months=1, days=-1)
        #note: minus one day because Google searches are inclusive of start and end dates
        
        #scrape, write to file, and update all_period_urls
        all_period_urls = scrape_and_write(search_terms, start_date, month_end, all_period_urls, browser, url_folder)
        
        #update the start date for next iteration: plus one month
        start_date = qu.add_time(start_date, months=1)
    
    #cover the last period (of less than one month), if applicable
    if month_end is not end_date:
    
        #scrape, write to file, and update all_period_urls
        scrape_and_write(search_terms, start_date, end_date, all_period_urls, browser, url_folder)


def scrape_and_write(search_terms, start_date, period_end, all_period_urls, browser, url_folder):

    urls = []

    #loop over (sets of) search terms
    for search_name, query_list in search_terms.items():
        
        #get another month's worth of Google result URLs using the scraping function
        urls.extend(scrap.scraper(paper_url, query_list, start_date, period_end, browser))
          
    #remove duplicates within month
    urls = list(set(urls))
        
    #remove duplicates across months
    urls = [u for u in urls if u not in all_period_urls]
    all_period_urls.extend(urls)
    #this means each url will be logged only once, in the earliest period it appeared in
       
    #write to csv
    ds.list_of_url_to_csv(urls, paper_url, start_date, period_end, folder=url_folder)
    
    return(all_period_urls)


if __name__ == '__main__':

    #list of newspaper websites to search, one at a time. Keys should match names of newspaper-specific parsing scripts in
    #content_scraping/Parsing_specific folder, so that these urls can be parsed by the correct script.

    paper_urls = {"BBC":"bbc.com",
                  "The-Guardian":"theguardian.com",
                  "Daily-Mail":"dailymail.co.uk",
                  "Sky":"news.sky.com",
                  "Metro":"metro.co.uk",
                  "Sun":"thesun.co.uk",
                  "Telegraph":"telegraph.co.uk", "The-Times":"thetimes.com", "Mirror":"mirror.co.uk",
                  "ITV":"itv.com/news"
                  }

    #dict of lists of search terms to use, one list at a time. Resulting URLs will then be combined and de-duplicated,
    #keeping any URL that was turned up by any of the search queries without repeating any (within and across months).
    search_terms = {"XR_JSO": ["Extinction Rebellion","Just Stop Oil"], #one of these
                    "Greenpeace": ["Greenpeace AND (protest OR activists OR demonstration OR disruption OR blockade)"]} #one each of these
                    
    #set start and end date in format yyyy-mm-dd; end day will be included in the search
    start_date = "2023-10-01"
    end_date = "2025-09-30"
    
    browser = webdriver.Chrome() #cl.chrome_launch()

    #loop over urls and search terms
    for paper_name, paper_url in paper_urls.items():
    
        #folder to store period-by-period files with url lists
        url_folder = "article_urls/" + paper_name
    
        print("scraping paper", paper_name, "from", start_date, "to", end_date, "one month at a time")
        main(paper_name, paper_url, search_terms, start_date, end_date, browser, url_folder)
