import game as g

# print(g.Game.get_user_item())


# g.Game.play()
# gs = g.Game()
# gs.play()
# gs.play()


def get_user_menu_choice():
    menu_choice = input("You are at the menu of our wonderful Rock-Paper-Scissors game\nPlease, choose your next step:\n Play a new game: 'g'\nShow scores: 'x'\nQuit the game and see results: 'q'\nYour choice: ")
    return menu_choice

def print_results(results):
    print("")
    for keys, values in results.items():
        print(f"{keys} : {values}")
    print("")
 

def main():
    
    flag = True
    while flag:
        us_m = get_user_menu_choice()
        if us_m == 'q':
            print_results(g.Game.results_arr)
            flag = False
        elif us_m == 'x': 
            print_results(g.Game.results_arr)
        elif us_m == 'g':
            gs = g.Game()
            gs.play()
        


main()
