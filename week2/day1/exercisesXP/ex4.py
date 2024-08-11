class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        try: 
            self.animals.index(new_animal)
        except ValueError:
            self.animals.append(new_animal)

    def get_animals(self):
        for i in self.animals:
            print(i)

    def sell_animal(self, del_animal):
        self.animals.remove(del_animal)



    def sort_animals(self):
        temp = ""
        temp_arr = []
        counter = 0
        self.animals.sort()
        for i in range(len(self.animals)):
            if i > 0:
                if self.animals[i - 1][0] == self.animals[i][0]:
                    temp = [temp]
                    temp.append(self.animals[i])
                else:
                    temp = self.animals[i]
            else:
                temp = self.animals[i]
            
            try: 
                temp_arr.index(temp[0])
                temp_arr[-1] = temp
            except ValueError:
                temp_arr.append(temp)

        self.animals = temp_arr
    
    def get_groups(self):
        counter = 1
        for i in self.animals:
            print("Group {}: animals: {}".format(counter, i))
            counter += 1

ramat_gan_safari = Zoo("WOW")
ramat_gan_safari.add_animal("kk")
ramat_gan_safari.add_animal("ks")
ramat_gan_safari.add_animal("aa")
ramat_gan_safari.add_animal("ab")
ramat_gan_safari.add_animal("kk")
ramat_gan_safari.sell_animal("kk")
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_animals()

print("")
print("")
print("")

ramat_gan_safari.get_groups()
# for keys, values in ramat_gan_safari.animals.items():
#     print(keys, str(values))

