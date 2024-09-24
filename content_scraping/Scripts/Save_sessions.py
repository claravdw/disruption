
from selenium import webdriver
import requests
import pickle

def save_session(News_paper,logging_url):
    """This function let you loggin on a browser """
    browser = webdriver.Chrome()
    browser.get(logging_url)
    s = requests.Session()
    # Set correct user agent
    selenium_user_agent = browser.execute_script("return navigator.userAgent;")
    s.headers.update({"user-agent": selenium_user_agent})

    for cookie in browser.get_cookies():
        s.cookies.set(cookie['name'], cookie['value'], domain=cookie['domain'])
        
    print()

    with open(f'session_{News_paper}.pickle', 'wb') as f:
        pickle.dump(s, f)
        
if __name__ == '__main__':

    newspaper = "Telegraph"
    url = "https://www.telegraph.co.uk/world-news/2024/09/17/hezbollah-tech-blunder-ended-leabnon-pager-attack-israel/"
    
    save_session(newspaper, url)
