import ex4

class TheIncredibles(ex4.Family):
    def __init__(self, members, last_name = "Incredible"):
        super().__init__(members, last_name)
        self.last_name = "Incredible"

    def use_power(self, name):

        for member in self.members:
            if member["name"] == name:
                try:
                    assert member["is_child"] == False
                    print(member["power"])
                except:
                    print(f"{name} is not old enough")
    
    def incredible_presentation(self):
        print("*Here is our powerful family **")
        self.family_presentation()
    

t