from datetime import datetime
from dateutil.relativedelta import relativedelta

def make_query(url, query_list, start_date, end_date):
    """This function creates a url that queries Google for results with a search term query plus site and date filter"""

    base_url = 'https://www.google.com/search?q='
    date_filter = f'site:{url}+after:{start_date}+before:{end_date}'
    
    query_str = ''
    for i, query in enumerate(query_list):
        if ' ' in query:
            query = f'{query.replace(" ", "+")}'
        if i > 0:
            query_str += '+OR+'
        query_str += f'"{query}"'
    
    final_query = base_url + date_filter + '+' + query_str + '&hl={en}'
    return final_query

def add_time(start_date, months=0, days=0):
    """This function adds some months and/or days to a date string and returns it as a string.
    Negative values for the months and/or days will subtract time instead."""

    current_date = datetime.strptime(start_date, '%Y-%m-%d')
    current_date += relativedelta(months=months, days=days)
    return current_date.strftime('%Y-%m-%d')

def months_difference(start_date, end_date):

    start = datetime.strptime(start_date, '%Y-%m-%d')
    end = datetime.strptime(end_date, '%Y-%m-%d')
    delta = relativedelta(end, start)
    total_months = delta.years * 12 + delta.months
    return total_months

