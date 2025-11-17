import scraping_general_functions as scrap
import parsing_general_functions as pars
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'data_structuring'))
import data_structuring_functions as ds
import time

from seleniumwire import webdriver
from selenium_stealth import stealth #to avoid bot detection
from selenium.webdriver.common.by import By
import json
import pprint

from logging_config import setup_logger #import our custom logger
setup_logger()


##set up task

url = "https://www.thetimes.com/world/europe/article/attacking-art-should-be-criminal-offence-even-if-theres-no-damage-lhf2vhjrq"
newspaper = "The-Times"
parsed_attr = ["title", "subtitle", "text", "image", "author", "date"]
debug_mode = True


##prepare scraping

#set up options for scraping with Chrome webdriver
options = webdriver.ChromeOptions()

#if BBC, we need selenium due to javascript elements;
#if ITV, we need selenium to scroll down slowly and load images;
#set up a selenium session
if newspaper in ["BBC", "ITV","Sun","Sky"]:

   print("using selenium browser")
   s = webdriver.Chrome(options=options)
   #not headless, for testing purposes
   
   #if in "debug mode", we want to see the page load to detect any issues;
   #either we will do this again in fetch_url (no scraping is happening here)
   if debug_mode:
   
       print("previewing page")
       s.get(url)
       time.sleep(5) #take some time to inspect the page

   
#otherwise, use requests package, and retrieve session if possible
else:

   print("using requests")
   s = scrap.start_session(newspaper)


##scrape html content and write to file

print("fetching url content")
html_content = scrap.fetch_url(newspaper=newspaper, s=s, url=url)
with open("test_files/test.html", "w") as text_file:
    text_file.write(html_content)


##parse html content

#import the specific parsing module for this newspaper
newspaper_module = pars.choose_parser(newspaper)

parsed_content = newspaper_module.extract(html_content, parsed_attr=parsed_attr)
#pprint.pp(parsed_content)

#format, pretty-print and write to file
parsed_content = pars.format_parsed_content(parsed_content, newspaper)
pprint.pp(parsed_content)
ds.from_dict_to_file(parsed_content, "test_files/test.json")


##download first image

image_dicts = parsed_content["image"]

if image_dicts:
    image_dict = image_dicts[0]
            
    #create local file name (without extension)
    img_file_name = "first_image"
                    
    #get url
    img_url = image_dict["url"]
                    
    #drop parameters--except if Guardian, it needs parameters or will give a 401
    if newspaper != "The-Guardian":
        img_url = img_url.split('?')[0]
        
    #download the image file and get full name (with extension)
    img_full_name = ds.download_file(img_url, img_file_name, folder_path="test_files")
    print("stored first image as:", img_full_name)

    
    
