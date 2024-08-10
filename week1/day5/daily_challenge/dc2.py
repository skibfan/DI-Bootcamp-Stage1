sentence = "Forgetfulness is by all means powerless!"

def longest_word(sentence):
    word_long = ""
    # sentence = sentence.strip(" .!?")
    sentence_arr = sentence.split(" ")
    for i in sentence_arr:
        if len(i) > len(word_long):
            word_long = i
    return word_long

print(longest_word(sentence))

