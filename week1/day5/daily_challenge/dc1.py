word = input("Your comma-separated words: ")

word_arr = [x.strip() for x in word.split(",")]
word_arr.sort()
word_sorted = lambda word_arr: ",".join(word_arr)

print(word_sorted(word_arr))