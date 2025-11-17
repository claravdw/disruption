import bs4


def extract_subheadlines_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      subheadlines_html=page.findAll("h2")
      subheadlines=[]
      for subheadline in subheadlines_html:
          subheadlines.append(subheadline.text.strip())
      #text=" ".join(text)
      return subheadlines

def extract_author_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      Authors=[]
      page = bs4.BeautifulSoup(html_content, "lxml")
      authors=page.find_all("div", attrs={'data-ct-row':"author"})
      for  author in authors:
        author=author.text
        Authors.append(author)
      return Authors

def extract_text_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      paragraphs_html=page.findAll("p",{"class":"paragraph article__item"})
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

      date_html=page.find("time")
      date=date_html.get("datetime")
      return date
    
def extract_image_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      images_html = page.find_all('img')
      images_html = images_html[:-2]
      image_url=[]
      for image in images_html:
         image_url.append([image.get('alt'), image.get('src')])
      return image_url