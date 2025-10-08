import pandas as pd
import csv 
import os 
import datetime
import dateutil.parser as parser
import pytz
import csv
import logging
import json
import requests
import mimetypes
from urllib.parse import urlparse, parse_qs
import glob
import time

csv.field_size_limit(10000000)

logging.basicConfig(filename="data_structuring.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def from_csv_to_list(file_path, name_column="url"):
    """
    This function takes a csv file and converts on particular named column from it to a list
    """

    try:
        URLs_df = pd.read_csv(file_path)
        URLs_list = URLs_df[name_column].tolist()
        return URLs_list
    except FileNotFoundError:
        # If the file does not exist return, an empty list
        logging.info("No url file found at", file_path, ", returning empty list")
        return []


def from_file_to_dict(file_path):

    """This function reads in a json file and returns a dictionary"""

    try:
        # Opening JSON file
        with open(file_path, 'r', encoding="utf-8") as json_file:
            content_dict = json.load(json_file)
        return content_dict
        
    except FileNotFoundError:
        # If the file does not exist return an empty dict
        logging.info(f"No file found at {file_path}, returning empty dict")
        return dict()
        
    except json.decoder.JSONDecodeError:
        # If the file can't be decoded return an empty dict
        logging.info("JSON decoding error at {file_path}, returning empty dict")
        return dict()


def from_dict_to_file(mydict, file_path):

    #create folder if it does not exist yet
    file_dir = os.path.dirname(file_path)
    if not os.path.exists(file_dir):
        os.makedirs(file_dir)
        
    #write to json file
    try:
        with open(file_path, 'w', encoding="utf-8") as fp:
            json.dump(mydict, fp)
    
    except Exception as e:
        logging.info(f"JSON file writing error at {file_path} due to {e}")
        
        
def download_file(url, file_name, folder_path, s = None, redo = False, retries: int = 2, sleep_time: int = 5):
    """
    This function downloads a file from a url. Arguments:
    - url: the url to download the file from
    - file_name: the name of the file to store it in, *without the extension*, which it guesses
    automatically from the file
    - folder_path: the path to the folder to store it in
    - s: a requests session, possibly containing login cookies for the newspaper
    - redo: whether or not files that have already been stored should be downloaded again
    - retries (int): Number of retry attempts in case of failure. Default is 2.
    - sleep_time (int): Time to sleep between retries in seconds. Default is 5.
    """
    
    #if no requests session included in call, start a new session
    if not s:
        s = requests.Session()

    try:
    
        #create folder if it does not exist yet
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
            
        #find any files that match the planned file name (without extension)
        file_matches = glob.glob(f"{folder_path}/{file_name}.*")
                       
        #if redo is False, do not re-download the file if it is already there
        if (not redo) and file_matches:
            logging.info(f"Not re-downloading file at {url}; already present")
            #first match for that file name with some extension
            full_name = os.path.basename(file_matches[0])
            return full_name
    
        logging.info(f"downloading file at {url}")
    
        #try a set number of times to get the file
        response = None
        for attempt in range(retries):
        
            try:
    
                #get the file
                response = s.get(url)
                #print(response, "\n\n")
        
                #check status
                status = response.status_code
                if status < 200 or status >= 300:
                    raise Exception(f"HTML request was not successful, status was {status}")
                
            except Exception as e:
        
                logging.warning(f"Attempt {attempt + 1} failed for {url} due to {e}")
                time.sleep(sleep_time)
                
        #if still no valid (200) response, return None
        if not response:
            logging.error(f"Ran out of attempts to get file at {url}")
            return None
        
        #guess the appropriate extension from the header
        content_type = response.headers['content-type']
        extension = mimetypes.guess_extension(content_type)
        
        #if that didn't work, get it from the url
        parsed_url = urlparse(url)
        if not extension:    
        
            # either from fm parameter...
            query_params = parse_qs(parsed_url.query)
            fm = query_params.get('fm', [None])[0]
            if fm:
                extension = f".{fm}"
            # e.g., ITV sometimes has extension .jpg but
            # ?fm=webp, and the file will be .webp format
            
            #...or from the url extension
            else:
                url_path = parsed_url.path
                extension = os.path.splitext(url_path)[1]
        
        #create the file name and path
        full_name = file_name + extension
        full_path = folder_path + "/" + full_name
        
        with open(full_path, 'wb') as file:
            file.write(response.content)
        #print(f"{url} saved as:\n{full_path}")
        
        return full_name
            
    except Exception as e:
        logging.error(f"Could not download file at {url} due to {e}")
        return None
    
