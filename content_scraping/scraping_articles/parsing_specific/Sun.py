import bs4
import logging
from os import path
from datetime import datetime
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))  # Add current dir to path
from parsing_helpers import remove_duplicates, get_biggest_src_fromimg

logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
        
def date_converter_obj(date_string):
    if date_string==None:
       return None
    try:
      # Define the format that matches the input string
      date_format = "%d %b %Y"
      # Use strptime to parse the string into a datetime object
      date = datetime.strptime(date_string, date_format)
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
    
    #note: does not include all-caps, ""
    if "title" in parsed_attr:
    
        try:
            
            title = page.find("h1").text.strip()
            kicker = page.find("span", {"class": "article__kicker"})
            
            if kicker:
               title = kicker.text.strip() + f" {title}"
            
            if title:
                attr_dict["title"] = title
            
        except Exception as e:
            logging.info(f"title parsing unsuccessful due to {e}")
            
    if "subtitle" in parsed_attr:
    
        try:
            subtitle_div = page.find("div", {"class": "article__subdeck t-p-border-color"})
            
            if subtitle_div:
                subtitle = subtitle_div.text.strip()
                attr_dict["subtitle"] =  subtitle
            
        except Exception as e:
            logging.info(f"subtitle parsing unsuccessful due to {e}")
    
    if "text" in parsed_attr:
    
        try:
            body = page.find("article")
            paragraphs = body.findAll("p")
            text = []
            for paragraph in paragraphs:
                if paragraph:
                    text.append(paragraph.text.strip())
            if len(text) > 0: attr_dict["text"] = text
            
        except Exception as e:
            logging.info(f"text parsing unsuccessful due to {e}")
                       
    if "image" in parsed_attr:
    
        try:
            figures = page.findAll("figure", {"class": "article__media"})
            image_caption = []
            for figure in figures:
            
                img = figure.find("img")
                #get img source
                img_src = img.get('src')
                #if there is a list of sources (srcset), also get the biggest
                image_src_large = get_biggest_src_fromimg(img)
                
                #try to get a caption
                caption_el = figure.find("figcaption")
                if caption_el:
                    caption = caption_el.text.strip()
                elif img.has_attr("alt"):
                    caption = img.get('alt').strip()
                else:
                    caption = None
                
                image_caption.append({"caption": caption, "url": img_src,
                                      "url_large": image_src_large})
                
            if len(image_caption) > 0: attr_dict["image"] =  image_caption
            
        except Exception as e:
            logging.info(f"image parsing unsuccessful due to {e}")
    
    if "author" in parsed_attr:
    
        try:
            author_links = page.findAll("a", {'class':"author url fn article__author-link t-p-color"})
            authors = []
            for author_link in author_links:
                authors.append(author_link.text)
            #if no author links were found, look for unlinked byline
            if len(authors) == 0:
                author_spans = page.findAll("span", {'class':"article__author-name t-p-color"})
                for author_span in author_spans:
                    authors.append(author_span.text)
            authors = remove_duplicates(authors)
            if len(authors) > 0: attr_dict["author"] =  authors
        
        except Exception as e:
            logging.info(f"author parsing unsuccessful due to {e}")
        
    if "date" in parsed_attr:

        try:
            date_html = page.find("span", {"class": "article__timestamp"})
    
            if date_html:
                date = date_converter_obj(date_html.text)
                attr_dict["date"] =  date
            
        except Exception as e:
            logging.info(f"date parsing unsuccessful due to {e}")            
            
    return attr_dict

