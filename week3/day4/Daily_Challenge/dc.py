import psycopg2
import requests
import json
from dotenv import load_dotenv
import os

load_dotenv()

DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

# DB CONNECTION
connection = psycopg2.connect(database = DB_NAME,
                              user = DB_USER,
                              password = DB_PASSWORD,
                              host = DB_HOST,
                              port = DB_PORT)

cursor = connection.cursor()

#API CONNECTION

countries_api = requests.get('https://restcountries.com/v3.1/all')

data = countries_api.json()

for i in range(10):
    name = data[i]['name']['common']
    capital = data[i]['capital'][0].replace('\'','`')
    flag = data[i]['flag']
    region = data[i]['region']
    population = data[i]['population']


    query = f'''INSERT INTO random_countries 
    (name, capital,flag_code, subregion, population) 
    VALUES ('{name}', '{capital}', '{flag}', '{region}','{population}')'''

    cursor.execute(query)
    connection.commit()
