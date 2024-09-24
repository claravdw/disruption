import bs4
import logging
from datetime import datetime

logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

        
def date_converter_obj(date_string):
    if date_string==None:
       return None
    try:
      # Define the format that matches the input string
      date_format = "%a %d %b %Y %H.%M %Z"
      # Use strptime to parse the string into a datetime object
      date = datetime.strptime(date_string, date_format)
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
            subtitle_div = page.find("div", {"role":"heading", "aria-level":"2"})
            
            if subtitle_div:
                subtitle = subtitle_div.text.strip()
                attr_dict["subtitle"] =  subtitle
            
        except Exception as e:
            logging.info(f"subtitle parsing unsuccessful due to {e}")
    
    if "text" in parsed_attr:
    
        try:
            paragraphs_html = page.findAll("p")
            text = []
            for paragraph in paragraphs_html:
                text.append(paragraph.text.strip())
            if len(text) > 0: attr_dict["text"] = text
            
        except Exception as e:
            logging.info(f"text parsing unsuccessful due to {e}")
            
                       
    if "image" in parsed_attr:
    
        try:
            
            image_caption = []
            page = bs4.BeautifulSoup(html_content, "lxml")
            k = 1
            while True:
                div_image = page.find("div", {"id": f"img-{k}"})
                #print(f"image {k} is {div_image}")
                if div_image is None:
                    break
                image = div_image.find("img")
                print(f"image {k} is {image}")
                image_caption.append((image.get('src'), image.get('alt')))
                k += 1
            if len(image_caption) > 0: attr_dict["image"] = image_caption
            
        except Exception as e:
            logging.info(f"image parsing unsuccessful due to {e}")
            
    
    if "author" in parsed_attr:
    
        try:
            authors = []
            authors_a = page.findAll("a", {"rel" :"author"})
            for author in authors_a:
               author = author.text
               authors.append(author)
            if len(authors) > 0: attr_dict["author"] =  authors
        
        except Exception as e:
            logging.info(f"author parsing unsuccessful due to {e}")
        
    if "date" in parsed_attr:

        try:
            div_detail = page.find("details")
            date_html = div_detail.find("span")
            date = date_html.text
            if date:
                attr_dict["date"] =  date
            
        except Exception as e:
            logging.info(f"date parsing unsuccessful due to {e}")            
            
    return attr_dict

