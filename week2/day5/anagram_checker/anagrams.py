import anagram_checker as ac
import os, string

# script_dir = os.path.dirname(__file__)
# text_file = os.path.join(script_dir, "sowpods.txt")

# text = ac.AnagramChecker(text_file)

# print(text.is_valid_word("banana"))

# text.get_anagrams("qwerty")

# print(text.get_anagrams("a"))


def check_single(u_input):
    if len(u_input.split()) > 1:
        return False
    else:
        return True
    
def check_valid_c(u_input):
    checker = string.ascii_letters
    checker = list(checker)
    for i in u_input:
        try:
            checker.index(i)
        except Exception:
            return False
    return True
    
def main():
    flag = True
    script_dir = os.path.dirname(__file__)
    text_file = os.path.join(script_dir, "sowpods.txt")
    text = ac.AnagramChecker(text_file)

    print("Hello and welcome to the little anagrams game!\nGive me your word and I'll return an anagram!\nType 'q' or 'quit' to end the game.\n")
    while flag:
        u_input = input("One word only: ")
        if check_single(u_input):
            u_input = u_input.strip()
            if u_input == "quit" or u_input == "q":
                flag = False
            else:
                print(f"YOUR WORD :”{u_input.upper()}”")
                if check_valid_c(u_input):
                    print("this is a valid English word.")  
                    print(f"anagrams for this word are: {", ".join(text.get_anagrams(u_input))}!")
                else:
                    print("Invalid symbols inside your word, try again!")
        else:
            print("Invalid amount of words, try again!")


main()


