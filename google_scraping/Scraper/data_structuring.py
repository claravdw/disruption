import pandas as pd
def list_of_url_to_csv(urls, newspaper, search_name, start_date, month_end, folder):
    data={'url':urls}
    df=pd.DataFrame(data)
    df.to_csv(f'{folder}/{newspaper}_{search_name}_{start_date}_{month_end}_urls.csv', index=False)
