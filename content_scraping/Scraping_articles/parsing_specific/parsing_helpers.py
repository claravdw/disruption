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
    
    from pprint import pprint
    
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


#strings present in non-photo alt texts on Times
badcaps_Times = ["The Times & The Sunday Times"]
badcaps_Times = [x.lower() for x in badcaps_Times]

#strings present in non-photo alt texts on BBC
badcaps_BBC = ["presentational grey line", "white line", "bbc bbc", "Around the BBC iPlayer footer", "green line",
"Around the BBC iPlayer banner", "Around the BBC footer - Sounds", "More on climate summit top strapline", "line", "YQA logo", "Around the BBC - Sounds", "HM Queen Elizabeth II 640x55", "HM Queen Elizabeth II black line", "Banner Image Reading Around the BBC - Blue", "Banner saying 'Get in touch'","More on Climate Change bottom strapline", "BBC 1px transparent line", "Watch on iPlayer banner", "Watch on iPlayer footer", "News Daily banner", "Across the BBC banner", "Across the BBC footer", "Newsbeat logo", "Red line", "Shadow line", "Promotional image to sign up for the Future Earth newsletter, for the latest climate and environment news, with photograph of a polar bear swimming", "iplayer banner", "Green banner promoting sign up to Future Earth newsletter", "&ldquo;The", "1px transparent line"]
badcaps_BBC = [x.lower() for x in badcaps_BBC]

badphrases_BBC = ["banner", "line", "strapline", "footer", "top", "bottom", "1px", "pixels", "more from"]
badphrases_BBC = [x.lower() for x in badphrases_BBC]
                   
#names of non-photo image links on BBC
badsrc_BBC = ["https://ichef.bbci.co.uk/news/480/cpsprodpb/1FCD/production/_105914180_line976-nc.png.webp",
"/bbcx/grey-placeholder.png", "https://ichef.bbci.co.uk/ace/standard/1920/cpsprodpb/86E1/production/_112292543_aroundthebbc-iplayerfulllogo-nc.png", "https://ichef.bbci.co.uk/ace/standard/1920/cpsprodpb/ADF1/production/_112292544_iplayerpinkfooter-nc.png", "https://ichef.bbci.co.uk/news/480/cpsprodpb/A11C/production/_112244214_soundsfooter-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/163F9/production/_120892119_summit_top-3x-002.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/1541D/production/_106396078_298260dd-8c4c-43d7-af3c-8533936fd910.jpg.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/1541D/production/_106396078_298260dd-8c4c-43d7-af3c-8533936fd910.jpg.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/8421/production/_109552833_yqa_banner_2_640-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/7A0C/production/_112244213_soundsheaderv1-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/0F22/production/_126647830_obit_queen_cps_strap_640x55_2x-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/136D6/production/_126647597_obit_queen_cps_strap_640x10_2x-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/C82C/production/_112244215_aroundthebbc-bluebanner-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/1739F/production/_113753159_yqa_get_in_touch_top_no_yqa_text_640-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/1541D/production/_106396078_298260dd-8c4c-43d7-af3c-8533936fd910.jpg.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/155C6/production/_120449478_bottom-3x.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/4BEB/production/_112953491__108802839_624_transparent-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/109DD/production/_127816086_iplayer_header_grey_8-1x.jpg.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/E2CD/production/_127816085_iplayer_footer-1920x38-1x.jpg.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/804D/production/_130154823_newsdailybox.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/11C8D/production/_130154827_newsdailybox2.png.webp", "https://ichef.bbci.co.uk/ace/standard/1920/cpsprodpb/94AD/production/_127816083_bbc_header_grey_8-1x-1.jpg", "https://ichef.bbci.co.uk/ace/standard/1920/cpsprodpb/BBBD/production/_127816084_bbc_footer-1920x38-1x-1.jpg", "https://ichef.bbci.co.uk/news/480/cpsprodpb/179B9/production/_106279669_fb1c6c40-2f65-4fc3-9432-c4967c0d59c7.jpg.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/E21D/production/_127058875_newsbeat2022websitefooter.jpg.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/1739F/production/_113753159_yqa_get_in_touch_top_no_yqa_text_640-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/7201/live/46aed4c0-e1e4-11ee-9410-0f893255c2a0.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/b340/live/72216b90-e1e4-11ee-9410-0f893255c2a0.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/E587/production/_133295785_5a030d51-8dc1-4969-b3d4-30c042fcc91e.jpg.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/1ed7/live/60b77a30-2c8e-11ef-90be-b75b34b0bbb2.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/6cd3/live/1a8bfd30-2fb6-11ef-bdc5-41d7421c2adf.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/ac45/live/e2a87970-2ef2-11ef-90be-b75b34b0bbb2.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/a9a0/live/7e53cf80-65e6-11ef-b970-9f202720b57a.png.webp", "https://ichef.bbci.co.uk/images/ic/480xn/p0fndshs.jpg.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/4BEB/production/_112953491__108802839_624_transparent-nc.png.webp", "https://ichef.bbci.co.uk/news/480/cpsprodpb/4BEB/production/_112953491__108802839_624_transparent-nc.png.webp", "https://static.files.bbci.co.uk/bbcdotcom/web/20250409-091508-0ef9b7676-web-2.19.1-12/grey-placeholder.png"]
