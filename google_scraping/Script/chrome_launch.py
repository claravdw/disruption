

from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import chromedriver_autoinstaller


def chrome_launch():
    # Installer automatiquement le ChromeDriver
    chromedriver_autoinstaller.install()

    # Obtenir le chemin du ChromeDriver à l'aide de ChromeDriverManager
    chrome_driver_path = ChromeDriverManager().install()

    # Créer un objet Service avec le chemin du ChromeDriver
    service = Service(executable_path=chrome_driver_path)

    chrome_options = webdriver.ChromeOptions()
    #chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument('--verbose')
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")

    browser = webdriver.Chrome() 
    return browser