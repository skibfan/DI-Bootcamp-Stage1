instructions = "Hello! Let's play a game of Tic Tac Toe.\nHope you've decided which player is going first, as we won't decide it for you!\nTo control the game, please enter numbers from 1 to 3 which represent\n1) row\n2) column\nPlayer one, you start with \"X\"\nHere is your starting board:\n"
player = 1
board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
# board = [
#     ['X', 'O', 'X'],
#     ['O', 'O', 'X'],
#     ['O', 'X', 'O']
# ]
winner = False
game = True
def print_board(board):
    print("*********************")
    print("*   {}  | {} | {}   *".format(board[0][0],board[0][1],board[0][2]))
    print("*   {}  | {} | {}   *".format(board[1][0],board[1][1],board[1][2]))
    print("*   {}  | {} | {}   *".format(board[2][0],board[2][1],board[2][2]))
    print("*********************")

def player_input(): 
    global player
    try: 
        row,col=map(int,input().split())
        try:
            row = int(row)
            col = int(col)
            if board[row][col] == " ":
                if player == 1: 
                    board[row][col] = "X"
                    player = 2
                elif player == 2:
                    board[row][col] = "O"
                    player = 1
            else: 
                print("Field is occupied, try another!")
        except ValueError:
            print("Invalid Input try again")
    except ValueError:
        print("Invalid Input try again")
    
def check_win(): 
    global winner
    for row in board:
        if row[0] == row[1] == row[2] and row[0] != " ":
            winner = True
            print(winner)
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != " ":
            winner = True
            print(winner)

    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != ' ':
        winner = True
        print(winner)
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != ' ':
        winner = True
        print(winner)

def check_tie(counter):
    if counter == 9 and winner == False:
        flag = 0
        global game
        for row in board:
            try:
                row.index(" ")
            except ValueError:
                flag += 1
        if flag == 3:
            game = False

def end_game():
    global player
    if winner == True:
        if player == 1: 
            player = 2
        elif player == 2:
            player = 1
        print(f"Congratulations Player {player}!\nYou are the WORLD CHAMPION!")
    elif game == False:
        print("Look like a tie! Try restarting a game. Good luck!")

def main():
    print(instructions)
    counter = 0
    
    print_board(board)
    while not winner and game:
        print(f"Player {player}, enter the row and column to place the mark:")
        player_input()
        check_win()
        print_board(board)
        counter += 1
        check_tie(counter)

    end_game()





main()
# check_tie(9)
# end_game()
