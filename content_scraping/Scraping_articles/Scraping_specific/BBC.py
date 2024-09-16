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
      authors_str = byline.find('span', {'class' : 'sc-2b5e3b35-7 bZCrck'}) #class may not be needed
      Authors = authors_str.text.split(" and ")
      return Authors

##NOT UPDATED
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
      date=page.find("time").text
      return date
    

##NOT UPDATED
def extract_image_from_html(html_content=None):
    if not html_content:
        return html_content
    else:
        image_caption = []
        page = bs4.BeautifulSoup(html_content, "lxml")
        figures = page.findall("figure")
        #TO DO: complete
        return image_caption


##NOT UPDATED
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
    
    
with open('BBC_test.html', 'r') as file:
    test_html = file.read()
    
authors = extract_author_from_html(test_html)
print(authors)

date=extract_date_from_html(test_html)
print(date)
