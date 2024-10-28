from seleniumwire import webdriver
from selenium.webdriver.support.ui import WebDriverWait
import bs4

s = webdriver.Chrome()
url = "https://www.itv.com/news/westcountry/2020-09-03/extinction-rebellion-protest-outside-met-office-building-in-exeter"
s.get(url) #load the page
text = s.page_source
print(text[:100])

page = bs4.BeautifulSoup(text, "lxml")
figures = page.findAll("figure")
for fig in figures:
    image = fig.find("img")
    caption = fig.find("figcaption")
    #print(fig, "\n\n")
    if image.has_attr("src"): #sometimes javascript does not execute in time?
                    if caption:
                        caption_text = caption.text.strip()
                    else:
                        caption_text = None
                    print({"caption": caption_text, "url":  image.get('src')})

