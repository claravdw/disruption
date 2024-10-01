import sys
import importlib
import requests
import time
import logging
import urllib.request
import pickle
import os
import Scraping_specific
import pandas as pd
import csv
import json
from seleniumwire import webdriver
from selenium.webdriver.support.ui import WebDriverWait

sys.path.append(os.path.join(os.path.dirname(__file__), 'Data_structuring'))
import data_structuring as ds

#set up logging
logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

##Web scraping functionality

#set up headers for scraping; imitate Mozilla on Windows
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Cache-Control": "max-age=0",
}

# define the request interceptor to configure custom headers
def interceptor(request):

    # add the missing headers
    request.headers["Accept-Language"] = "en-US,en;q=0.9"
    request.headers["Referer"] = "https://www.google.com/"

    # delete the existing misconfigured default headers values
    del request.headers["User-Agent"]
    del request.headers["Sec-Ch-Ua"]
    del request.headers["Sec-Fetch-Site"]
    del request.headers["Accept-Encoding"]
    
    # replace the deleted headers with edited values
    request.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    request.headers["Sec-Ch-Ua"] = "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\""
    request.headers["Sec-Fetch-Site"] = "cross-site"
    request.headers["Accept-Encoding"] = "gzip, deflate, br, zstd"


#set up options for scraping with Chrome webdriver
options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--incognito')
options.add_argument('--headless=new')


# Function to check if all images are loaded
def all_images_loaded(driver):
    return driver.execute_script("""
        return Array.from(document.images).every(img => img.complete && (img.naturalHeight !== 0));
    """)


def fetch_url(newspaper: str, url: str, retries: int = 3, sleep_time: int = 5):
    """
    This function returns the HTML content of the URL passed in entry for a website that needs a subscription.
    It also logs the URL currently being scraped.
    
    Parameters:
    url (str): The URL to fetch.
    retries (int): Number of retry attempts in case of failure. Default is 3.
    sleep_time (int): Time to sleep between retries in seconds. Default is 5.
    
    Returns:
    str: The HTML content of the URL, or None if the fetch failed.
    """
        
    #if BBC, we need selenium due to javascript elements; set up a selenium session
    if newspaper in ["BBC"]:#, "ITV"]:
    
        s = webdriver.Chrome(options=options)
        s.request_interceptor = interceptor
        #should give each page 5 seconds to load, hopefully getting all the images
        #s.implicitly_wait(5)
        #does not work
    
    #otherwise, use requests package, and retrieve session if possible
    #TO DO: consider trying to run the script if no session is found
    else:
        try:
            with open(f'Scripts/session_{newspaper}.pickle', 'rb') as f:
                s = pickle.load(f)
        except:
            s = requests.Session()
        s.headers.update(headers)

    for attempt in range(retries):
    
        try:
            logging.info(f"Fetching URL: {url}")
            
            #get the html text, depending on type of scraper session
            if type(s) == requests.sessions.Session:
                response = s.get(url)
                text = response.text
            else:
                s.get(url) #load the page
                # Wait until all images on the page are fully loaded
                #WebDriverWait(s, 10).until(all_images_loaded)
                # Wait until the page is fully loaded, max 10 s
                # WebDriverWait(s, 10).until(lambda d: d.execute_script('return document.readyState') == 'complete')
                # neither works
                text = s.page_source
            return text
            
        except Exception as e:
            logging.warning(f"Attempt {attempt + 1} failed: {e}")
            time.sleep(sleep_time)
    
    logging.error(f"Failed to fetch URL {url} after {retries} retries")
    return None
    

def choose_extract(News_paper):
    """
    Dynamically import a module based on the given string.

    Args:
        News_paper (str): The name of the module to import (without .py extension).

    Returns:
        module or None: The imported module, or None if the import fails.
    """
    try:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        module_path = os.path.join(current_dir, 'Scraping_specific', f"{News_paper}.py")
        
        # Check if the module file exists
        if not os.path.isfile(module_path):
            raise ModuleNotFoundError(f"Newspaper-specific scraping module {News_paper} not found at {module_path}")
        
        # Load the module from file
        spec = importlib.util.spec_from_file_location(News_paper, module_path)
        newspaper_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(newspaper_module)
        
        return newspaper_module
        
    except ModuleNotFoundError as e:
        print(f"Module {News_paper} not found: {e}")
    except Exception as e:
        print(f"Error importing module {News_paper}: {e}")
    return None
    
    
def format_parsed_content(parsed_content, paper_name):
    """
    Function to do formatting on the parsed content of a url.
    Arguments:
    parsed_content: a dictionary a datetime object in key date,
                    a text 
    """
          
    #turn dates into formatted strings
    try:
        parsed_content["date"] = parsed_content["date"].strftime("%Y-%m-%d")
    except Exception as e:
        logging.info(f"date to string conversion for json unsuccessful due to {e}")
              
    #join article texts with newline separator
    if isinstance(parsed_content["text"], list):
        parsed_content["text"] = "\n".join(parsed_content["text"])

    #add source
    parsed_content["source"] = paper_name
            
    #generate an id for the article
    titlewords = parsed_content["title"].strip().split(" ")
    titlestart = "-".join(titlewords[:3])
    parsed_content["id"] = "%s_%s_%s" % (paper_name, parsed_content['date'], titlestart)  
            
    return parsed_content


