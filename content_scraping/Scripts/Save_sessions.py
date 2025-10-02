
from seleniumwire import webdriver
import requests
import pickle
import time

# define the request interceptor to configure custom headers for selenium webdriver
def interceptor(request):

    # add the missing headers
    request.headers["Accept-Language"] = "en-US,en;q=0.9"
    request.headers["Referer"] = "https://www.google.com/"

    # delete the existing misconfigured default headers values
    del request.headers["User-Agent"]
    del request.headers["Sec-Ch-Ua"]
    del request.headers["Sec-Fetch-Site"]
    del request.headers["Accept-Encoding"]
    
    # replace the deleted headers with edited values
    request.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    request.headers["Sec-Ch-Ua"] = "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\""
    request.headers["Sec-Fetch-Site"] = "cross-site"
    request.headers["Accept-Encoding"] = "gzip, deflate, br, zstd"

#set up options for scraping with Chrome webdriver
#options = webdriver.ChromeOptions()
#options.add_argument('--ignore-certificate-errors')
#options.add_argument('--incognito')
#options.add_argument('--headless=new')


def save_session(News_paper,logging_url):
    """This function lets you login on a browser """
    
    #launch the browser with the right headings
    browser = webdriver.Chrome() #options=options
    browser.request_interceptor = interceptor
    
    #navigate to the url
    #browser.implicitly_wait(10) #trying to make the browser wait for the login
    browser.get(logging_url)
    time.sleep(60) #trying to make the browser wait for the login
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

    newspaper = "Telegraph"
    url = "https://telegraph.co.uk"
    
    save_session(newspaper, url)
