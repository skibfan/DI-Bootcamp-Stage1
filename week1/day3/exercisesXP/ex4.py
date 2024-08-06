users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {}
disney_users_B = {}
disney_users_C = {}


# 1 
counter = 0
for i in range(len(users)):
  disney_users_A[users[i]] = counter
  counter += 1

print(disney_users_A)

#2
counter = 0
for i in range(len(users)):
  disney_users_B[counter] = users[i]
  counter += 1

print(disney_users_B)


# 3
counter = 0
users.sort()
for i in range(len(users)):
  disney_users_C[users[i]] = counter
  counter += 1

print(disney_users_C)

# 4
disney_users_A = {}
counter = 0
for i in range(len(users)):
  if "i" in users[i] and users[i][0] == "M" or users[i][0] == "P":
    disney_users_A[users[i]] = counter
    counter += 1

print(disney_users_A)