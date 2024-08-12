# import ex2
from ex2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *dog_names):
        final_string = self.name

        for i in dog_names:
            final_string += f" and {i}"
        final_string += " all play together"
        print(final_string)
    
    def do_a_trick(self):
        if self.trained == True:
            value = random.randint(0, 4)
            if value == 0: 
                print(f"{self.name} does a barrel roll")
            elif value == 1: 
                print(f"{self.name} stands on his back legs")
            elif value == 2: 
                print(f"{self.name} shakes your hand")
            elif value == 3: 
                print(f"{self.name} plays dead")


f_dog = PetDog("John", 3, 35)
s_dog = PetDog("Jack", 8, 15)
t_dog = Dog("Bob", 10, 56)

f_dog.play(s_dog.name, t_dog.name)
f_dog.train()
f_dog.do_a_trick()
s_dog.do_a_trick()