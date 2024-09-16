import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'Scraping_articles'))
sys.path.append(os.path.join(os.path.dirname(__file__), 'Scraping_articles','Data_structuring'))

import pandas as pd
import scraping_general_function as scrap
import data_structuring as ds

def main(newspaper: str, url_file, html_file, parsed_file, urls_range=[0,0], Text=True, Author=True, Date=True, Images_url=True, Subheaders=True):
    """This function creates csv files containing the html contents of each page, and the parsed contents (text, author etc.) at the locations
    specified in the paramters.
    Parameters:
    - newspaper: str, name of the newspaper you want to scrape; should match a script name in Scraping_specific folder
    - folder_html: where the unparsed, raw html contents of the URL should be stored
    - folder_parsed: where the parsed contents of the URL should be stored (text, author etc.)
    - Text: bool, True if you want to scrape the content of the article
    - Author: bool, True if you want to scrape the author of each article
    - Date: bool, True if you want to scrape the date of each article
    - Images_url: bool, True if you want to scrape the images of each article
    - Subheaders: bool, True if you want to scrape the subheader of each article"""
    
    #scraping the html content of the urls 
    html_content_dict = scrap.main_scrape_html(url_file, html_file)
    
    #parsing the html content of all scraped urls
    scrap.main_parse_content(newspaper, html_content_dict, parsed_file, Text=True, Author=True, Date=True, Images_url=True, Subheaders=True)

if __name__ == '__main__':

    #lines to change
    #name of the newspaper must match folder names in google_scaping/article_urls folder,
    #and paper-specfic parsing scripts in the folder Scraping_specific
    newspaper = 'The-Guardian'

    #get relative paths of the files containing the URLs for this paper
    url_folder = f"../google_scraping/article_urls/{newspaper}"
    url_files = os.listdir(url_folder)
    
    #set folder names where raw HTML and parsed contents should be written to
    html_folder = f"article_html/{newspaper}"
    parsed_folder = f"article_contents/{newspaper}"

    for url_file in url_files:
    
        print("Scraping and parsing urls in newspaper-month file", url_file)
    
        #get relative file paths to write them to (replace "url" with "html" and "parsed" in url file)
        html_file = "%s/%s" % (html_folder, url_file.replace("urls", "html"))
        parsed_file = "%s/%s" % (parsed_folder, url_file.replace("urls", "parsed"))
    
        #add folder path to url_files
        url_file = "%s/%s" % (url_folder, url_file)
    
        main(newspaper, url_file, html_file, parsed_file, Subheaders=False)
