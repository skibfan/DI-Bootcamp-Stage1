import random

number = input("Give me your number between 1 and 100: ")

def my_randomizer(number):
    try:
        number = int(number)
        if number > 0 and number < 101:
            r_number = random.randint(1, 100)
            if number == r_number:
                print("Success!")
            else: 
                print(f"Better luck next time!\nThe numbers were:\n{number} - your number\n{r_number} - my number")
        else:
            print("Give me a valid number between 1 and 100")
    except ValueError:
        print("Give me a valid number between 1 and 100")

my_randomizer(number)