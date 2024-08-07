matrix = ['7','i','i',],['T','s','x'],['h','%','?'],['i',' ','#'],['s','M',' ', ],['$','a',' ' ],['#','t','%',],['^','r','!']

sentence = ""

def checker(el_i, el_u):
    global sentence
    if matrix[el_u][el_i].isalpha():
        sentence += matrix[el_u][el_i]
    elif sentence:
        if sentence[-1] != " ":
            sentence += " "

for i in range(len(matrix[0])):
    for u in range(len(matrix)):
        checker(i, u)

print(sentence)