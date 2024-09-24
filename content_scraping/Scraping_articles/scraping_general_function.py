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
from selenium import webdriver

sys.path.append(os.path.join(os.path.dirname(__file__), 'Data_structuring'))
import data_structuring as ds

#set up logging
logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def fetch_url(url: str, s = None, retries: int = 3, sleep_time: int = 5):
    """
    This function returns the HTML content of the URL passed in entry for a website that needs a subscription.
    It also logs the URL currently being scraped.
    
    Parameters:
    url (str): The URL to fetch.
    s (requests.Session): The selenium or requests session to use. If None, a new session will be created.
    retries (int): Number of retry attempts in case of failure. Default is 3.
    sleep_time (int): Time to sleep between retries in seconds. Default is 5.
    
    Returns:
    str: The HTML content of the URL, or None if the fetch failed.
    """
    
    if s is None:
        s = requests.Session()

    for attempt in range(retries):
    
        try:
            logging.info(f"Fetching URL: {url}")
            
            #get the html text, depending on type of scraper session
            if type(s) == requests.sessions.Session:
                response = s.get(url)
                text = response.text
            else:
                s.get(url) #load the page
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


def main_scrape_html(newspaper, url_file, html_file, redo=False):
    """
    This function scrapes the content of the urls in the url_file. If redo is set to true, we also re-scrape already-scraped files.
    """
    
    #TO DO: see if we need to avoid using html_content_dict because it can be very big
    logging.info(f"scraping urls from file: {url_file}")
    
    #try to get the list of URLs from file (created by google_scraping module)
    urls_list = ds.from_csv_to_list(url_file, name_column="url")
    
    #if BBC, we need selenium due to javascrip elements; set up a selenium session
    if newspaper == "BBC":
    
        options = webdriver.ChromeOptions()
        options.add_argument('--ignore-certificate-errors')
        options.add_argument('--incognito')
        options.add_argument('--headless=new')
        s = webdriver.Chrome(options=options)
    
    #otherwise, use requests package, and retrieve session if possible
    #TO DO: consider trying to run the script if no session is found
    else:
        print("scraping with requests")
        try:
            with open(f'Scripts/session_{News_paper}.pickle', 'rb') as f:
                s = pickle.load(f)
        except:
            s = requests.Session()

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
            html_content = fetch_url(url=url, s=s)
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
    
    #set-up for findign search terms in article text
    # Converting None to empty string
    conv = lambda i : i or ''
    text_elements = ["title", "subtitle", "text"]
    searchterms = ["Extinction Rebellion", "Just Stop Oil", "Greenpeace"]  
    
    #loop over the scraped urls in the html content dict
    for url, html_content in html_content_dict.items():
    
        if url not in parsed_content_dict:
    
            logging.info(f"Parsing url: {url}")
            content_scraped = newspaper.extract(html_content, parsed_attr)
            
            #turn dates into formatted strings
            try:
                content_scraped["date"] = content_scraped["date"].strftime("%Y-%m-%d")
            except Exception as e:
                logging.info(f"date to string conversion for json unsuccessful due to {e}")
                
            #join article texts with newline separator; if None, do not include article
            if isinstance(content_scraped["text"], list):
                content_scraped["text"] = "\\n".join(content_scraped["text"])
            else:
                logging.info(f"article dropped, no body text found: {content_scraped['title']}, {url}")
                continue
            
            #keep only texts that contain XR, JSO or Greenpeace in title, subtitle or body
            alltext = [ conv(content_scraped[el]) for el in text_elements ]
            #print(alltext)
            alltext = " ". join(alltext)
            if any(term in alltext for term in searchterms):
                parsed_content_dict[url] = content_scraped
            else:
                logging.info(f"article dropped, search terms not present: {content_scraped['title']}, {url}")
                continue

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
