import sys
import importlib
import logging
import Scraping_specific
import os

sys.path.append(os.path.join(os.path.dirname(__file__), 'Data_structuring'))
import data_structuring as ds

#set up logging
logging.basicConfig(filename="parsing.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
    

def choose_extract(News_paper):
    """
    Dynamically import a module based on the given string.

    Args:
        News_paper (str): The name of the module to import (without .py extension).

    Returns:
        module or None: The imported module, or None if the import fails.
    """
    try:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        module_path = os.path.join(current_dir, 'Scraping_specific', f"{News_paper}.py")
        
        # Check if the module file exists
        if not os.path.isfile(module_path):
            raise ModuleNotFoundError(f"Newspaper-specific scraping module {News_paper} not found at {module_path}")
        
        # Load the module from file
        spec = importlib.util.spec_from_file_location(News_paper, module_path)
        newspaper_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(newspaper_module)
        
        return newspaper_module
        
    except ModuleNotFoundError as e:
        print(f"Module {News_paper} not found: {e}")
    except Exception as e:
        print(f"Error importing module {News_paper}: {e}")
    return None

    
def format_parsed_content(parsed_content, paper_name):
    """
    Function to do formatting on the parsed content of a url.
    Arguments:
    parsed_content: a dictionary a datetime object in key date,
                    a text 
    """
          
    #turn dates into formatted strings
    try:
        parsed_content["date"] = parsed_content["date"].strftime("%Y-%m-%d")
    except Exception as e:
        logging.info(f"date to string conversion for json unsuccessful due to {e}")
              
    #join article texts with newline separator
    try:
        if isinstance(parsed_content["text"], list):
            parsed_content["text"] = "\n".join(parsed_content["text"])
    except Exception as e:
        logging.info(f"joining of paragraphs unsuccessful due to {e}")

    #add source
    parsed_content["source"] = paper_name
            
    #generate an id for the article
    titlewords = parsed_content["title"].strip().split(" ")
    #TO DO: remove special charaters and then in bash do:
    #for file in *; do mv "$file" $(echo "$file" | sed -e 's/[^A-Za-z0-9._-]/_/g'); done &
    titlestart = "-".join(titlewords[:3])
    parsed_content["id"] = "%s_%s_%s" % (paper_name, parsed_content['date'], titlestart)  
            
    return parsed_content
    

def add_issue_to_dict(parsed_content, issue_string, log_id=None):

     parsed_content["issue"] = issue_string
     logging.info(f"article dropped, {issue_string}: {log_id}")
     
     return parsed_content


def main_parse_content(paper_name, html_content_dict, parsed_file, dropped_file, parsed_attr, redo=False):
    """
    This function takes a dictionary of urls (keys) and html contents (values) and uses a custom parsing script for that newspaper
    to parse the article attributes listed in parsed_attr, such as the full text and author. If redo is set to true, we also re-parse
    already-parsed files.
    """
    
    #import the specific parsing module for this newspaper
    try:
        newspaper = choose_extract(paper_name)
    except:
        return None

    #try to get any already-parsed urls from the html content file (unless re-doing all of them)
    if redo:
        parsed_content_dict = dict()
    else:
        parsed_content_dict = ds.from_file_to_dict(parsed_file)

    if parsed_content_dict: print(f"re-using some already-parsed urls from file: {parsed_file}")
    
    #try to get set of previously-dropped urls (e.g. without keywords)
    if redo:
        dropped_content_dict = dict()
    else:
        dropped_content_dict = ds.from_file_to_dict(dropped_file)
    
    #set-up for finding search terms in article text
    conv = lambda i : i or '' # Converting None to empty string
    text_elements = ["title", "subtitle", "text"]
    searchterms = ["Extinction Rebellion", "Just Stop Oil", "Greenpeace"]
    
    #loop over the scraped urls in the html content dict
    for url, html_content in html_content_dict.items():
    
        if url not in parsed_content_dict and url not in dropped_content_dict:
    
            logging.info(f"Parsing url: {url}")
            parsed_content = newspaper.extract(html_content, parsed_attr)
            
            #format dates, text body, add source and id
            try:
                parsed_content = format_parsed_content(parsed_content, paper_name)
            except Exception as e:
                logging.info(f"could not format info from {url} due to {e}; kept unformatted")
            
            #keep only articles for which we found a title and body text
            if not parsed_content["text"]:
                dropped_content_dict[url] = add_issue_to_dict(parsed_content, "no body text found", url)
                continue
            if not parsed_content["title"]:
                dropped_content_dict[url] = add_issue_to_dict(parsed_content, "no title found", url)
                continue
            
            #keep only texts that contain XR, JSO or Greenpeace in title, subtitle or body
            alltext = [ conv(parsed_content[el]) for el in text_elements ]
            alltext = " ". join(alltext)
            if not any(term in alltext for term in searchterms):
                dropped_content_dict[url] = add_issue_to_dict(parsed_content, "search terms not present", url)
                continue
                
            parsed_content_dict[url] = parsed_content

    #write to json files
    ds.from_dict_to_file(parsed_content_dict, parsed_file)
    if dropped_content_dict: ds.from_dict_to_file(dropped_content_dict, dropped_file)
    
    return(parsed_content_dict)

        
def remove_duplicates(lst):
    """
    Removes duplicates from a list while preserving the original order. Used by the newspaper-specific scraping scripts.
    """
    seen = set()
    new_list = []
    for element in lst:
    
        #if element is a dictionary, convert it to tuples
        #before comparing/adding it to the "seen" list
        if isinstance(element, dict):
            ele_for_seen = tuple(element.items())
        else:
            ele_for_seen = element
        
        #if element not seen, append (original) element to list
        if ele_for_seen not in seen:
            seen.add(ele_for_seen)
            new_list.append(element)
            
    return new_list
    
    
