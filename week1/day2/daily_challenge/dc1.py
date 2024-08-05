
number = int(input("Your number, please: "))
length = int(input("Your length, please: "))

list_of_multiples = []

for i in range(length):
    list_of_multiples.append(number * (i + 1))

print(list_of_multiples)