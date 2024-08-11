class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

first_cat = Cat("Samuel", 14)
second_cat = Cat("Barbarosa", 3)
third_cat = Cat("Meowski", 5)

def oldest_cat(*kittens):
    old_cat = Cat
    age_old = 0
    for i in kittens:
        if i.age > age_old:
            age_old = i.age
            old_cat = i
    return old_cat

print("The oldest cat is {}, and is {} years old.".format(oldest_cat(first_cat, second_cat, third_cat).name, oldest_cat(first_cat, second_cat, third_cat).age))
      