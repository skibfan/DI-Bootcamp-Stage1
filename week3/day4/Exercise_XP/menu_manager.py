import psycopg2
from dotenv import load_dotenv
import os

class MenuManager():
    def __init__(self):
        pass
    @staticmethod
    def get_by_name(name):
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
        query = f'''SELECT * FROM menu_items 
        WHERE item_name = '{name}'
        '''
        cursor.execute(query)
        result = cursor.fetchone() 
        if result:
            item_dict = {
                'id': result[0],
                'item_name': result[1],
                'item_price': result[2],
            }
            return item_dict
        else:
            return None


    @staticmethod
    def all():
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
        query = f'''SELECT * FROM menu_items'''
        cursor.execute(query)
        result = cursor.fetchall() 
       
        return result


# item2 = MenuManager.get_by_name('Veggie Burger')
# item2 = MenuManager.get_by_name('Beef Stew')
# print(item2)

# item3 = MenuManager.all()
# print(item3)
