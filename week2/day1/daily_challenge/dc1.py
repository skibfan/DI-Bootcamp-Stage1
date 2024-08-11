class Farm: 
    def __init__(self, name):
        self.name = name
        self.animal = {}

    def add_animal(self, species, amount = 1):
        if species in self.animal:
            self.animal[species] += amount
        else:
            self.animal[species] = amount
    def get_info(self):
        final_string = f"{self.name} farm\n\n"
        # print(self.name + " farm\n")
        for keys, values in self.animal.items():
            final_string += f"{keys} : {values}\n"
        final_string += "\n    E-I-E-I-0!"
        return final_string
    
    def get_animal_types(self):
        animal_list = []
        for keys in self.animal:
            animal_list.append(keys)

        animal_list.sort()
        return animal_list
    def get_short_info(self):
        final_string = f"{self.name}'s farm has "
        temp = self.get_animal_types()
        for i in temp:
            if i == temp[0]:
                final_string += f"{i}"
            elif i != temp[-1]:
                final_string += f", {i}"
            else:
                final_string += f" and {i}"
            if self.animal[i] != 1:
                    final_string += "s"
        final_string += "."
        return final_string



macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())