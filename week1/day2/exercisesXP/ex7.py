your_fruits = input("What fruits you like? please, separate them with space here: ")

fruit_list = your_fruits.split(" ")

test_yourself = input("choose any fruit to eat right now: ")

if test_yourself in fruit_list: 
    print("You chose one of your favorite fruits! Enjoy!")
else: 
    print("You chose a new fruit. I hope you enjoy")




