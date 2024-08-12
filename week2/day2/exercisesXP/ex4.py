class Family():
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")

    def is_18(self, name):
        for member in self.members:
            for keys, values in member.items():
                if member['name'] == name:
                    if member['age'] >= 18:
                        return True
                    else:
                        return False
    
    def family_presentation(self):
        print("Hello and welcome the {}s family!".format(self.last_name))
        for member in self.members: 
            for keys, values in member.items():
                if keys == "is_child" and values == True:
                    print("is a child ", end = "")
                elif keys == "is_child" and values == False:
                    print("is NOT a child ", end = "")
                else:
                    print(f"{values} ", end = "")
            print("")


# smiths = Family([
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
# ], "Smith")

# smiths.born(name='Yossi', age=0, gender='Male', is_child=True)



# print(smiths.is_18("Yossi"))

# smiths.family_presentation()