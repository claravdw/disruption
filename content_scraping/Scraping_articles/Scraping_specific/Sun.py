import bs4
import logging
from os import path
from datetime import datetime

#to import modules from parent directory
import sys
from os import path
parentdir = path.dirname(path.dirname(path.abspath(__file__)))
sys.path.append(parentdir)
from scraping_general_function import remove_duplicates

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

    page = bs4.BeautifulSoup(html_content, "lxml")
    
    #dictionary to store attributes
    attr_dict = dict.fromkeys(parsed_attr)
    
    #note: does not include all-caps, ""
    if "title" in parsed_attr:
    
        try:
            kicker = page.find("span", {"class": "article__kicker t-p-color--dark"}).text.strip()
            title = page.find("h1").text.strip()
            
            if title:
                attr_dict["title"] = f"{kicker} {title}"
            
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
            body = page.find("article", {"class": "article theme-news"})
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
                image = figure.find("img")
                image_caption.append({"caption": image.get('alt'), "url": image.get('src')})
                
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

