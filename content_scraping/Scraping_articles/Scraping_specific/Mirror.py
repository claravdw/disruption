import bs4
import logging
from dateutil import parser

#to import modules from parent directory
import sys
from os import path
parentdir = path.dirname(path.dirname(path.abspath(__file__)))
sys.path.append(parentdir)
from scraping_general_function import remove_duplicates


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

    page = bs4.BeautifulSoup(html_content, "lxml")
    
    #dictionary to store attributes
    attr_dict = dict.fromkeys(parsed_attr)
    
    if "title" in parsed_attr:
    
        try:
            title = page.find("h1").text.strip()
            
            if title:
                attr_dict["title"] =  title
            
        except Exception as e:
            logging.info(f"title parsing unsuccessful due to {e}")
            
    if "subtitle" in parsed_attr:
    
        try:
            subtitle_p = page.find("p", {"class": "lead-content__sub-title"})
            
            if subtitle_p:
                subtitle = subtitle_p.text.strip()
                attr_dict["subtitle"] =  subtitle
            
        except Exception as e:
            logging.info(f"subtitle parsing unsuccessful due to {e}")
    
    if "text" in parsed_attr:
    
        try:
            body_div = page.find("div", {'class':'article-body'})
            paragraphs = body_div.findAll("p")
            text = []
            for paragraph in paragraphs:
                text.append(paragraph.text.strip())
            if len(text) > 0: attr_dict["text"] = text
            
        except Exception as e:
            logging.info(f"text parsing unsuccessful due to {e}")
                       
    if "image" in parsed_attr:
    
        try:

            #in-text images
            figures = page.findAll("div", {"class": "image-container"})
            
            #add lead image to beginning
            lead_div = page.find("div", {"class": "lead-content__lead-element--image"})
            if lead_div:
                figures.insert(0, lead_div)
            
            image_caption = []
            for figure in figures:
                image = figure.find("img")
                if not image:
                    image = figure.find("amp-img")
                caption_el = figure.find("figcaption")
                if caption_el:
                    caption = caption_el.text.strip()
                elif image.has_attr('alt'):
                    caption = image.get('alt')
                else:
                    caption = None
                image_caption.append({"caption": caption, "url": image.get('src')})
            if len(image_caption) > 0: attr_dict["image"] =  image_caption
            
        except Exception as e:
            logging.info(f"image parsing unsuccessful due to {e}")
    
    if "author" in parsed_attr:
    
        try:
            author_names = page.findAll("span", {'class':"e-byline__author"})
            authors = []
            for author in author_names:
                authors.append(author.text)
            authors = remove_duplicates(authors)
            if len(authors) > 0: attr_dict["author"] =  authors
        
        except Exception as e:
            logging.info(f"author parsing unsuccessful due to {e}")
        
    if "date" in parsed_attr:

        try:
            date_html = page.find("time")
    
            if date_html:
                date = date_converter_obj(date_html.get("datetime"))
                attr_dict["date"] =  date
            
        except Exception as e:
            logging.info(f"date parsing unsuccessful due to {e}")            
            
    return attr_dict

