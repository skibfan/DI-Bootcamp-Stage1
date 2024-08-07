magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for i in range(len(magicians)):
        print(f"{magicians[i]}")

show_magicians(magician_names)

def make_great(magicians):
    for i in range(len(magicians)):
        # temp = ""
        magicians[i] = "the Great " + magicians[i]

make_great(magician_names)

show_magicians(magician_names)