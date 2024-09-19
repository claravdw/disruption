import time
import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'Scraper'))
sys.path.append(os.path.join(os.path.dirname(__file__), 'Script'))

import scraper as scrap #script to scrape pages of Google results for URLs
import query as qu #script to form a URL that is a google.com search query
import chrome_launch as cl
import data_structuring as ds

##TO DO: find a way to limit to English searches; try not to add already-found urls again
##(i.e. do not make separate files fro XR and GP queries)


def main(paper_name, paper_url, query_list, start_date, end_date, browser, search_name, url_folder):

    """This function calls the scraper function from the scraper script and provides it with the right query and dates,
    one month at a time starting from the start date, getting a list of scraped URLs in return"""

    urls=[]
    duration = qu.months_difference(start_date, end_date)
    print("scraping URLs from", start_date, "to", end_date, "one month at a time")
    
    #cover each of the full months included in the period
    for k in range(0, duration):
    
        print("scraping next month of", paper_name, "URLs starting from", start_date)
        time.sleep(3.8)
        
        #get end date: plus one month minus one day
        month_end = qu.add_time(start_date, months=1, days=-1)
        #note: minus one day because Google searches are inclusive of start and end dates
        
        #get another month's worth of Google result URLs using the scraping function
        urls.extend(scrap.scraper(paper_url, query_list, start_date, month_end, browser))
        
        #write to csv
        ds.list_of_url_to_csv(urls, paper_url, search_name, start_date, month_end, folder="article_urls/" + paper_name)
        
        #update the start date for next iteration: plus one month
        start_date = qu.add_time(start_date, months=1)
    
    #cover the last period (of less than one month), if applicable
    if month_end is not end_date:
    
        print("scraping last period of URLs starting from", start_date)
        urls.extend(scrap.scraper(paper_url, query_list, start_date, end_date, browser))
        
        #write to csv
        ds.list_of_url_to_csv(urls, paper_url, search_name, start_date, end_date, folder=url_folder)


if __name__ == '__main__':

    #list of newspaper websites to search, one at a time. Keys must match names of newspaper-specific parsing scripts in
    #content_scraping/Parsing_specific folder.
    paper_urls = {"BBC":"bbc.com", "The-Guardian":"theguardian.com", "Daily-Mail":"dailymail.co.uk", "Sky":"news.sky.com",
                  "Sun":"thesun.co.uk", "Telegraph":"telegraph.co.uk", "The-Times":"thetimes.com", "Mirror":"mirror.co.uk",
                  "ITV":"itv.com/news", "Express":"express.co.uk"}

    #list of lists search terms to use, one list at a time
    search_terms = {"XR_JSO": ["Extinction Rebellion","Just Stop Oil"], #one of these
                    "Greenpeace": ["Greenpeace AND (protest OR activists OR demonstration)"]} #one each of these
                    
    #set start and end date in format yyyy-mm-dd; end day will be included in the search
    start_date = "2020-09-01"
    end_date = "2022-06-30"
    
    #folder to store period-by-period files with url lists
    url_folder = "article_urls/" + paper_name
    
    browser = cl.chrome_launch()

    #loop over urls and search terms
    for paper_name, paper_url in paper_urls.items():
        for search_name, query_list in search_terms.items():
    
            print("scraping from", paper_name, "for terms", search_term)
            main(paper_name, paper_url, query_list, start_date, end_date, browser, search_name, url_folder)
