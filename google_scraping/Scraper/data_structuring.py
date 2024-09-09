import pandas as pd
def list_of_url_to_csv(urls, newspaper, folder):
    data={'url':urls}
    df=pd.DataFrame(data)
    df.to_csv(f'{folder}/{newspaper}_urls.csv', index=False)
