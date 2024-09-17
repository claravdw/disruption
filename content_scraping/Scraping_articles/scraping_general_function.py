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

sys.path.append(os.path.join(os.path.dirname(__file__), 'Data_structuring'))
import data_structuring as ds

#set up logging
logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def fetch_url(url: str, s: requests.Session = None, retries: int = 3, sleep_time: int = 5):
    """
    This function returns the HTML content of the URL passed in entry for a website that needs a subscription.
    It also logs the URL currently being scraped.
    
    Parameters:
    url (str): The URL to fetch.
    s (requests.Session): The requests session to use. If None, a new session will be created.
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
            response = s.get(url)
            return response.text
        except RequestException as e:
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


def main_scrape_html(url_file, html_file, redo=False):
    """
    This function scrapes the content of the urls in the url_file. If redo is set to true, we also re-scrape already-scraped files.
    """
    
    #TO DO: see if we need to avoid using html_content_dict because it will be very big
    logging.info(f"scraping urls from file: {url_file}")
    
    #try to get the list of URLs from file (created by google_scraping module)
    urls_list = ds.from_file_to_url_list(url_file)
    
    #retrieve requests session if possible (note: don't currently have these; created by Samuel)
    try:
        with open(f'Scraping_articles/sessions/scraping.pickle', 'rb') as f:
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
            
    #write to json file
    with open(html_file, 'w') as fp:
        json.dump(html_content_dict, fp)
                
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
        parsed_content_dict = ds.from_file_to_dict(parsed_file, name_index_column="url")

    if parsed_content_dict: print(f"re-using some already-parsed urls from file: {parsed_file}")
    
    #loop over the scraped urls in the html content dict
    for url, html_content in html_content_dict.items():
    
        if url not in parsed_content_dict:
    
            logging.info(f"Parsing url: {url}")
            content_scraped = newspaper.extract(html_content, parsed_attr)
            parsed_content_dict[url] = content_scraped

    #write to json file
    with open(parsed_file, 'w') as fp:
        json.dump(parsed_content_dict, fp)
        

