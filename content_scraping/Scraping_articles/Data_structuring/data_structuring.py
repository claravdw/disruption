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

def from_file_to_url_list(file_path, name_url_column="url"):

    try:
        URLs_df = pd.read_csv(file_path)
        URLs_list = URLs_df[name_url_column].tolist()
        return URLs_list
    except FileNotFoundError:
        # If the file does not exist return and empty list
        #logging.info("No url file found at", file_path, ", returning empty list")
        return []


def from_file_to_dict(file_path, name_index_column="url", name_value_columns=None):

    """This function reads in a csv with an index column and returns a dictionary with
    the index column as keys and the columns as values"""

    try:
        # Opening JSON file
        with open(file_path) as json_file:
            content_dict = json.load(json_file)
        return content_dict
        
    except FileNotFoundError:
        # If the file does not exist return and empty dict
        logging.info(f"No file found at {file_path}, returning empty dict")
        return dict()
        
    except json.decoder.JSONDecodeError:
        # If the file does not exist return and empty dict
        logging.info("JSON decoding error at {file_path}, returning empty dict")
        return dict()
        

def date_converter_obj(date_text):

    """This function tries to convert the text of newspapers' date field into a real date"""

    tzinfos = {'EDT': pytz.timezone('America/New_York')} 
    if date_text==None:
        return None
    date=date_text.replace('Published','').replace('Updated','').strip()
    dt=parser.parse(date,tzinfos=tzinfos)
    print(type(dt))
    return dt


def add_row_to_csv(file_name, new_line, header=None):

    """This function adds one row to a csv file, creating it and adding headers to it if need be.
    new_line and header argument format is list."""
    
    #create folder if it does not exist yet
    folder = os.path.dirname(file_name)
    if not os.path.isdir(folder):
        print("directory", folder, "did not exist yet, creating it now")
        os.makedirs(folder)

    with open(file_name, 'a', newline='') as file:
        writer = csv.writer(file)
        file_empty = os.stat(file_name).st_size == 0
        #if file is empty, create the header
        if file_empty:
            writer.writerow(header)
        # Write the new line
        writer.writerow(new_line)

