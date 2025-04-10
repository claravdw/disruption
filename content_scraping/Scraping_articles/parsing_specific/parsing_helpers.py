from bs4 import BeautifulSoup
import re
from urllib.parse import urlparse, parse_qs
import os 
import logging

#dictionary of image format preferences
img_format_pref  = {
    ".jpg": 1,
    ".jpeg": 1,
    ".png": 2,
    ".webp": 3
}

logging.basicConfig(filename="scraping.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

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
    
    
def get_best_src_fromfig(figure_tag):
    """
    Function to extract the best src from a figure tag (parsed 
    by BeautifulSoup), if there is a list of source tags.
    Criteria are: as large as possible, then prioritizing image
    format.
    """

    # Extract <source> elements
    source_tags = figure_tag.find_all("source")
    source_dicts = []
    
    for source in source_tags:
    
        media = source.get("media", "")
        srcset = source.get("srcset", "")
        
        # Extract the min-width value if present
        match_min = re.search(r"min-width:\s*(\d+)px", media)
        min_width = int(match_min.group(1)) if match_min else 0 
        # Default to 0 if no max-width
        
        # Extract the max-width value if present
        match_max = re.search(r"max-width:\s*(\d+)px", media)
        max_width = int(match_max.group(1)) if match_max else float("inf") 
        # Default to infinite if no max-width
        
        # Extract the file extension from url if possible
        parsed_url = urlparse(srcset)
        
        # from fm parameter
        query_params = parse_qs(parsed_url.query)
        extension = query_params.get('fm', [None])[0]
        extension = f".{extension}"
        
        # otherwise from url path
        if not extension: 
            url_path = parsed_url.path
            extension = os.path.splitext(url_path)[1]
            
        # Convert extension to format preference ranking
        preference = img_format_pref.get(extension, 5)
        
        # Dictionary with min_width, max_width, preference, and src
        source_dict = {"min_width": min_width,
                       "max_width": max_width,
                       "extension": extension,
                       "preference": preference,
                       "src": srcset}

        # Add to list of dictionaries
        source_dicts.append(source_dict)

    #  Find the top-ranked source
    if source_dicts:
    
        # Sort by min_width, max_width (descending), and format preference
        # (ascending)
        sorted_source_dicts = sorted(
            source_dicts, 
            key=lambda x: (-x['min_width'], -x['max_width'], x['preference'])
        )
        
        #import pprint
        #pprint.pp(sorted_source_dicts)

        # Get the "src" of the top-ranked source
        top_src = sorted_source_dicts[0]['src']
    
        return top_src

    else:
        return None
    
    
def get_biggest_src_fromimg(img_tag):
    """
    Function to extract the biggest src from the scrset of an img
    tag (parsed by BeautifulSoup). Criteria are: as large of an
    inherent width as possible.
    """

    if not img_tag or not img_tag.has_attr("srcset"):
        return None
    
    srcset = img_tag["srcset"]
    sources = [entry.strip().split(" ") for entry in srcset.split(",")]
    
    # Convert to list of dictionaries with url and width
    sources = [{"url": url, "width": int(width[:-1])} for url, width in sources if width.endswith("w")]
    
    # Find the source with the maximum width
    largest_image = max(sources, key=lambda img: img["width"], default=None)
    
    if largest_image:
        return largest_image["url"] 



