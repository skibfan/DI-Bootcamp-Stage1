import string
import random

sssstring = ""
temp = string.ascii_letters
for i in range(5):
    sssstring += temp[random.randint(0, 51)]


print(sssstring)
print(len(sssstring))