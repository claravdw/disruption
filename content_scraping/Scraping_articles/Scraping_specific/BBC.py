import bs4
import logging
from datetime import datetime

logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def date_converter_obj(date_string):
    # Define the format that matches the input string
    if date_string==None:
        return None
    try:
        date_format = "%d %B %Y"
        date = datetime.strptime(date_string, date_format)
        return date
    except Exception as e: 
        logging.info(f"date conversion unsuccessful due to {e}")
        return None
    # Use strptime to parse the string into a datetime object


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
    
    #note: BBC does not seem to do subtitles
    
    if "text" in parsed_attr:
    
        try:
            text_divs = page.findAll("div", {"data-component":"text-block"})
            text = []
            for div in text_divs:
                paragraphs = div.findAll("p") #{"class" : "sc-eb7bd5f6-0 fYAfXe"}
                for paragraph in paragraphs:
                    text.append(paragraph.text.strip())
            if len(text) > 0: attr_dict["text"] = text
            
        except Exception as e:
            logging.info(f"text parsing unsuccessful due to {e}")
            
                       
    if "image" in parsed_attr:
    
        #strings present in non-photo alt texts
        badcaps = ["presentational grey line", "white line", "bbc bbc"]
        #names of non-photo image links
        badsrc = ["https://ichef.bbci.co.uk/news/480/cpsprodpb/1FCD/production/_105914180_line976-nc.png.webp",
                  "/bbcx/grey-placeholder.png"]
    
        try:
            #list of two-item lists containing captions and links
            images = []
            figures = page.findAll("figure")

            for figure in figures:
            
                img = figure.find("img")
                caption = figure.find("figcaption")
                
                if img:
                
                    img_src = img.get('src')
                    
                    #skip non-photos
                    if img_src in badsrc:
                        continue
                    
                    #get caption    
                    if caption:
                        caption_text = caption.text.strip()
                    #in absence of caption, use alt text (sometimes incomplete)
                    elif img.has_attr('alt'):
                         caption_text = img.get('alt')
                         #skip non-photos
                         caplower = caption_text.lower()
                         if any(b in caplower for b in badcaps):
                             continue
                    #in absence of alt text, have None caption
                    else:
                         caption_text = None
                    images.append({"caption": caption_text, "url": img_src})
                    
            if len(images) > 0: attr_dict["image"] = images
            
        except Exception as e:
            logging.info(f"image parsing unsuccessful due to {e}")
            
    
    if "author" in parsed_attr:
    
        try:
            byline = page.find("div", {"data-testid" :"byline-new-contributors"})
            authors_str = byline.find("span") #{"class" : "sc-2b5e3b35-7 bZCrck"}
            authors = authors_str.text.split(" and ")
            if len(authors) > 0: attr_dict["author"] =  authors
        
        except Exception as e:
            logging.info(f"author parsing unsuccessful due to {e}")
        

    if "date" in parsed_attr:

        try:
            time = page.find("time").text.strip()
    
            if time:
                date = date_converter_obj(time)
                attr_dict["date"] =  date
            else:
                print("time not found")
            
        except Exception as e:
            logging.info(f"date parsing unsuccessful due to {e}")            
            
    return attr_dict
    

