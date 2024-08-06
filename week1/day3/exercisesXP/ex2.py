family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family_dictionary = {}
final_price = 0

family_string = input("Who are your family members: ")
age = int(input("his age, please: "))
family_dictionary[family_string] = age

while input("More people? (say \"n\" to stop)") != "n": 
    family_string = input("Who are your family members: ")
    age = int(input("his age, please: "))
    family_dictionary[family_string] = age


for k, v in family_dictionary.items(): 
    if v > 3 and v < 12:
        final_price += 10
    elif v > 12:
        final_price += 15


print(f"Final price for your family is {final_price}$")