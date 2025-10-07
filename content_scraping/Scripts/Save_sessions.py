from selenium import webdriver
from selenium_stealth import stealth
import time
import requests
import pickle

# create ChromeOptions object

options = webdriver.ChromeOptions()


def save_session(News_paper,logging_url):
    """This function lets you login on a browser and store the cookies from the session"""
    
    ## Set up WebDriver

    browser = webdriver.Chrome(options=options)


    ## Open a webpage

    browser.get("https://www.thesun.co.uk/news/36215043/trevor-kavanagh-keir-starmer-tories-save-britain")
    
    #navigate to the url
    browser.get(logging_url)
    time.sleep(30) #trying to make the browser wait for the login
    
    
    ## Save the cookies from the session
    
    print("proceeding to save cookies")
    s = requests.Session()
    
    # Set correct user agent
    selenium_user_agent = browser.execute_script("return navigator.userAgent;")
    s.headers.update({"user-agent": selenium_user_agent})

    for cookie in browser.get_cookies():
        s.cookies.set(cookie['name'], cookie['value'], domain=cookie['domain'])

    with open(f'session_{News_paper}.pickle', 'wb') as f:
        pickle.dump(s, f)
        
if __name__ == '__main__':

    newspaper = "Sun"
    url = "https://www.thesun.co.uk/news/36215043/trevor-kavanagh-keir-starmer-tories-save-britain"
    
    save_session(newspaper, url)
