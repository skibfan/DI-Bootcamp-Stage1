import random
class Card():
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __eq__(self, other):
        return self.suit == other.suit and self.value == other.value
    
    def __repr__(self):
        return f"{self.suit} {self.value}"


class Deck():
    deck_arr = []
    __suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    __values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    def __init__(self):
        pass

    
    def shuffle(self):
        for i in self.__suits:
            for u in self.__values:
                new_card = Card(i, u)
                if new_card not in self.deck_arr:
                    self.deck_arr.append(new_card)
        random.shuffle(self.deck_arr)

    def deal(self):
        d_card = self.deck_arr.pop()
        print(d_card)



d = Deck()
d.shuffle()

d.deal()
d.deal()

print("")
counter = 0
for i in d.deck_arr:
    print(i.suit, i.value)
    counter+=1
print(f"COUNTER {counter}")
