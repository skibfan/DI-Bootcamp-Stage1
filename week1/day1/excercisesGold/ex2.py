month_i = int(input("Please, input the number of the current month: "))

if month_i >= 3 and month_i <= 5:
    print("Wow, sweet SPRING")
elif month_i >= 6 and month_i <= 8: 
    print("oooh, is this SUMMER hot?")
elif month_i >= 9 and month_i <= 11: 
    print("oh, is this AUTUMN again?")
else: 
    if month_i > 12: 
        print("These is not earthly month..... Next time enter the correct one!")
    else:
        print("Brace yourself, WINTER has come!")
