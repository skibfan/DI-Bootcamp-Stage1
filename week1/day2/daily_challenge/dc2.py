
user_word = input("Give me your word: ")


word_list = list(user_word)

new_word = ""

for i in range(0, len(word_list)):
    if i < len(word_list) - 1:
        if word_list[i]  != word_list[i + 1]:
            new_word += word_list[i]
    else: 
        new_word += word_list[i]
        
print(new_word)
