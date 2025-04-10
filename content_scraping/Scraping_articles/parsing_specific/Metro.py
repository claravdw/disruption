import bs4
import logging
from os import path
from datetime import datetime

#to import modules from parent directory
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))  # Add current dir to path
from parsing_helpers import remove_duplicates

logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
        
def date_converter_obj(date_string):
    if date_string==None:
       return None
    try:
      # Define the format that matches the input string
      # Get rid of the time as it is an unsupported format
      date_string = " ".join(date_string.split(", ")[:2])
      date_format = "Published %b %d %Y"
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
            
            if title:
                attr_dict["title"] = title
            
        except Exception as e:
            logging.info(f"title parsing unsuccessful due to {e}")
    
    #note: Metro does not seem to do subtitles
    
    if "text" in parsed_attr:
    
        #classes of p that should not be included in the body text
        bad_p_classes = ["metro-video-player__read-more", "vjs-no-js", "zopo-title"]
    
        try:
            body = page.find("div", {"class": "article-body"})
            paragraphs = body.findAll("p")
            text = []
            for paragraph in paragraphs:
                #leave out the paragrph if it is one of the "bad" classes
                if paragraph.has_attr("class"):
                    if any(c in bad_p_classes for c in paragraph["class"]):
                        continue
                text.append(paragraph.text.strip())
            if len(text) > 0: attr_dict["text"] = text
            
        except Exception as e:
            logging.info(f"text parsing unsuccessful due to {e}")
                       
    if "image" in parsed_attr:
    
        #src in img elements is sometimes this "fallback" link; real link is in data-src
        bad_src = "https://metro.co.uk/wp-content/client-mu-plugins/metro-branding/images/fallback.png"
    
        try:
        
            figures = page.findAll("figure", {"class": "img-container shareable-item wp-caption"})
            image_caption = []
            for figure in figures:
                #get image url
                image = figure.find("img")
                img_url = image.get('src')
                if img_url == bad_src:
                    if image.has_attr('data-src'):
                        img_url = image.get('data-src')
                    else:
                        img_url = None
                #get caption
                caption = figure.find("figcaption")
                if caption:
                    caption_text = caption.text.strip()
                elif image.has_attr('alt'):
                    caption_text = image.get('alt').strip()
                else:
                    caption_text = None
                image_caption.append({"caption": caption_text, "url": img_url})
            
            if len(image_caption) > 0: attr_dict["image"] =  image_caption
            
        except Exception as e:
            logging.info(f"image parsing unsuccessful due to {e}")
            
    #note: we are skipping the header image that Metro sometimes puts the headline on top of
    
    if "author" in parsed_attr:
    
        try:
            author_links = page.findAll("a", {'class':"author url fn"})
            authors = []
            for author_link in author_links:
                authors.append(author_link.text)
            authors = remove_duplicates(authors)
            if len(authors) > 0: attr_dict["author"] =  authors
        
        except Exception as e:
            logging.info(f"author parsing unsuccessful due to {e}")
        
    if "date" in parsed_attr:

        try:
            date_html = page.find("span", {"class": "post-published"})
    
            if date_html:
                date = date_converter_obj(date_html.text.strip())
                attr_dict["date"] =  date
            
        except Exception as e:
            logging.info(f"date parsing unsuccessful due to {e}")            
            
    return attr_dict

