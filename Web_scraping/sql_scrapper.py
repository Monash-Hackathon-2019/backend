import numpy as np
import pandas as od
import requests #for getting webpage content
from bs4 import BeautifulSoup as bs
import matplotlib.pyplot as plt
import matplotlib.style as style
from matplotlib import pyplot as mp # For Saving plots as images

style.use('fivethirtyeight') # matplotlib Style

response = requests.get('https://stackoverflow.com/tags')

print(response.status_code)

soup = bs(response.content, 'html.parser')
body = soup.find('body')
print(type(body))

lang_tags = body.find_all('a', class_='post-tag')
#lang_tags[:2]

languages = [i.text for i in lang_tags]
#print(languages[:])

tag_counts = body.find_all('span', class_='item-multiplier-count')
#print(tag_counts[:2])

no_of_tags = [int(i.text) for i in tag_counts]

temp = np.chararray((len(languages), 2),  itemsize=10)
temp[:,0] = languages
temp[:,1] = no_of_tags

temp.sort(axis=1)

print(temp)
