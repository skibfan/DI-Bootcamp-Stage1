users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {}
disney_users_B = {}
disney_users_C = {}


# 1 
counter = 0
for i in range(len(users)):
  disney_users_A[users[i]] = counter
  counter += 1

print(disney_us