def main_scrape_html(newspaper, url_file, html_file, redo=False):
    """
    This function scrapes the content of the urls in the url_file. If redo is set to true, we also re-scrape already-scraped files.
    """
    
    #TO DO: see if we need to avoid using html_content_dict because it can be very big
    logging.info(f"scraping urls from file: {url_file}")
    
    #try to get the list of URLs from file (created by google_scraping module)
    urls_list = ds.from_csv_to_list(url_file, name_column="url")

    #try to get any already-parsed urls from the html content file (unless re-doing all of them)
    if redo:
        html_content_dict = dict()
    else:
        html_content_dict = ds.from_file_to_dict(html_file)

    if html_content_dict: print(f"re-using some already-scraped urls from file: {html_file}")

    #loop over the article urls
    for url in urls_list:  
            
        #if the URL is not already in the html content dict, scrape and add it
        if url not in html_content_dict:
        
            logging.info(f"Scraping url: {url}")
            html_content = fetch_url(newspaper=newspaper, url=url)
            html_content_dict[url] = html_content
            
            #break #FOR DEBUGGING
            
    #write to json file
    ds.from_dict_to_file(html_content_dict, html_file)
                
    return html_content_dict
        

def main_parse_content(paper_name, html_content_dict, parsed_file, parsed_attr, redo=False):
    """
    This function takes a dictionary of urls (keys) and html contents (values) and uses a custom parsing script for that newspaper
    to parse the article attributes listed in parsed_attr, such as the full text and author. If redo is set to true, we also re-parse
    already-parsed files.
    """
    
    #import the specific parsing module for this newspaper
    try:
        newspaper = choose_extract(paper_name)
    except:
        return None

    #try to get any already-parsed urls from the html content file (unless re-doing all of them)
    if redo:
        parsed_content_dict = dict()
    else:
        parsed_content_dict = ds.from_file_to_dict(parsed_file)

    if parsed_content_dict: print(f"re-using some already-parsed urls from file: {parsed_file}")
    
    #set-up for finding search terms in article text
    conv = lambda i : i or '' # Converting None to empty string
    text_elements = ["title", "subtitle", "text"]
    searchterms = ["Extinction Rebellion", "Just Stop Oil", "Greenpeace"]  
    
    #loop over the scraped urls in the html content dict
    for url, html_content in html_content_dict.items():
    
        if url not in parsed_content_dict:
    
            logging.info(f"Parsing url: {url}")
            parsed_content = newspaper.extract(html_content, parsed_attr)
            
            #keep only article for which we found a body text
            if not parsed_content["text"]:
                logging.info(f"no body text found: {parsed_content['title']}, {url}")
                continue
            
            #format dates, text body, add source and id
            parsed_content = format_parsed_content(parsed_content, paper_name)
            
            #keep only texts that contain XR, JSO or Greenpeace in title, subtitle or body
            alltext = [ conv(parsed_content[el]) for el in text_elements ]
            alltext = " ". join(alltext)
            if not any(term in alltext for term in searchterms):
                logging.info(f"article dropped, search terms not present: {parsed_content['title']}, {url}")
                continue
                
            parsed_content_dict[url] = parsed_content

    #write to json file
    ds.from_dict_to_file(parsed_content_dict, parsed_file)
    
    return(parsed_content_dict)

    
def main_download_pics(parsed_content_dict, parsed_file, image_folder):

    #go over the articles; keys are their urls
    for url, parsed_content in parsed_content_dict.items():
    
        try:
        
            #get list of article's images, each one is a dict
            image_dicts = parsed_content["image"]
            if image_dicts:
                for i in range(len(image_dicts)):
          
                    image_dict = image_dicts[i]
            
                    #create local file name (without extension)
                    img_file_name = f"{parsed_content['id']}_img{i+1}"
        
                    #dowload the image file and get full name (with extension)
                    img_full_name = ds.download_file(image_dict["url"], img_file_name, image_folder)
                
                    #add entry with local file name and path
                    parsed_content["image"][i]["local_name"] = img_full_name
                    parsed_content["image"][i]["local_path"] = image_folder
                
        except Exception as e:
            logging.error(f"Could not get images from article {url} due to {e}")
            
    #write to json file
    ds.from_dict_to_file(parsed_content_dict, parsed_file)

        
def remove_duplicates(lst):
    """
    Removes duplicates from a list while preserving the original order. Used by the newspaper-specific scraping scripts.
    """
    seen = set()
    new_list = []
    for element in lst:
        if element not in seen:
            seen.add(element)
            new_list.append(element)
    return new_list
