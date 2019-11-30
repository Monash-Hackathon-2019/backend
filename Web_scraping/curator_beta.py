import numpy as np
from urllib.request import urlopen, Request
from bs4 import BeautifulSoup as bs

try:
	from googlesearch import search
except ImportError:
	print("No module named 'google' found")

# to search
query = "can i have one stylesheet css"

urls = [j for j in search(query, tld="co.in", num=10, stop=5, pause=0)]

webpage_dictionary = {}

for url in urls:
    print(url)

    user_agent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46'

    html = urlopen(Request(str(url), data=None, headers={'User-Agent': user_agent}))
    soup = bs(html, 'lxml')
    title = soup.title
    print(title)
    webpage_dictionary["title"] = title
    answers = soup.find_all('p')
    webpage_dictionary["title"]["answers"] = answers
    print(answers)

#print(webpage_dictionary)
