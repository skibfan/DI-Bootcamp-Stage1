import random

def get_random_temp(season):
    if season == "winter":
        # temp = random.randint(-10, 16)
        temp = round(random.uniform(-10.0, 16.0), 1)
    elif season == "spring":
        temp = round(random.uniform(0.0, 25.0), 1)
    elif season == "summer":
        temp = round(random.uniform(27.0, 40.0), 1)
    elif season == "autumn":
        temp = round(random.uniform(14.0, 28.0), 1)
    else: 
        return
    return temp




def main():
    season = input("What is the current season: ")
    try:
        temp = get_random_temp(season)
        if temp < 0: 
            print(f"Brrr, that’s freezing! Wear some extra layers today")
        elif temp < 16:
            print("Quite chilly! Don’t forget your coat")
        elif temp <= 23: 
            print("hmmmm its great! ")
        elif temp < 32:
            print("getting warmer")
        elif temp < 40:
            print("stay at home!")
        print("The temperature right now is {} degrees Celsius.".format(temp))
    except TypeError:
        print("enter valid season")
main()