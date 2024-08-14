import random
import os

script_dir = os.path.dirname(__file__)
sowpods_relative_path = os.path.join(script_dir, "sowpods.txt")
def get_words_from_file():
    # f = open('./exerciseXP/sowpods.txt')
    # f = open(sowpods_relative_path)
    # my_data = f.read().split("\n")
    # f.close()
    with open(sowpods_relative_path) as f:
        my_data = f.read().split("\n")
    
    return my_data


def get_random_sentence(length):
    words = get_words_from_file()
    sentence = ""
    for i in range(length):
        sentence += words[random.randint(0, len(words))] + " "
    sentence = sentence.lower()
    return sentence



def main():
    print("HELLO THERE\nthis is a random sentence generator.\nenter your desired sentence length(how many words) and prepare yourself for incoming sentence!")
    try:
        length = int(input("give me your Integer: "))
        assert length >= 2 and length <= 20
        print(get_random_sentence(length))
    except AssertionError:
        print("Please, I ask you kindly: only integers between 2 and 20. THANKS. GL NEXT TIME")
    except ValueError:
        print("I TOLD YOU!!! ONLY INTEGERS")


main()