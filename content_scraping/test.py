import requests
import json
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), 'Scraping_articles'))
sys.path.append(os.path.join(os.path.dirname(__file__), 'Scraping_articles','Data_structuring'))

import scraping_general_function as scrap
import data_structuring as ds


"""
img_urls=["https://i.guim.co.uk/img/media/4b6c1a7f3d12b7c71c90ba44ff6366d4e687665f/0_417_5396_3238/master/5396.jpg?width=500&dpr=1&s=none",
          "https://i.guim.co.uk/img/media/4b6c1a7f3d12b7c71c90ba44ff6366d4e687665f/0_417_5396_3238/master/5396.jpg?width=465&dpr=1&s=none"]

for img_url in img_urls:

    s = requests.Session()

    print("getting image at", img_url)
    response = s.get(img_url)
    print(response.status_code)
    print(response.headers['content-type'])

"""

newspaper = "The-Guardian"
test_parsed_dict = "article_contents/The-Guardian/theguardian.com_2020-09-01_2020-09-30_parsed.json"
parsed_file = "test_parsed_dict.json" #where to output the updated dict
image_folder = "test"

with open(test_parsed_dict, 'r', encoding="utf-8") as json_file:
    parsed_content_dict = json.load(json_file)

    
#go over the articles; keys are their urls
for url, parsed_content in parsed_content_dict.items():
    
        print(f"downloading images for article {url}")
    
        s = requests.Session() #start_session(newspaper, url)
    
        try:
        
            #get list of article's images, each one is a dict
            image_dicts = parsed_content["image"]
            if image_dicts:
                for i in range(len(image_dicts)):
          
                    image_dict = image_dicts[i]
            
                    #create local file name (without extension)
                    img_file_name = f"{parsed_content['id']}_img{i+1}"
                    
                    #get url
                    img_url = image_dict["url"]
                    
                    #drop parameters--except if Guardian, it needs parameters not to give 401
                    if newspaper != "The-Guardian":
                        img_url = img_url.split('?')[0]

                    #download the image file and get full name (with extension)
                    print(img_url)
                    print("getting image at", img_url)
                    response = s.get(img_url)
                    print(response.status_code)
                    print(response.headers['content-type'])
                    ds.download_file(img_url, img_file_name, image_folder, s, redo=True)
                    
        except Exception as e:
            print(f"Could not get images from article {url} due to {e}")


        #break #for debugging


