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

sys.path.append(os.path.join(os.path.dirname(__file__), 'Data_structuring'))
import data_structuring as ds

logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

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


def fetch_url(url: str, nb: int, s: requests.Session = None, retries: int = 3, sleep_time: int = 5):
    """
    This function returns the HTML content of the URL passed in entry for a website that needs a subscription.
    It also logs the URL currently being scraped.
    
    Parameters:
    nb (int): The number of the URL (for logging purposes).
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
            logging.info(f"Fetching N°{nb} URL: {url}")
            response = s.get(url)
            return response.text
        except RequestException as e:
            logging.warning(f"Attempt {attempt + 1} failed: {e}")
            time.sleep(sleep_time)
    
    logging.error(f"Failed to fetch URL {url} after {retries} retries")
    return None

def extract(html_content, newspaper, Text=True, Author=True, Date=True, Images_url=True, Subheaders=True):
    """
    This function extracts the desired content from html_content. It takes in the HTML content and 
    boolean flags indicating which elements to extract.
    
    Parameters:
    html_content (str): The HTML content to extract information from.
    Text (bool): Whether to extract text. Default is True.
    Author (bool): Whether to extract the author. Default is True.
    Date (bool): Whether to extract the date. Default is True.
    Images_url (bool): Whether to extract image URLs. Default is True.
    Subheaders (bool): Whether to extract subheaders. Default is True.
    
    Returns:
    dict: A dictionary containing the extracted elements.
    """
    # Initialize the result dictionary with None values
    result = {
        'text': None,
        'author': None,
        'date': None,
        'images_url': None,
        'subheadlines': None
    }

    # Extract text
    if Text:
        try:
            result['text'] = newspaper.extract_text_from_html(html_content)
        except Exception as e:
            logging.error(f"Error extracting text: {e}")
            result['text'] = None
    
    # Extract author
    if Author:
        try:
            result['author'] = newspaper.extract_author_from_html(html_content)
        except Exception as e:
            logging.error(f"Error extracting author: {e}")
            result['author'] = None
    
    # Extract date
    if Date:
        try:
            result['date'] = newspaper.extract_date_from_html(html_content)
            result['date'] = newspaper.date_converter_obj(html_content)
        except Exception as e:
            logging.error(f"Error extracting date: {e}")
            result['date'] = None
    
    # Extract images URL
    if Images_url:
        try:
            result['images_url'] = newspaper.extract_image_from_html(html_content)
        except Exception as e:
            logging.error(f"Error extracting images URL: {e}")
            result['images_url'] = None
    
    # Extract subheaders
    if Subheaders:
        try:
            result['subheadlines'] = newspaper.extract_subheadlines_from_html(html_content)
        except Exception as e:
            logging.error(f"Error extracting subheadlines: {e}")
            result['subheadlines'] = None
    
    return result


def main_scrape_html(url_file, html_file, redo=False):
    """This function scrapes the content of the urls in the url_file. Setting urls_range allows us to only scrape some of the urls in the file (keeping it
    at the default [0,0] means scaping all urls."""
    
    #TO DO: see if we need to avoid using html_content_dict because it will be very big
    
    #try to get the list of URLs from file (created by google_scraping module)
    urls_list = ds.from_file_to_url_list(url_file)
    
    #retrieve requests session if possible (note: don't currently have these; created by Samuel)
    try:
        with open(f'Scraping_articles/sessions/scraping.pickle', 'rb') as f:
            s = pickle.load(f)
    except:
        s = requests.Session()
    
    #if the url range parameter is the default [0,0], that means we want to scrape them all
    #if urls_range==[0,0]:
    #     urls_range=[0,len(urls_list)]

    #try to get any already-parsed urls from the html content file
    if redo:
        html_content_dict = dict()
    else:
        html_content_dict = ds.from_file_to_dict(parsed_file)

    #loop over the article urls
    for k in range(urls_range[0], urls_range[1]):  
    
        header = ["url", "html_content"]
        url = urls_list[k]
            
        #if the URL is not already in the html content dict, scrape it
        if url not in html_content_dict:
        
            logging.info(f"Scraping url: {url}")
            html_content = fetch_url(url=url, s=s, nb=k)
            #add to url-to-HTML-content dict
            html_content_dict[url] = html_content
            #add to HTML content file
            new_line = [url, html_content]
            ds.add_row_to_csv(html_file, new_line, header)
            
        else:
        
            logging.info(f"The URL: {url} has already been scraped")
    
                
    return html_content_dict
        
        
def main_parse_content(paper_name, html_content_dict, parsed_file, Text=True, Author=True, Date=True, Images_url=True, Subheaders=True, redo=False):
    """This function takes a dictionary of urls (keys) and html contents (values) and uses a custom parsing script for that newspaper
    to extract information such as the full text and author. If redo is set to true, we also re-parse already-parsed files."""
    
    #import the specific parsing module for this newspaper
    newspaper = choose_extract(paper_name)
    
    #set header for resulting csv file (only added if file is non-existent/empty)
    header=["URL", "Text", "Author", "Date", "Images_url", "Subheaders"]
    
    #try to get any already-parsed urls from the html content file
    if redo:
        parsed_content_dict = dict()
    else:
        parsed_content_dict = ds.from_file_to_dict(parsed_file)
    
    #loop over the scraped urls in the html content dict
    for url, html_content in html_content_dict.items():
    
        if url not in parsed_content_dict:
    
            logging.info(f"Parsing url: {url}")
            content_scraped = extract(html_content, newspaper, Text, Author, Date, Images_url, Subheaders)
            new_line = [url] + [content_scraped['text'], content_scraped['subheadlines'], content_scraped['author'], content_scraped['date'], content_scraped['images_url']]

            ds.add_row_to_csv(parsed_file, new_line, header)
        
        else:
        
            logging.info(f"The URL: {url} has already been scraped")
        

