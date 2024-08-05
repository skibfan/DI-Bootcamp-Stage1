

toppings = []
temp = input("Let's start! Add something on your pizza: ")
final_toppings = ""
counter = 0

while temp != "quit": 
    toppings.append(temp)
    print(f"Great! We will add {temp} on your pizza!")
    temp = input("Add more on your pizza: ")

for el in toppings: 
    if counter < len(toppings) - 1:
        final_toppings += el+", "
    else:
        final_toppings += "and " + el + "!"
    counter += 1
        


print("\nYou added this to your pizza:\n{}\n And total price of your pizza is:\n{}".format(final_toppings, len(toppings) * 2.5 + 10))
