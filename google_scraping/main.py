import time
import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'Scraper'))
sys.path.append(os.path.join(os.path.dirname(__file__), 'Script'))

import scraper as scrap #script to scrape pages of Google results for URLs
import query as qu #script to form a URL that is a google.com search query
import chrome_launch as cl
import data_structuring as ds


def main(paper_url,query_list,start_date,end_date,browser):

    """This function calls the scraper function from the scraper script and provides it with the right query and dates"""

    urls=[]
    duration=qu.months_difference(start_date,end_date)
    print("scraping URLs from", start_date, "to", end_date, "one month at a time")
    
    for k in range(0,duration):
        print("scraping next month of URLs starting from", start_date)
        time.sleep(3.8)
        #get another month's worth of Google result URLs using the scraping function
        urls.extend(scrap.scraper(paper_url, query_list, start_date, qu.add_month(start_date),browser))
        start_date=qu.add_month(start_date) #update the start date for next iteration
        
    #write to csv
    ds.list_of_url_to_csv(urls, paper_url, folder="article_urls")

browser=cl.chrome_launch()
main(paper_url="thetimes.com", query_list=["Extinction Rebellion","Just Stop Oil"], start_date="2024-07-01", end_date="2024-09-01", browser=browser)
