from datetime import datetime

your_birthday = datetime(1993, 7, 14)

your_minutes = (datetime.now() - your_birthday).seconds // 60 + (datetime.now() - your_birthday).days * 24 * 60


print(f"You are wondering in this world for: {your_minutes} minutes.")