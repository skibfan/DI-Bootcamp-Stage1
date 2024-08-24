import psycopg2
from dotenv import load_dotenv
import os

class TodoList():
    dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
    load_dotenv(dotenv_path)
    DB_HOST = os.getenv('DB_HOST')
    DB_NAME = os.getenv('DB_NAME')
    DB_USER = os.getenv('DB_USER')
    DB_PASSWORD = os.getenv('DB_PASSWORD')
    DB_PORT = os.getenv('DB_PORT')


    def __init__(self, note, is_important=False):
        self.note = note
        self.is_important = is_important

    def save(self):
        connection = psycopg2.connect(dbname=self.DB_NAME, 
                              user=self.DB_USER,
                              password=self.DB_PASSWORD,
                              host=self.DB_HOST, 
                              port=self.DB_PORT)

        cursor = connection.cursor()
        query = f'''INSERT INTO to_do_list 
        (note, is_important) 
        VALUES ('{self.note}', '{self.is_important}')'''
        cursor.execute(query)
        connection.commit()

    def is_done(self, is_done=True):
        connection = psycopg2.connect(dbname=self.DB_NAME, 
                              user=self.DB_USER,
                              password=self.DB_PASSWORD,
                              host=self.DB_HOST, 
                              port=self.DB_PORT)

        cursor = connection.cursor()
        query = f'''UPDATE to_do_list
                SET is_done='{is_done}'
                WHERE note = '{self.note}'
                '''
        cursor.execute(query)
        connection.commit()

    def toggle_is_important(self, new_importance=True):
        
        connection = psycopg2.connect(dbname=self.DB_NAME, 
                              user=self.DB_USER,
                              password=self.DB_PASSWORD,
                              host=self.DB_HOST, 
                              port=self.DB_PORT)

        cursor = connection.cursor()
        query = f'''UPDATE to_do_list
                SET is_important='{new_importance}'
                WHERE note ILIKE '{self.note}%'
                '''
        cursor.execute(query)
        connection.commit()

    def delete(self):
        connection = psycopg2.connect(dbname=self.DB_NAME, 
                              user=self.DB_USER,
                              password=self.DB_PASSWORD,
                              host=self.DB_HOST, 
                              port=self.DB_PORT)

        cursor = connection.cursor()
        query = f'''DELETE FROM todo_list 
        where item_name ILIKE '{self.note}%'
        '''
        cursor.execute(query)
        connection.commit()



# q = TodoList('Wow, does it work? Truly wow Lets try')
# # q.is_important = True
# q.save()
# q.is_done()

s = TodoList('Wow, does it work? Truly wow Lets')
s.toggle_is_important()