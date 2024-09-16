import bs4
from datetime import datetime
import dateutil.parser as parser
import pytz

def extract_subheadlines_from_html(html_content=None):
    if html_content==None:
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      subheadlines_html=page.findAll("h2")
      subheadlines=[]
      for subheadline in subheadlines_html:
          subheadlines.append(subheadline.text.strip())
      #text=" ".join(text)
      return subheadlines

def extract_author_from_html(html_content=None):
    if html_content==None:
      return html_content
    else:
      Authors=[]
      page = bs4.BeautifulSoup(html_content, "lxml")
      authors=page.findAll("span", {"class": "byline__name"})
      for  author in authors:
        author=author.text
        Authors.append(author)
      return Authors

def extract_text_from_html(html_content=None):
    if html_content==None:
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      paragraphs_html=page.findAll("p",{'data-article-gutter': 'true'})
      text=[]
      for paragraph in paragraphs_html:
          text.append(paragraph.text.strip())
      #text=" ".join(text)
      return text

def extract_date_from_html(html_content=None):
    if html_content==None:
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      date=page.find("div", {"class":"timestamp"})
      if date!=None:
        date=date.text
        return date_str(date_converter_obj(date))
      else:
        return date_str(date_converter_obj(date))
      
def date_converter_obj(date_text):
  tzinfos = {'EDT': pytz.timezone('America/New_York')} 
  if date_text==None:
    return None
  date=date_text.replace('Published','').replace('Updated','').strip()
  dt=parser.parse(date,tzinfos=tzinfos)
  return dt
  
def date_str(date_obj):
  if date_obj==None:
     return None
  else:
     return date_obj.strftime('%d-%m-%Y')


