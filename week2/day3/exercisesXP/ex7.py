from faker import Faker

users = []

def fake_append(users):
    fake = Faker()
    new_user = {"name": fake.name(), "address": fake.address(), "langage_code": fake.language_code()}
    users.append(new_user)

fake_append(users)

for user in users:
    for keys, values in user.items():
        print(keys, values)