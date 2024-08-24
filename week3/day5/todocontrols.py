import psycopg2
from dotenv import load_dotenv
import os


class TodoControls():
    def __init__(self):
        pass


    @staticmethod
    def showToDoItem(note):
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
        query = f'''SELECT * FROM to_do_list
        WHERE note ILIKE '{note}%'
        '''
        cursor.execute(query)
        result = cursor.fetchone() 
        return result

    @staticmethod
    def showList():
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
        query = f'''SELECT * FROM to_do_list'''
        cursor.execute(query)
        result = cursor.fetchall() 
        return result





# print(TodoControls.showToDoItem('Wow, does it wo'))
# print(TodoControls.showList())
