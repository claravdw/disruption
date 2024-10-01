import bs4
import logging
from os import path
from datetime import datetime

logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
        
def date_converter_obj(date_string):
    if date_string==None:
       return None
    try:
      # Define the format that matches the input string
      date_format = "%A %d %B %Y %H:%M, UK"
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
    
    if "title" in parsed_attr:
    
        try:
            title = page.find("h1").text.strip()
            
            if title:
                attr_dict["title"] =  title
            
        except Exception as e:
            logging.info(f"title parsing unsuccessful due to {e}")
            
    if "subtitle" in parsed_attr:
    
        try:
            subtitle_p = page.find("p", {"class": "sdc-article-header__sub-title sdc-site-component-header--h2"})
            
            if subtitle_p:
                subtitle = subtitle_p.text.strip()
                attr_dict["subtitle"] =  subtitle
            
        except Exception as e:
            logging.info(f"subtitle parsing unsuccessful due to {e}")
    
    if "text" in parsed_attr:
    
        try:
            body_div = page.find("div",{'class':'sdc-article-body'})
            
            #remove any "related stories" boxes
            related_divs = body_div.findAll("div",{'class':'sdc-article-related-stories'})
            for div in related_divs:
                #print(div)
                div.extract() #cf. pop()
            
            paragraphs = body_div.findAll("p")
            text = []
            for paragraph in paragraphs:
                if paragraph:
                    text.append(paragraph.text.strip())
            if len(text) > 0: attr_dict["text"] = text
            
        except Exception as e:
            logging.info(f"text parsing unsuccessful due to {e}")
                       
    if "image" in parsed_attr:
    
        try:
            figures = page.findAll("figure", {"class": "sdc-article-image__figure"})
            image_caption = []
            for figure in figures:
                image = figure.find("img")
                caption_span = figure.find("span", {"class": "ui-media-caption__caption-text"})
                if caption_span:
                    caption = caption_span.text
                else:
                    caption = None
                image_caption.append({"caption": caption, "url": image.get('src')})
                
            if len(image_caption) > 0: attr_dict["image"] =  image_caption
            
        except Exception as e:
            logging.info(f"image parsing unsuccessful due to {e}")
    
    if "author" in parsed_attr:
    
        try:
            author_names = page.findAll("span", {'class':"sdc-article-author__name"})
            authors = []
            for author in author_names:
                author_link = author.find("a", {'class':"sdc-article-author__link"})
                authors.append(author_link.text)
            #if no author links were found, look for unlinked byline
            if len(authors) == 0:
                author_html = page.find("p", {'class':"sdc-article-author__byline"})
                author = author_html.text
                author = author.split(",")[0].replace("By ", "")
                authors = author.split(" and ")
            if len(authors) > 0: attr_dict["author"] =  authors
        
        except Exception as e:
            logging.info(f"author parsing unsuccessful due to {e}")
        
    if "date" in parsed_attr:

        try:
            date_html = page.find("p", {"class": "sdc-article-date__date-time"})
    
            if date_html:
                date = date_converter_obj(date_html.text)
                attr_dict["date"] =  date
            
        except Exception as e:
            logging.info(f"date parsing unsuccessful due to {e}")            
            
    return attr_dict

