
from selenium import webdriver
import requests
import pickle
import time

def save_session(News_paper,logging_url):
    """This function let you loggin on a browser """
    
    #launch the browser and navigate to the url
    browser = webdriver.Chrome()
    #browser.implicitly_wait(10) #trying to make the browser wait for the login
    browser.get(logging_url)
    time.sleep(30) #trying to make the browser wait for the login
    print("proceeding to save cookies")
    
    #save the cookies from the session
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

    newspaper = "The-Guardian"
    url = "https://www.theguardian.com/world/2024/oct/03/wildfires-are-burning-through-humanitys-carbon-budget-study-shows"
    
    save_session(newspaper, url)
