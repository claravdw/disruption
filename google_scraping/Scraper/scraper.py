import time
from selenium.webdriver.common.by import By

import query as qu

def extract_url_from_page(browser):
    try:
        links = browser.find_elements(By.TAG_NAME, 'a')
        Urls=[]
        for link in links:
            Urls.append(link.get_attribute('href'))
        return Urls
    except Exception as e:
        print(f"An error occurred: {e}")
        return None
    
def filter_url(url,href_list):
    urls=[]
    for href in href_list:
        if href!=None and href.startswith(f'https://www.{url}'):
            urls.append(href)
    return urls

def scraper(url,query_list,start_date,end_date,browser):
    """This function scrapes the title, date, and URL of a Google search. To initiate the search, please provide the domain of the site you wish to scrape, 
    a list of search terms, and  specify the start and end dates using the format yyyy-mm-dd."""
    browser.implicitly_wait(2)
    search_url=qu.make_query(url,query_list,start_date,end_date)
    browser.get(search_url)
    urls=[]
    for k in range(1,1000):
        current_url = browser.current_url
        while current_url.startswith("https://www.google.com/sorry/"):
            time.sleep(10)
            current_url = browser.current_url
        urls.extend(extract_url_from_page(browser))   
        try:
            next_page=browser.find_element(By.XPATH,f'//*[@id="pnnext"]/span[2]')
            time.sleep(2)
            next_page.click()
        except Exception as e:
            print(f'no next page due to {e}')
            break
    urls=filter_url(url,urls)
    
    return urls
