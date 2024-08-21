import psycopg2
import requests
import json
from dotenv import load_dotenv
import os

#DB connection
dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

connection = psycopg2.connect(dbname=DB_NAME, 
                              user=DB_USER,
                              password=DB_PASSWORD,
                              host=DB_HOST, 
                              port=DB_PORT)

cursor = connection.cursor()

#API connection

# https://restcountries.com/v3.1/all

countries_api = requests.get('https://restcountries.com/v3.1/all')

data = countries_api.json()

# print(data[0])


# file_name = 'first_country.json'
# with open(file_name, 'w') as file:
#         json.dump(data[0], file, indent=2)


for i in range(10):
    name = data[i]['name']['common']
    capital = data[i]['capital'][0].replace("'", "`")
    flag = data[i]['flag']
    region = data[i]['region']
    population = data[i]['population']
    query = f'''INSERT INTO random_countries 
    (name, capital,flag_code, subregion, population) 
    VALUES ('{name}', '{capital}', '{flag}', '{region}','{population}')'''

    cursor.execute(query)
    connection.commit()
