import bs4

def extract_author_from_html(html_content=None):
    if html_content==None:
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      author=page.find("div",{"class":"author-byline"})
      if author !=None:
        author=author.text
        return author
      else:
         return "None"
      
def extract_text_from_html(html_content=None):
    if html_content==None:
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      paragraphs_html=page.findAll("p")
      text=[]
      for k in range(len(paragraphs_html)):
          if paragraphs_html !=None:
            paragraph=paragraphs_html[k]
            text.append(paragraph.text.strip())
          else:
            text.append('None')
      #text=" ".join(text)
      return text


def extract_date_from_html(html_content=None):
    if html_content==None:
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      date=page.find("span", {"class":"article-date"})
      if date !=None:
         date=date.text
         return date
      else:
         return "None"