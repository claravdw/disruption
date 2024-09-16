import bs4

def extract_text_from_html(html_content):
    page = bs4.BeautifulSoup(html_content, "lxml")
    paragraphs_html = page.findAll("p")

    if paragraphs_html !=[]:
        # Extract text from paragraphs
        text = []
        for paragraph in paragraphs_html:
            if paragraph != None:
                text.append(paragraph.text.strip())
    
        return(text)
    else:
        return 'None'
    
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

'''def extract_image_from_html(html_content):
    page = bs4.BeautifulSoup(html_content, "lxml")
    image_html = page.findAll('img',class_='w-100 mw-100 h-auto')
    print(len(image_html))
    if image_html !=[]:
        image_caption=[]
        for image in image_html:
            if image !=None:
                image_caption.append([image.get('alt'),image.get('srcset')])
        return image_caption
    else:
        return 'None'''
    
def extract_image_from_html(html_content):
    page = bs4.BeautifulSoup(html_content, "lxml")
    image_html = page.findAll('img',class_='w-100 mw-100 h-auto')
    print(len(image_html))
    if image_html !=[]:
        image_caption=[]
        for image in image_html:
        # Check if the image tag has the desired classes
            if 'w-100' in image.get('class', []) and 'mw-100' in image.get('class', []) and 'h-auto' in image.get('class', []):
            # Append a list containing the alt text and srcset attribute
                image_caption.append([image.get('alt'), image.get('srcset')])
        return image_caption
    else:
        return None
    

def extract_author_from_html(html_content):
    page = bs4.BeautifulSoup(html_content, "lxml")
    author_html = page.findAll("a",{'rel':"author"})
    # Extract text from paragraphs
    if author_html !=[]:
        authors=[]
        for author in author_html:
            if author != None:
                authors.append(author.text)
        return(authors)
    else:
        return 'None'

def extract_date_from_html(html_content):
    page = bs4.BeautifulSoup(html_content, "lxml")
    date_html = page.find("time")
    if date_html !=None:
        return date_html.get('datetime')
    else:
        return "None"