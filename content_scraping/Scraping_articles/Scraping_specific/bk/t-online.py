import bs4


def extract_subheadlines_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      subheadlines_html=page.findAll("h3")
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
      authors=page.findAll("span", {"aria-label" : "Autor Name"})
      for  author in authors:
        author=author.text
        Authors.append(author)
      return Authors

def extract_text_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      #paragraphs_html=page.findAll("p",{'data-article-gutter': 'true'})
      paragraphs_html=page.select('p:not(.nat-title):not(.nat-marker)')
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
        date=page.find("span", {"class":"text-manatee text-12 leading-15"})
        if date!=None:
          date=date.text
          return date
        else:
          date="None"
        return date