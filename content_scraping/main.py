import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'Scraping_articles'))
sys.path.append(os.path.join(os.path.dirname(__file__), 'Scraping_articles','Data_structuring'))

import pandas as pd
import scraping_general_function as scrap
import parsing_general_function as pars
import data_structuring as ds


def main(newspaper: str, url_file, html_file, parsed_file, dropped_file, parsed_attr, image_folder):
    """This function creates csv files containing the html contents of each page, and the parsed contents (text, author etc.) at the locations
    specified in the paramters.
    Parameters:
    - newspaper: str, name of the newspaper you want to scrape; should match a script name in Scraping_specific folder
    - folder_html: where the unparsed, raw html contents of the URL should be stored
    - folder_parsed: where the parsed contents of the URL should be stored (text, author etc.)
    - parsed_attr: which article attributes should be parsed"""
    
    #scraping the html content of all urls retrieved from google 
    html_content_dict = scrap.main_scrape_html(newspaper, url_file, html_file, redo=False)
    
    #parsing the html content of all scraped urls
    parsed_content_dict = pars.main_parse_content(newspaper, html_content_dict, parsed_file, dropped_file, parsed_attr, redo=False)
    
    #download images from image urls
    scrap.main_download_pics(newspaper, parsed_content_dict, parsed_file, image_folder, redo=False)


if __name__ == '__main__':

    #lines to change
    #name of the newspaper; must match folder names in google_scaping/article_urls folder,
    #and paper-specfic parsing scripts in the folder Scraping_specific
    newspapers = [#"BBC",
                  #"The-Guardian",
                  #"Daily-Mail",
                  #"Sky", 
                  #"Metro",
                  #"Sun",
                  #"Telegraph",
                  "The-Times",
                  "Mirror",
                  "ITV"
                  ]
                  
    for newspaper in newspapers:

        #get relative paths of the files containing the URLs for this paper
        url_folder = f"../google_scraping/article_urls/{newspaper}"
        url_files = sorted(os.listdir(url_folder))
    
        #set folder names where raw HTML and parsed contents should be written to
        html_folder = f"../../disruption_data/article_html/{newspaper}" #can't be in the repo; too big
        parsed_folder = f"article_contents/{newspaper}"
        image_folder = f"article_images/{newspaper}"
        

        for url_file in url_files:
    
            print("Scraping and parsing urls in newspaper-month file", url_file)
    
            #get relative file paths to write them to (replace "url" with "html" and "parsed" in url file)
            html_file = "%s/%s" % (html_folder, url_file.replace("urls", "html").replace(".csv", ".json"))
            parsed_file = "%s/%s" % (parsed_folder, url_file.replace("urls", "parsed").replace(".csv", ".json"))
            
            #get relative path to file for storing "dropped" urls (e.g. keywords not present)
            dropped_file = "%s/%s" % (parsed_folder, url_file.replace("urls", "dropped").replace(".csv", ".json"))
    
            #add folder path to url_files
            url_file = "%s/%s" % (url_folder, url_file)
    
            main(newspaper, url_file, html_file, parsed_file, dropped_file,
                 parsed_attr=["title", "subtitle", "text", "image", "author", "date"],
                 image_folder=image_folder)
        
            #break #FOR DEBUGGING
