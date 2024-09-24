import bs4
from datetime import datetime
import dateutil.parser as parser
import pytz

def extract_author_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      Authors=[]
      page = bs4.BeautifulSoup(html_content, "lxml")
      authors=page.findAll("a", {"rel" :"author"})
      for author in authors:
        author=author.text
        Authors.append(author)
      return Authors

def extract_text_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      paragraphs_html=page.findAll("p")
      text=[]
      for paragraph in paragraphs_html:
          text.append(paragraph.text.strip())
      #text=" ".join(text)
      return text

def extract_date_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      div_detail=page.find("details")
      date_html=div_detail.find("span")
      date=date_html.text
      return date
    
'''def extract_image_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      image_caption=[]
      page = bs4.BeautifulSoup(html_content, "lxml")
      k=1
      while True:
        div_image=page.find("div",{"id":f"img-{k}"})
        if div_image is None:
           break
        image_caption.append([(div_image.find("source")).get('srcset'),'blabla'])
        k=k+1
      return image_caption

import bs4'''

def extract_image_from_html(html_content=None):
    if not html_content:
        return html_content
    else:
        image_caption = []
        page = bs4.BeautifulSoup(html_content, "lxml")
        k = 1
        while True:
            div_image = page.find("div", {"id": f"img-{k}"})
            if div_image is None:
                break
            image = div_image.find("img")
            image_caption.append([image.get('src'), image.get('alt')])
            k += 1
        return image_caption

'''def date_converter_obj(date_text):
  if date_text==None:
    return None
  date=date_text.strip()
  dt=parser.parse(date)
  return dt'''

def date_converter_obj(date_string):
    # Define the format that matches the input string
    if date_string==None:
       return None
    try:
      date_format = "%a %d %b %Y %H.%M %Z"
      date=datetime.strptime(date_string, date_format)
      return date
    except: 
       return None
    # Use strptime to parse the string into a datetime object
 
