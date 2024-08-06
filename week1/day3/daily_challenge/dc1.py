user_word = input("Give me your word: ")
word_array = {}

for i in range(len(user_word)):
    if user_word[i] in word_array:
        word_array[user_word[i]].append(i)
    else:
        word_array[user_word[i]] = [i]

print(word_array)