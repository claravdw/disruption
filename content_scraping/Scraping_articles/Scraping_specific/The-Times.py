import bs4

def extract_text_from_html(html_content):
    page = bs4.BeautifulSoup(html_content, "lxml")
    paragraphs_html = page.findAll("p",{'class':'responsive__Paragraph-sc-1pktst5-0 gaEeqC'})

    if paragraphs_html !=[]:
        # Extract text from paragraphs
        text = []
        for paragraph in paragraphs_html:
            if paragraph != None:
                text.append(paragraph.text.strip())
    
        return(text)
    else:
        return 'None'
    
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


def extract_image_from_html(html_content):
    page = bs4.BeautifulSoup(html_content, "lxml")
    div_article=page.find('div',{'class':"responsive__ArticleWrapper-sc-15gvuj2-7 fPnGaB"})
    div_head=page.find('div',{'class':"tc-view__TcView-nuazoi-0 responsive__HeaderContainer-sc-15gvuj2-2 hUvwaq"})
    image_html = div_article.findAll("img")
    image_html.append(div_head.find('img'))
    if image_html !=[]:
        image_caption=[]
        for image in image_html:
            if image !=None:
                image_caption.append([image.get('alt'),image.get('src')])
        return image_caption
    else:
        return 'None'

def extract_author_from_html(html_content):
    page = bs4.BeautifulSoup(html_content, "lxml")
    author_html = page.findAll("a",{'class':"tc-text-link__TcTextLink-sc-1voa8bp-0 text-link__LinkTextObj-xyehx2-0 vSslN"})
    # Extract text from paragraphs
    if author_html !=[]:
        authors=[]
        for author in author_html:
            if author != None:
                authors.append(author.text)
        authors=remove_duplicates(authors)
        return(authors)
    else:
        return 'None'

def extract_date_from_html(html_content):
    page = bs4.BeautifulSoup(html_content, "lxml")
    data_div=page.find('div', {'class':'tc-view__TcView-nuazoi-0 fPjBcr'})
    date_html = page.find("time")
    
    if date_html !=None:
        return date_html.get('datetime')
    else:
        return "None"