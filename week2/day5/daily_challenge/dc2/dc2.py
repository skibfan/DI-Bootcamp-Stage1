import requests
from datetime import datetime

url = "http://api.open-notify.org/iss-now.json"
g_url = "https://www.google.com/"
ynet_url = "https://www.ynet.co.il/home/"

def get_time_of_request(url):
    start = datetime.now()
    requests.get(url)
    end = datetime.now()
    result = end - start
    return result




print(f"open-notify load time: {get_time_of_request(url)}")
print(f"google load time: {get_time_of_request(g_url)}")
print(f"ynet load time: {get_time_of_request(ynet_url)}")
