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

sys.path.append(os.path.join(os.path.dirname(__file__), 'Data_structuring'))
import data_structuring as ds

#set up logging
logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

#make seleniumwire logging less verbose by setting level to WARNING
logger = logging.getLogger('seleniumwire')
logger.setLevel(logging.WARNING) 



##Web scraping parameter settings

#set up headers for scraping; imitate Mozilla on Windows
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


# define the request interceptor to configure custom headers for selenium webdriver
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


def start_session(newspaper: str, url=None):

    try:
        with open(f'Scripts/session_{newspaper}.pickle', 'rb') as f:
            s = pickle.load(f)
            #print("Successfully retrieved session for", newspaper)
    except:
        s = requests.Session()
        
    #update headers to help prevent scraping detection
    if url:
        headers["referer"] = url
    s.headers.update(headers)
    
    return s
    
    
    
##Functions to scrape the html content of newspaper article urls

def accept_cookies(s):

    try:
        s.implicitly_wait(5) #wait up to five seconds to load elements (incl. accept button)
        button = s.find_element("id", "cassie_accept_all_pre_banner")
        button.click()
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


def fetch_url(newspaper: str, s, url: str, retries: int = 3, sleep_time: int = 5, first_visit: bool = True):
    """
    This function returns the HTML content of the URL passed in entry for a website that needs a subscription.
    It also logs the URL currently being scraped.
    
    Parameters:
    url (str): The URL to fetch.
    s: requests session or selenium webdriver
    retries (int): Number of retry attempts in case of failure. Default is 3.
    sleep_time (int): Time to sleep between retries in seconds. Default is 5.
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
                if status < 200 or status >= 300:
                    raise Exception(f"HTML request was not successful, status was {status}")
                    
            else: #selenium webdriver
                s.get(url) #load the page
                
                if newspaper == "ITV":
                    #if visiting the domain for the first time with this driver,
                    #try to accept cookies
                    if first_visit:
                        s = accept_cookies(s)
                    s = scroll_down(s)
                
                text = s.page_source
                
            return text
            
        except Exception as e:
            logging.warning(f"Attempt {attempt + 1} failed for {url}: {e}")
            time.sleep(sleep_time)
    
    logging.error(f"Failed to fetch URL {url} after {retries} retries")
    return None
    

def main_scrape_html(newspaper, url_file, html_file, redo=False):
    """
    This function scrapes the content of the urls in the url_file. If redo is set to true, we also re-scrape already-scraped files.
    """
    
    logging.info(f"scraping urls from file: {url_file}")
    
    #if BBC, we need selenium due to javascript elements;
    #if ITV, we need selenium to scroll down slowly and load images;
    #set up a selenium session
    if newspaper in ["BBC", "ITV"]:
    
        s = webdriver.Chrome(options=options)
        s.request_interceptor = interceptor
    
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


    #loop over the article urls
    first_visit = True
    for url in urls_list:  
            
        #if the URL is not already in the html content dict, scrape and add it
        if url not in html_content_dict:
        
            #logging.info(f"Scraping url: {url}")
            html_content = fetch_url(newspaper=newspaper, s=s, url=url, first_visit=first_visit)
            html_content_dict[url] = html_content
            first_visit = False #no need to look for cookie accept button again
            
            #break #FOR DEBUGGING
            
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
                    #if it is the Guardian, set width to a bigger size (may want this for other sources too)
                    #else:
                    #    params = {'width':'500'}
                    #    img_url = update_url_params(img_url, params)
        
                    #download the image file and get full name (with extension)
                    img_full_name = ds.download_file(img_url, img_file_name, image_folder, s, redo)
                
                    #add entry with local file name and path
                    parsed_content["image"][i]["local_name"] = img_full_name
                    parsed_content["image"][i]["local_path"] = image_folder
                
        except Exception as e:
            logging.error(f"Could not get images from article {url} due to {e}")
            
    #write to json file
    ds.from_dict_to_file(parsed_content_dict, parsed_file)
    
    
