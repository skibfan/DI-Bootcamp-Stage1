class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f"{self.name} is barking")
    
    def run_speed(self):
        return round(self.weight/self.age*10)
    
    def fight(self, other_dog):
        if self.run_speed() > other_dog.run_speed():
            print(f"{self.name} is stronger than {other_dog.name}")
        else:
            print(f"{other_dog.name} is stronger than {self.name}")
        


f_dog = Dog("John", 3, 35)
s_dog = Dog("Jack", 8, 15)
t_dog = Dog("Bob", 10, 56)


f_dog.fight(s_dog)
t_dog.fight(f_dog)
print(f"{f_dog.name} is running with speed of {f_dog.run_speed()} after defeating his opponents")