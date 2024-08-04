import random

message = input("Show me the real string: ")
message_r = []
message_shuffled = ""
if len(message) < 10: 
    print("Longer")
elif len(message) > 10:
    print("Shorter")
else: 
    print("Perfection")
    print(message[0])
    print(message[9])
    for i in range(0, len(message)):
        print(message[0:i+1])
        message_r+=message[i]

    random.shuffle(message_r)
    for i in range(len(message_r)):
        message_shuffled+=f"{message_r[i]}"
     
    print(message_shuffled)
    


