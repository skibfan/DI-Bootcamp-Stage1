class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount >1:
            return f"{self.amount} {self.currency}s"
        else:
            return f"{self.amount} {self.currency}"
    
    def __int__(self):
        return int(self.amount)

    def __repr__(self) -> str:
        return str(self)

    def __add__(self, other):
        try:
            if type(self) == type(other):
                assert self.currency == other.currency
        except AssertionError:
            print(f"TypeError: Cannot add between Currency type {self.currency} and {other.currency}")
            

        return int(self) + int(other)

    def __iadd__(self, other):
        self.amount = self.amount + int(other)
        return self
        

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)



print(str(c1))
# # '5 dollars'

print(int(c1))
# # 5

# repr(c1)
# # '5 dollars'


print(c1 + 5)
# c1 + 5
# # 10

print(c1 + c2)
# # 15

print(c1)
# # 5 dollars

c1 += 5
print(c1)
# # 10 dollars
c1 += c2
print(c1)
# # 20 dollars

c1 + c3
# # TypeError: Cannot add between Currency type <dollar> and <shekel>