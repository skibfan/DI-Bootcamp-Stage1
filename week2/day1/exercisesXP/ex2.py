class Dog: 
    def __init__(self, dog_name, height):
        self.name = dog_name
        self.height = height
    def bark(self):
        print("{} goes woof!".format(self.name))

    def jump(self):
        print("{} jumps {} cm high!".format(self.name, self.height * 2))


first_dog = Dog("Bob", 67)

first_dog.bark()
first_dog.jump()


davids_dog = Dog("Rex", 50)
print(davids_dog.name, davids_dog.height)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)

sarahs_dog = Dog("Rex", 50)
print(sarahs_dog.name, sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()


if sarahs_dog.height > davids_dog.height:
    print(sarahs_dog.name)
else:
    print(davids_dog.height)

