import pandas as pd
import csv 
import os 
import datetime
import dateutil.parser as parser
import pytz
import csv
import logging
import json

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
    
