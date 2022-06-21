import requests
import json
import os
from dotenv import load_dotenv


def getRestrauntList(lat, lng):
    load_dotenv() 
    api_key = os.environ.get("HOTPEPPER_API_KEY")
    query = {
        'key': api_key,
        'lat': float(lat),
        'lng': float(lng),
        'count': 30,  
        'format': 'json'
    }
    url_base = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/'
    responce = requests.get(url_base, query)
    result = json.loads(responce.text)['results']['shop']
    ret_list = []
    for res in result:
        ret_list.append({
            'name':res['name'],
            'access':res['access'],
            'address':res['address'],
            'lat':res['lat'],
            'lng':res['lng'],
            'logo_image':res['logo_image'],
            'photo':res['photo'],
            'open':res['open'],
            'close':res['close']
        })

    return ret_list
