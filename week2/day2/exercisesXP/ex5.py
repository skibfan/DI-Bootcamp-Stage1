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
    

the_incredibles = TheIncredibles([
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ])

the_incredibles.use_power("Michael")

the_incredibles.incredible_presentation()

the_incredibles.born(name='Jack', age=0, gender='Male', is_child=True, power="Unknown Power")

the_incredibles.incredible_presentation()