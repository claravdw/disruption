import sys
import os
import pandas as pd
sys.path.append(os.path.join(os.path.dirname(__file__), 'data_structuring'))
import data_structuring as ds

"""
This is a quality control script that, after scraping, checks whether the urls retrieved from Google
ended up as parsed urls (where content was retrieved and keywords found in the body), dropped urls, or neither
"""

def main(url_folder, url_files, parsed_folder, output_file):

        #get results for each month
        month_dfs = []
        for url_file in url_files[-24:]: #only check the past two years
        
            #get relative path to file for storing parsed and "dropped" urls (e.g. keywords not present)
            parsed_file = "%s/%s" % (parsed_folder, url_file.replace("urls", "parsed").replace(".csv", ".json"))
            dropped_file = "%s/%s" % (parsed_folder, url_file.replace("urls", "dropped").replace(".csv", ".json"))
        
            #also turn url_file into relative path
            url_path = "%s/%s" % (url_folder, url_file)
            
            #read url list
            urls_list = ds.from_csv_to_list(url_path, name_column="url")
            n_urls = len(urls_list)
            #print(f"{url_file} contains {n_urls} urls")
            
            #check if urls are present in parsed or dropped content files
            if n_urls != 0:

                #read JSON files
                parsed_data = ds.from_file_to_dict(parsed_file)
                dropped_data = ds.from_file_to_dict(dropped_file)

                #make dataframe
                df = pd.DataFrame({
                     "url": urls_list,
                     "parsed": [url in parsed_data for url in urls_list],
                     "dropped": [url in dropped_data for url in urls_list]
                     })
                df["neither"] = ~(df["parsed"] | df["dropped"])  # True if neither parsed nor dropped
                month_dfs.append(df)
            
                pct_neither = round(df["neither"].mean()*100, 0)
                print(f"of which {pct_neither} pct. are neither parsed nor dropped")

        #Write to file
        newspaper_df = pd.concat(month_dfs)
        newspaper_df.to_csv(output_file, index=False)   
        
#note: it is normal for this check not to work for Telegraph, because its parsed contents
#are not organized by month in the same way that its urls are (but rather sorted afterwards by article
#date).

if __name__ == '__main__':

    #names of the newspapers; must match folder names in google_scaping/article_urls folder,
    #and article_contents folder
    newspapers = ["BBC",
                  "The-Guardian",
                  "Daily-Mail",
                  "Sky", 
                  "Metro",
                  "Sun",
                  "Telegraph",
                  "The-Times",
                  "Mirror",
                  "ITV"
                  ]
                  
    #set output directory name and create it
    output_dir = "article_presence_results"
    os.makedirs(output_dir, exist_ok=True)

    for newspaper in newspapers:
    
        print("checking article presence for", newspaper)

        #get relative paths of the files containing the URLs for this paper
        url_folder = f"../../google_scraping/article_urls/{newspaper}"
        url_files = sorted(os.listdir(url_folder))
    
        #set folder names where parsed contents are written to for this paper
        parsed_folder = f"../article_contents/{newspaper}"
        
        #set newspaper output file name
        output_file = os.path.join(output_dir, f"{newspaper}_article_presence.csv")
        
        #check google-scraped url presence in parsed and dropped url files across months
        main(url_folder, url_files, parsed_folder, output_file)

