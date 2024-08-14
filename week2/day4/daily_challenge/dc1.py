import os
class Text():
    def __init__(self, string):
        self.string = string
    
    def frequency(self, f_word):
        temp = self.string.lower().split()
        counter = temp.count(f_word.lower())
        return f"there is {counter} times word {f_word} is used"
    

    def most_com(self):
        temp = string.lower().split()
        counter = 0
        m_com = ""
        for i in temp:
            if temp.count(i) > counter:
                m_com = i
                counter = temp.count(i)
        return m_com

    def unique(self):
        un_words = []
        temp = string.lower().split()
        for i in temp:
            if temp.count(i) == 1:
                un_words.append(i)
        return un_words

    def from_file(sssstring):
        with open(sssstring, 'r') as f:
            temp = f.read()
        return Text(temp)

string = "A good book would sometimes cost as much as a good house."

# te_string = Text(string)
# print(te_string.frequency("good"))

# print(te_string.most_com())

# print(te_string.unique())


script_dir = os.path.dirname(__file__)
text_file = os.path.join(script_dir, "the_stranger.txt")

ssss = Text.from_file(text_file)

print(ssss.frequency("a"))
print(ssss.most_com())
print(ssss.unique())