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
      authors=page.findAll("div", {"class" :"font-sansUI lg:text-base md:text-base sm:text-s text-shade-dark dark:text-shade-light mt-8"})
      for  author in authors:
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
      date_html=page.find("time")
      date=date_html.get("datetime")
      return date
    
def extract_image_from_html(html_content="None"):
    if html_content=="None":
      return html_content
    else:
      page = bs4.BeautifulSoup(html_content, "lxml")
      #div_picture=page.find('div',{'class':"relative z-20 w-full mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg"})
      div_pictures=page.find('figure')
      image=div_pictures.find('img',attrs={'class':'rounded w-full'})
      #filtered_images = [img for img in images_html if int(img['width']) > 400]
      #print(len(filtered_images))
      return [image.get('alt'),image.get('src')]