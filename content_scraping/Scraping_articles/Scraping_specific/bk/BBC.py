import bs4
from datetime import datetime
import dateutil.parser as parser
import pytz

def extract_author_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      byline = page.find("div", {"data-testid" :"byline-new-contributors"})
      authors_str = byline.find("span") #{"class" : "sc-2b5e3b35-7 bZCrck"}
      Authors = authors_str.text.split(" and ")
      return Authors


def extract_text_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      text_divs = page.findAll("div", {"data-component":"text-block"})
      text=[]
      for div in text_divs:
          paragraphs = div.findAll("p") #{"class" : "sc-eb7bd5f6-0 fYAfXe"}
          for paragraph in paragraphs:
              text.append(paragraph.text.strip())
      return text


def extract_date_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      date=page.find("time").text
      return date
    

def extract_image_from_html(html_content=None):
    if not html_content:
        return html_content
    else:
        #list of two-item lists containing captions and links
        images = []
        page = bs4.BeautifulSoup(html_content, "lxml")
        figures = page.findAll("figure")
        for figure in figures:
            img = figure.find("img")
            caption = figure.find("figcaption")
            if img:
                img_src = img.get('src')
                if caption:
                    caption_text = caption.text.strip()
                #in absence of caption, use alt text
                elif img.has_attr('alt'):
                    caption_text = img.get('alt')
                    #don't store pics that are grey lines
                    if caption_text=="Presentational grey line": continue
                else:
                    caption_text = None
                images.append([caption_text, img_src])
        return images

def date_converter_obj(date_string):
    # Define the format that matches the input string
    if date_string==None:
       return None
    try:
      date_format = "%d %B %Y"
      date=datetime.strptime(date_string, date_format)
      return date
    except: 
       return None
    # Use strptime to parse the string into a datetime object
    
    
with open('BBC_test.html', 'r') as file:
    test_html = file.read()
    
authors = extract_author_from_html(test_html)
print(authors)

date=date_converter_obj(extract_date_from_html(test_html))
print(date)

text=extract_text_from_html(test_html)
print(text)

img=extract_image_from_html(test_html)
print(img)
