import requests
from bs4 import BeautifulSoup
import json
import re
import sys

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

def write_to_json(name, data):
    with open(name, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

def format_price(price):
    return float(re.findall('[0-9]+[.]+[0-9]+', re.sub(',', '.', price))[0])

grico = {}
knauf = {}
atribud = {}


def get_info_from_grico(site="https://grico.com.ua", tag="div", otype="sub_pages", count=0,
                        url="https://grico.com.ua/shop/"):
    print('running get_info_from_grico')
                        
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    quotes = soup.find_all(tag, otype=otype)
    if len(quotes) > 0:
        for quote in quotes:
            count += 1
            menu = quote.find_all('a')
            for el_menu in menu:
                url = site + el_menu.attrs["href"]
                get_info_from_grico(url=url, tag="div", otype="sub_pages", count=count)
    else:
        quotes = soup.find_all('ul', id='shop_goods')
        for quote in quotes:
            goods = quote.find_all('li', class_='')
            for good in goods:
                name = good.find_all('a', class_='good_name')
                price = good.find_all('p', class_='')
                currency = good.find_all('b')
                grico.setdefault(name[0].text.strip(), float(re.sub('\s','', price[0].text)))
        
    write_to_json('grico.json', grico)


def get_info_from_knauf(url='https://knauf.org.ua/products-page/', tag='li', class_='menu-item'):
    print('running get_info_from_knauf')

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    quotes = soup.find_all(tag, class_=class_)
    i=0
    if len(quotes) > 0:
        for quote in quotes:
            menu = quote.find_all('a')
            for el_menu in menu:
                # print(el_menu.attrs["href"])
                products_response = requests.get(el_menu.attrs["href"], headers=headers)
                products_soup = BeautifulSoup(products_response.text, 'html.parser')
                products_quotes = products_soup.find_all('div', class_='product_grid_item_knauf')
                for product in products_quotes:
                    name = product.find_all('h2', class_='prodtitle')
                    price = product.find_all('span', class_='currentprice')
                    #print(name[0].text)
                    print(price[0].text)
                    knauf.setdefault(name[0].text.strip(), format_price(price[0].text))
                    """if name[0].text not in knauf:
                        knauf.setdefault(name[0].text, price[0].text)
                    else:
                        description = product.find_all('div', class_='grid_description')
                        knauf.setdefault(name[0].text + "(" + description[0].text + ")", price[0].text)
                        """
            
    write_to_json('knauf.json', knauf)

def get_from_atribud(url='https://atribud.net/', tag='ul', class_='cat-tree'):
    print('running get_from_atribud')
    response = requests.get(url, headers=headers, verify=False)
    
    soup = BeautifulSoup(response.text, 'html.parser')
    quotes = soup.find_all(tag, class_=class_)
    catalog = quotes[0].find_all('ul', class_='level1 groupmenu-drop')
    catalog.append(quotes[0].find_all('li', class_='item level1 nav-9')[0])
    elements = []
    products_quotes  = []

    for item in catalog:
        elements += item.find_all('a', class_="menu-link")

    for element in elements:
        products_response = requests.get(element.attrs["href"], headers=headers, verify=False)
        products_soup = BeautifulSoup(products_response.text, 'html.parser')
        products_quotes += products_soup.find_all('div', class_='product-item-details')

    for product in products_quotes:
        name = product.find_all('h2', class_='product-name')
        price = product.find_all('span', class_='price')
        atribud.setdefault(name[0].text.strip(), format_price(price[0].text))

    write_to_json('atribud.json', atribud)
    
    




if sys.argv[1] == 'atribud':
    get_from_atribud()
elif sys.argv[1] == 'knauf':
    get_info_from_knauf()
elif sys.argv[1] == 'test':
    print('this is testing')
elif sys.argv[1] == 'grico':
    get_info_from_grico()
elif sys.argv[1] == 'all':
    get_info_from_knauf()
    get_from_atribud()
    get_info_from_grico()

