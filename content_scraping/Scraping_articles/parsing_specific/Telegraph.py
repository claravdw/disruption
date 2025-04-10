import bs4
import logging
from dateutil import parser
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))  # Add current dir to path
from parsing_helpers import remove_duplicates, get_best_src_fromfig

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
            
    if "subtitle" in parsed_attr:
    
        try:
            subtitle_p = page.find("p", {"class": "e-standfirst u-heading-4"})
            
            if subtitle_p:
                subtitle = subtitle_p.text.strip()
                attr_dict["subtitle"] =  subtitle
            
        except Exception as e:
            logging.info(f"subtitle parsing unsuccessful due to {e}")
    
    if "text" in parsed_attr:
    
        try:
            body_divs = page.findAll("div", {'class':'articleBodyText section'})
            text = []
            for body_div in body_divs:
                paragraphs = body_div.findAll("p")
                for paragraph in paragraphs:
                    if paragraph:
                        text.append(paragraph.text.strip())
            if len(text) > 0: attr_dict["text"] = text
            
        except Exception as e:
            logging.info(f"text parsing unsuccessful due to {e}")
                       
    if "image" in parsed_attr:
    
        try:
        
            figures = page.findAll("figure", {"class": "article-body-image section"})
            image_caption = []
            
            for fig in figures:
            
                #get image url
                image_src = fig.find("img").get('src')
                #if multiple sources, also extract the largest and best one
                image_src_large = get_best_src_fromfig(fig)
                
                caption_span = fig.find("span", {"data-test": "caption"})
                if caption_span:
                    caption = caption_span.text.strip()
                elif image.has_attr('alt'):
                    caption = image.get('alt').strip()
                else:
                    caption = None
                    
                image_caption.append({"caption": caption, "url": "https://www.telegraph.co.uk" + image_src,
                                      "url_large": "https://www.telegraph.co.uk" + image_src_large})
                
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

