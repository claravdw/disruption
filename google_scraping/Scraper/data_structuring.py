import pandas as pd
import os
def list_of_url_to_csv(urls, newspaper, search_name, start_date, month_end, folder):

    #clean newspaper url of forward slashes
    newspaper = newspaper.replace("/", "-")

    #structure data
    data = {'url':urls}
    df = pd.DataFrame(data)
    
    #create folder if it does not exist yet
    if not os.path.exists(folder):
        os.makedirs(folder)
    
    df.to_csv(f'{folder}/{newspaper}_{search_name}_{start_date}_{month_end}_urls.csv', index=False)
