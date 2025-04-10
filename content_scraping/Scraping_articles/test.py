import scraping_general_function as scrap
import parsing_general_function as pars
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'Data_structuring'))
import data_structuring as ds

from seleniumwire import webdriver
import json
import pprint

url = "https://www.thesun.co.uk/sport/34389788/prince-william-george-villa-champions-league/"
newspaper = "Sun"
parsed_attr = ["title", "subtitle", "text", "image", "author", "date"]

#import the specific parsing module for this newspaper
newspaper_module = pars.choose_parser(newspaper)

#set up options for scraping with Chrome webdriver
options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--incognito')
options.add_argument("window-size=2000,1500") #note: not present in scraping_general_function
options.add_argument('--headless=new')
#comment out last line to see what's happening in the driver

#if BBC, we need selenium due to javascript elements;
#if ITV, we need selenium to scroll down slowly and load images;
#set up a selenium session
if newspaper in ["BBC", "ITV"]:
   s = webdriver.Chrome(options=options)
   s.request_interceptor = scrap.interceptor
#otherwise, use requests package, and retrieve session if possible
else:
   s = scrap.start_session(newspaper)

#scrape html content and write to file
html_content = scrap.fetch_url(newspaper=newspaper, s=s, url=url)
with open("test_files/test.html", "w") as text_file:
    text_file.write(html_content)

#parse html content
parsed_content = newspaper_module.extract(html_content, parsed_attr=parsed_attr)

#format, pretty-print and write to file
parsed_content = pars.format_parsed_content(parsed_content, newspaper)
pprint.pp(parsed_content)
ds.from_dict_to_file(parsed_content, "test_files/test.json")

    
    
    
