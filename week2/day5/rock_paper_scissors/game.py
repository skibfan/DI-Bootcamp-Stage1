import random

class Game():
    results_arr = {"win": 0, "lose": 0, "draw": 0}
    user_item = ""
    computer_item = ""
    def __init__(self):
        pass
    
    def get_user_item(self):
        while True:
            temp = input("Select (r)ock, (p)aper, or (s)cissors: ")
            if temp.lower() in ["r", "p", "s"]:
                return temp
    
    def get_computer_item(self):
        return random.choice(["r", "p", "s"])
    
    def get_game_result(self, user_item, computer_item):
        flag = "draw"
        if user_item == computer_item:
            flag = "draw"
        elif user_item == "rock" and computer_item == "scissors":
            flag = "win"
        elif user_item == "paper" and computer_item == "rock":
            flag = "win"
        elif user_item == "scissors" and computer_item == "paper":
            flag = "win"
        else:
            flag = "lose"
        return flag
    
    def transform_choice(self, item):
        if item == "r":
            return "rock"
        elif item == "p":
            return "paper"
        elif item == "s":
            return "scissors"

    def play(self):
        user = self.transform_choice(self.get_user_item())
        comp = self.transform_choice(self.get_computer_item())
        result = self.get_game_result(user, comp)
        print(f"\nYou selected {user}. The computer selected {comp}. You {result}!\n")
        self.results_arr[result] += 1
        return result
            