import bs4


def remove_duplicates(lst):
    """
    Removes duplicates from a list while preserving the original order.

    Args:
        lst (list): The list from which to remove duplicates.

    Returns:
        list: A new list without duplicates.
    """
    seen = set()
    new_list = []
    for element in lst:
        if element not in seen:
            seen.add(element)
            new_list.append(element)
    return new_list


def extract(html_content, parsed_attr):

    page = bs4.BeautifulSoup(html_content, "lxml")
    
    #dictionary to store attributes
    atrr_dict = {: None}
    atrr_dict = dict.fromkeys(parsed_attr)
    
    if "text" in parsed_attr:
    
        paragraphs_html = page.findAll("p",{'class':'responsive__Paragraph-sc-1pktst5-0 gaEeqC'})
        text = []
        for paragraph in paragraphs_html:
            if paragraph:
                text.append(paragraph.text.strip())
        if len(text) > 0: atrr_dict["text"] =  text
                
    if "image" in parsed_attr:
    
        div_article=page.find('div',{'class':"responsive__ArticleWrapper-sc-15gvuj2-7 fPnGaB"})
        div_head=page.find('div',{'class':"tc-view__TcView-nuazoi-0 responsive__HeaderContainer-sc-15gvuj2-2 hUvwaq"})
        image_html = div_article.findAll("img")
        image_html.append(div_head.find('img'))
        image_caption = []
        for image in image_html:
            if image:
                image_caption.append([image.get('alt'),image.get('src')])
        if len(image_caption) > 0: atrr_dict["image"] =  image_caption
    
    if "author" in parsed_attr:
    
        author_html = page.findAll("a",{'class':"tc-text-link__TcTextLink-sc-1voa8bp-0 text-link__LinkTextObj-xyehx2-0 vSslN"})
        authors = []
        if author_html !=[]:
            for author in author_html:
                if author:
                    authors.append(author.text)
            authors=remove_duplicates(authors)
        if len(authors) > 0: atrr_dict["authors"] =  authors
        
            
    if "date" in parsed_attr:

        data_div=page.find('div', {'class':'tc-view__TcView-nuazoi-0 fPjBcr'})
        date_html = page.find("time")
        date = None
    
        if date_html:
            date = date_html.get('datetime')
            
    return 
