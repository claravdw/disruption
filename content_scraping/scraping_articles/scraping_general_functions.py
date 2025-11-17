import sys
import importlib
import requests
import time
import logging
import urllib.request
import urllib.parse
import pickle
import os
from seleniumwire import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium_stealth import stealth #to avoid bot detection

sys.path.append(os.path.join(os.path.dirname(__file__), 'data_structuring'))
import data_structuring_functions as ds

#make seleniumwire logging less verbose by setting level to WARNING
logger = logging.getLogger('seleniumwire')
logger.setLevel(logging.WARNING) 


##Web scraping parameter settings

#requests package: set up headers for scraping; imitate Mozilla on Windows
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/png,image/jpg,*/*;q=0.8",
    #image/avif,image/webp seems best not to accept because server will send jpgs that have content-type webp, resulting in corrupted files
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

#selenium package: set up options for scraping with Chrome webdriver
options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--incognito')
options.add_argument('--headless=new')

def start_session(newspaper: str, url=None):
    """This function looks for a saved requests session for a specific newspaper;
    this is allows us to use the cookies of a previous, logged-in session for paid
    subscriptions"""

    # Get the directory where this file is located
    base_dir = os.path.dirname(os.path.abspath(__file__))

    # Build the path to the data file relative to this script’s location
    session_file = f"session_{newspaper}.pickle"
    session_filepath = os.path.join(base_dir, "..", "saved_sessions", session_file)

    # Try to retrieve the session file
    try:
        with open(session_filepath, 'rb') as f:
            s = pickle.load(f)
            logging.info(f"Successfully retrieved session from {session_file}")
            
    # Otherwise just start a new session
    except Exception as e:
        logging.warning(f"Could not retrieve {newspaper} due to: {e}")
        s = requests.Session()
        
    # Update headers to help prevent scraping detection
    if url:
        headers["referer"] = url
    s.headers.update(headers)
    
    return s
    
    
    
##Functions to scrape the html content of newspaper article urls

def accept_cookies(s, button_locator, button_value: str, newspaper: str):
    """
    This function finds the "Accept cookies" button on a page, clicks it, and returns the state of the driver.
    s: selenium webdriver
    button_locator: a selenium locator object such as By.CLASS_NAME or By.ID
    button_value: the value that the attribute decided by the locator should have, e.g. which class the button is
    """

    try:
       
        #set max time to wait for elements to be found
        wait = WebDriverWait(s, 10)
        
        #in case of the Sun, button is in an iframe with the title
        if newspaper == "Sun":
            wait.until(EC.frame_to_be_available_and_switch_to_it((By.CSS_SELECTOR, 'iframe[title="Iframe title"]')))
       
        button = wait.until(EC.presence_of_element_located((button_locator, button_value)))
        button.click()
        
        #switch back out of the iframe
        if newspaper == "Sun":
            s.switch_to.default_content()
        
        logging.info(f"Successfully accepted cookies")
        
    except Exception as e:
        logging.warning(f"Could not accept cookies due to: {e}")
        
    return s


def scroll_down(s):

    #scroll down slowly

    #get the position of scroll
    scroll_pos_init = s.execute_script("return window.pageYOffset;")
    stepScroll = 600

    #scroll down in steps and wait, until we are at the bottom of the page
    while True:
        s.execute_script(f"window.scrollBy(0, {stepScroll});")
        scroll_pos_end = s.execute_script("return window.pageYOffset;")
        time.sleep(0.75)
        if scroll_pos_init >= scroll_pos_end:
            break
        scroll_pos_init = scroll_pos_end
        
    return s


def fetch_url(newspaper: str, s, url: str, restricted_content=None, retries: int = 3, bad_status_sleep: int = 5, access_restricted_sleep: int = 60, polite_sleep: int = 3, first_visit: bool = True):
    """
    This function returns the HTML content of the URL passed in entry for a website that needs a subscription.
    It also logs the URL currently being scraped.
    
    Parameters:
    url (str): The URL to fetch.
    s: requests session or selenium webdriver
    restricted_content: a list of strings with html content indicating that a request has been met with an access restriction
    retries (int): Number of retry attempts in case of failure. Default is 3.
    bad_status_sleep (int): Time to sleep between retries after bad status in seconds. Default is 5.
    access_restricted_sleep (int): Time to sleep between retries after restricted access in seconds. Default is 60.
    polite_sleep (int): Maximum time to sleep after one url in seconds. Default is 3.
    first_visit (bool): Toggle for first visit to the domain (may require accepting cookies)
    
    Returns:
    str: The HTML content of the URL, or None if the fetch failed.
    """
   
    for attempt in range(retries):
    
        try:
            logging.info(f"Fetching URL: {url}")
            
            #get the html text, depending on type of scraper
            if type(s) == requests.sessions.Session: #requests session

                response = s.get(url)
                text = response.text
                status = response.status_code
                sleep_time = bad_status_sleep  #reset sleep time to the (shorter) bad_status_sleep
                
                if status < 200 or status >= 300:
                    raise Exception(f"HTML request was not successful, status was {status}, sleeping for {sleep_time} seconds")
                    
                #raise an error when the page has content indicating access was restricted
                if restricted_content and any(rest in text for rest in restricted_content):
                    sleep_time = access_restricted_sleep
                    raise Exception(f"Article access was restricted, sleeping for {sleep_time} seconds")
                    
            else: #selenium webdriver
                s.get(url) #load the page
                
                if newspaper == "ITV":
                    #if visiting the domain for the first time with this driver,
                    #try to accept cookies
                    if first_visit:
                        s = accept_cookies(s, By.ID, "cassie_accept_all_pre_banner", "ITV")
                    s = scroll_down(s)
                    
                if newspaper == "Sun":
                    if first_visit:
                        s = accept_cookies(s, By.CLASS_NAME, "accept-all", "Sun")
                
                    #print("scrolling down slowly")
                    #s = scroll_down(s)
                                        
                text = s.page_source
                
            return text
            
        except Exception as e:
            logging.warning(f"Attempt {attempt + 1} failed for {url}: {e}")
            time.sleep(sleep_time)
    
    #polite scraping sleep time between urls        
    time.sleep(polite_sleep)
    
    logging.error(f"Failed to fetch URL {url} after {retries} retries")
    return None
    

def main_scrape_html(newspaper, url_file, html_file, redo=False):
    """
    This function scrapes the content of the urls in the url_file. If redo is set to true, we also re-scrape already-scraped files.
    """
    
    logging.info(f"scraping urls from file: {url_file}")
    
    #if BBC, we need selenium due to javascript elements;
    #if ITV, we need selenium to scroll down slowly and load images;
    #if Sun, we need selenium-stealth to avoid bot detection
    #set up a selenium session
    if newspaper in ["BBC", "ITV", "Sun"]:
    
        s = webdriver.Chrome(options=options)
    
    #otherwise, use requests package, and retrieve session if possible
    else:
    
        s = start_session(newspaper)
    
    #try to get the list of URLs from file (created by google_scraping module)
    urls_list = ds.from_csv_to_list(url_file, name_column="url")

    #try to get any already-scraped urls from the html content file (unless re-doing all of them)
    if redo:
        html_content_dict = dict()
    else:
        html_content_dict = ds.from_file_to_dict(html_file)

    if html_content_dict: print(f"re-using some already-scraped urls from file: {html_file}")
    
    #list of strings with html content indicating that a request has been met with an access restriction
    restricted_content = ["<title>Access Restricted</title>", "Help us verify you as a real visitor"]

    #loop over the article urls and fetch their content
    first_visit = True
    
    if newspaper != "Telegraph":
    #we are not re-scraping Telegraph at all; right now we could not do so successfully with this script, plus trying to scrape
    #new urls (with redo=False) would cause duplicate urls across month files, as Telegraph html was scraped separately by Iraklis
    #and not necessarily allocated to its original url month file
        for url in urls_list:  
            
            #check if there is dict content for that url but it is invalid: None (as in the case of a failed HTML request;
            #a null entry in the json file), or it contains content suggesting that access was restricted
            invalid_content = False
            if url in html_content_dict:        
                if html_content_dict[url] is None or any(rest in html_content_dict[url] for rest in restricted_content):
                    invalid_content = True
                    print(f"re-scraping url {url}; invalid content")
        
            #if the URL is not already in the html content dict, or content is invalid, (re-)scrape and add it
            if url not in html_content_dict or invalid_content:
        
                #logging.info(f"Scraping url: {url}")
                #set longer sleep time if newspaper is Telegraph to avoid getting access restricted
                polite_sleep = 5 if newspaper == "Telegraph" else 3
            
                #fetch the url content
                html_content = fetch_url(newspaper=newspaper, s=s, url=url, restricted_content=restricted_content, polite_sleep=polite_sleep, first_visit=first_visit)
            
                #add it to the dict
                html_content_dict[url] = html_content
            
                #no need to look for cookie accept button again
                first_visit = False
            
                #break #FOR DEBUGGING, only try first URL
            
    #write to json file
    ds.from_dict_to_file(html_content_dict, html_file)
             
    return html_content_dict
    
    
    
##Functions to scrape the content of newspaper image urls
    

def update_url_params(url, params):

    """
    Function to update some of the parameter values in a url with desired values. Arguments:
    url: the url to be updated
    params: dictionary of keys (parameter names) and values to update
    """

    #get dict of query parameters from the url
    url_parts = urllib.parse.urlparse(url)
    query = dict(urllib.parse.parse_qsl(url_parts.query))
    
    #update the necessary parameters
    query.update(params)
    
    #put them back into the url
    url = url_parts._replace(query=urllib.parse.urlencode(query)).geturl()
    
    return url

    
def main_download_pics(newspaper, parsed_content_dict, parsed_file, image_folder, redo=False):
    
    logging.info(f"downloading images for file {parsed_file}")

    #go over the articles; keys are their urls
    for url, parsed_content in parsed_content_dict.items():
    
        logging.info(f"downloading images for article {url}")
    
        s = start_session(newspaper, url)
    
        try:
        
            #get list of article's images, each one is a dict
            image_dicts = parsed_content["image"]
            if image_dicts:
                for i in range(len(image_dicts)):
          
                    image_dict = image_dicts[i]
            
                    #create local file name (without extension)
                    img_file_name = f"{parsed_content['id']}_img{i+1}"
                    
                    #get url
                    img_url = image_dict["url"]
                    
                    #drop parameters--except if Guardian, it needs parameters or will give a 401
                    if newspaper != "The-Guardian":
                        img_url = img_url.split('?')[0]
        
                    #download the image file and get full name (with extension)
                    img_full_name = ds.download_file(img_url, img_file_name, image_folder, s, redo)
                
                    #add entry with local file name and path
                    parsed_content["image"][i]["local_name"] = img_full_name
                    parsed_content["image"][i]["local_path"] = image_folder
                
        except Exception as e:
            logging.error(f"Could not get images from article {url} due to {e}")
            
    #write to json file
    ds.from_dict_to_file(parsed_content_dict, parsed_file)
    
    
