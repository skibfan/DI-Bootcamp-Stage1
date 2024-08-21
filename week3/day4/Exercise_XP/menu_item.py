import psycopg2
from dotenv import load_dotenv
import os

class MenuItem():
    dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
    load_dotenv(dotenv_path)
    DB_HOST = os.getenv('DB_HOST')
    DB_NAME = os.getenv('DB_NAME')
    DB_USER = os.getenv('DB_USER')
    DB_PASSWORD = os.getenv('DB_PASSWORD')
    DB_PORT = os.getenv('DB_PORT')
    def __init__(self, name, price=0):
        self.name = name
        self.price = price

    def save(self):
        connection = psycopg2.connect(dbname=self.DB_NAME, 
                              user=self.DB_USER,
                              password=self.DB_PASSWORD,
                              host=self.DB_HOST, 
                              port=self.DB_PORT)

        cursor = connection.cursor()
        query = f'''INSERT INTO menu_items 
        (item_name, item_price) 
        VALUES ('{self.name}', '{self.price}')'''
        cursor.execute(query)
        connection.commit()
    def delete(self):
        connection = psycopg2.connect(dbname=self.DB_NAME, 
                              user=self.DB_USER,
                              password=self.DB_PASSWORD,
                              host=self.DB_HOST, 
                              port=self.DB_PORT)

        cursor = connection.cursor()
        query = f'''DELETE FROM menu_items 
        where item_name = '{self.name}'
        '''
        cursor.execute(query)
        connection.commit()
    def update(self, new_name, new_price=None):
        if new_price is None:
            new_price = self.price 
        connection = psycopg2.connect(dbname=self.DB_NAME, 
                            user=self.DB_USER,
                            password=self.DB_PASSWORD,
                            host=self.DB_HOST, 
                            port=self.DB_PORT)

        cursor = connection.cursor()
        query = f'''UPDATE menu_items 
                SET item_name = '{new_name}', item_price = '{new_price}'
                WHERE item_name = '{self.name}'
                '''
        cursor.execute(query)
        connection.commit()


#DB connection

item = MenuItem('Burger')
# item.save()
item.delete()
# item.update('Veggie Burger', 37)
# i = MenuItem('Veggie Burger', 37)
# i.save()
# i = MenuItem('Craggie Burger', 37)
# i.save()
# i.delete()

