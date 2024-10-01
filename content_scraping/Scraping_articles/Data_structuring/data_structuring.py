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
from urllib.parse import urlparse

csv.field_size_limit(10000000)

logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def from_csv_to_list(file_path, name_column="url"):
    """
    This function takes a csv file and converts on particular named column from it to a list
    """

    try:
        URLs_df = pd.read_csv(file_path)
        URLs_list = URLs_df[name_column].tolist()
        return URLs_list
    except FileNotFoundError:
        # If the file does not exist return and empty list
        #logging.info("No url file found at", file_path, ", returning empty list")
        return []


def from_file_to_dict(file_path):

    """This function reads in a json file nand returns a dictionary"""

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
        logging.info("JSON file writing error at {file_path} due to {e} \n did not output file")
        
        
def download_file(url, file_name, folder_path):
    """
    This function downloads a file from a url. Arguments:
    url: the url to download the file from
    file_name: the name of the file to store it in, *without the extension*, which it guesses
    automatically from the file
    folder_path: the path to the folder to store it in
    """

    try:
    
        #create folder if it does not exist yet
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
    
        #get the file
        response = requests.get(url)
        
        #guess the appropriate extension from the header
        content_type = response.headers['content-type']
        extension = mimetypes.guess_extension(content_type)
        
        #if that didn't work, get it from the url
        if not extension:
            url_path = urlparse(url).path
            extension = os.path.splitext(url_path)[1]
        
        #create the file name and path
        full_name = file_name + extension
        full_path = folder_path + "/" + full_name
        
        with open(full_path, 'wb') as file:
            file.write(response.content)
            
        return full_name
            
    except Exception as e:
        logging.error(f"Could not download file at {url} due to {e}")
        return None
    
