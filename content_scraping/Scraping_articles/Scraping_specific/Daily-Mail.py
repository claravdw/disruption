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
            
    if "subtitle" in parsed_attr:
    
        try:
            ul = page.find("ul", {"class":"mol-bullets-with-font"})
            
            subtitles = []
            if ul:
                bullets = ul.findAll("li")
                for bullet in bullets:
                    subtitles.append(bullet.text.strip())
            subtitles = ". ".join(subtitles) + "."
                    
            attr_dict["subtitle"] = subtitles 
            
        except Exception as e:
            logging.info(f"subtitle parsing unsuccessful due to {e}")
    
    if "text" in parsed_attr:
    
        try:
            article_body = page.find("div", {"itemprop": "articleBody"})
            text = []
            paragraphs_html = article_body.findAll("p", {"class": "mol-para-with-font"})
            for paragraph in paragraphs_html:
                sentence_chunks = paragraph.text.strip()
                text.append("".join(sentence_chunks))
            if len(text) > 0: attr_dict["text"] = text
            
        except Exception as e:
            logging.info(f"text parsing unsuccessful due to {e}")
            
                       
    if "image" in parsed_attr:
    
        try:
            image_divs = page.findAll("div", {"class": "mol-img"})
            image_caption = []
            for div in image_divs:
                images = div.findAll("img")
                for image in images:
                    image_caption.append((image.get('alt'),image.get('src')))
            image_caption = remove_duplicates(image_caption)
            if len(image_caption) > 0: attr_dict["image"] = image_caption
            
        except Exception as e:
            logging.info(f"image parsing unsuccessful due to {e}")
            
    
    if "author" in parsed_attr:
    
        try:
            authors = []
            authors_p = page.find("p", {"class": "author-section byline-plain"})
            authors_a = authors_p.findAll("a")
            for author in authors_a:
               author = author.text
               if author != "":
                   authors.append(author)
            if len(authors) > 0: attr_dict["author"] =  authors
        
        except Exception as e:
            logging.info(f"author parsing unsuccessful due to {e}")
        
    if "date" in parsed_attr:

        try:
            date_p = page.find("p", {"class": "byline-section"})
            #find the first time, which is the Published (not Updated) time
            date_time = date_p.find("time")["datetime"]
            date = date_converter_obj(date_time)
            if date:
                attr_dict["date"] =  date
            
        except Exception as e:
            logging.info(f"date parsing unsuccessful due to {e}")            
            
    return attr_dict

