import bs4
import logging
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))  # Add current dir to path
from parsing_helpers import remove_duplicates, get_best_src_fromfig
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

    try:
        page = bs4.BeautifulSoup(html_content, "lxml")
    except Exception as e:
        logging.info(f"page could not be parsed due to {e}")                    
        return attr_dict
    
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
            
                #get image url
                image_src = fig.find("img").get('src')
                #if multiple sources, also extract the largest and best one
                image_src_large = get_best_src_fromfig(fig)
                
                caption = fig.find("figcaption")
                if caption:
                    caption_text = caption.text.strip()
                else:
                    caption_text = None
                image_caption.append({"caption": caption_text, "url":  image_src,
                                      "url_large": image_src_large})
                    
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

