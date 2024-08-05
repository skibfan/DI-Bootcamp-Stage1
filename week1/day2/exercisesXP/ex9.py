

family_counter = int(input("Hello there! I see that you are a family! What is the size of your family? : "))
family_age = 0
family_price = 0
temp_counter = 0
teen_counter = 0

while temp_counter != family_counter : 
    family_age = int(input("State your {temp_counter} member's age: "))
    if family_age > 3 and family_age <= 12:
        family_price += 10
    elif family_age > 12:
        family_price += 15

    temp_counter += 1

teenage_names = input("Oh, I see a bunch of teenagers here! State your names, please: ")
tenage_list = teenage_names.split(" ")

teenage_age = []

for i in tenage_list:
    teenage_age.append(int(input(f"What is the age of {i}?: ")))

for i in range(len(tenage_list)):
    if teenage_age[i] > 16 and teenage_age[i] < 21:
        tenage_list.pop(i - teen_counter)
        teen_counter+=1

print(family_price)

print(tenage_list)
