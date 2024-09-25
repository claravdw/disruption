import bs4
import logging
import sys
from os import path
parentdir = path.dirname(path.dirname(path.abspath(__file__)))
sys.path.append(parentdir)
from scraping_general_function import remove_duplicates
from dateutil import parser

logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def date_converter_obj(date_string):
    # Define the format that matches the input string
    if date_string==None:
        return None
    try:
        #parser automaticaly deals with ISO 8601 format
        date = parser.parse(date_string)
        return date
    except Exception as e: 
        logging.info(f"date conversion unsuccessful due to {e}")
        return None


def extract(html_content, parsed_attr):
    
    #dictionary to store attributes
    attr_dict = dict.fromkeys(parsed_attr)

    page = bs4.BeautifulSoup(html_content, "lxml")
    
    if "title" in parsed_attr:
    
        try:
            title = page.find("h1").text.strip()
            
            if title:
                attr_dict["title"] =  title
            
        except Exception as e:
            logging.info(f"title parsing unsuccessful due to {e}")

    #note: ITV does not seem to do subtitles

    if "text" in parsed_attr:
    
        try:
            article_body = page.find("div", {"data-testid": "article-body"})
            text = []
            paragraphs_html = article_body.findAll("p") #may need to be class "A8Lwr BVYCX"
            for paragraph in paragraphs_html:
                text.append(paragraph.text.strip())
            if len(text) > 0: attr_dict["text"] = text
            
        except Exception as e:
            logging.info(f"text parsing unsuccessful due to {e}")
            
                       
    if "image" in parsed_attr:
    
        try:
            figures = page.findAll("figure")
            image_caption = []
            print(len(figures), "figures found")
            for fig in figures:
                image = fig.find("img")
                caption = fig.find("figcaption")
                print(fig, "\n\n")
                if caption:
                    caption_text = caption.text.strip()
                else:
                    caption_text = None
                image_caption.append((caption_text, image.get('src')))
            #image_caption = remove_duplicates(image_caption)
            if len(image_caption) > 0: attr_dict["image"] = image_caption
            
        except Exception as e:
            logging.info(f"image parsing unsuccessful due to {e}")
            
    #note: ITV does not seem to do authors
        
    if "date" in parsed_attr:

        try:
            date_time = page.find("time")["datetime"]
            date = date_converter_obj(date_time)
            if date:
                attr_dict["date"] =  date
            
        except Exception as e:
            logging.info(f"date parsing unsuccessful due to {e}")            
            
    return attr_dict

