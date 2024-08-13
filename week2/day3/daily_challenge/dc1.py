import math

class Circle(): 
    def __init__(self, radius=None, diameter=None):
        if radius != None and diameter != None:
            self.__radius = radius
            self.__diameter = diameter
        elif radius != None:
            self.__radius = radius
            self.__diameter = radius * 2
        elif diameter != None:
            self.__diameter = diameter
            self.__radius = diameter / 2
        else:
            self.__radius = 0
            self.__diameter = 0

    @property
    def radius(self):
        return self.__radius
    @radius.setter
    def radius(self, radius):
        self.__radius = radius
        self.__diameter = radius * 2

    @property
    def diameter(self):
        return self.__diameter
    @diameter.setter
    def diameter(self, diameter):
        self.__diameter = diameter
        self.__radius = diameter / 2

    @property
    def area(self):
        return (math.pi * math.pow(self.__radius, 2))

    @staticmethod
    def sort(*circles):
        return sorted(circles, key=lambda x: x.radius)
       
    def __repr__(self):
        return f"Radius: {self.__radius}\nDiameter: {self.__diameter}\nArea: {self.area}"

    def __add__(self, other):
        try:
            assert type(self) == type(other)
            temp = self.radius + other.radius
            return Circle(radius=temp)
        except AssertionError:
            print(f"TypeError: Cannot add NOT circle to A Circle")
    def __lt__(self, other):
        try:
            assert type(self) == type(other)
            if self.radius < other.radius:
                return True
            else:
                return False
        except AssertionError:
            print(f"TypeError: Cannot compare NOT circle to A Circle")

    def __le__(self, other):
        try:
            assert type(self) == type(other)
            if self.radius <= other.radius:
                return True
            else:
                return False
        except AssertionError:
            print(f"TypeError: Cannot compare NOT circle to A Circle")

    def __gt__(self, other):
        try:
            assert type(self) == type(other)
            if self.radius > other.radius:
                return True
            else:
                return False
        except AssertionError:
            print(f"TypeError: Cannot compare NOT circle to A Circle")

    def __ge__(self, other):
        try:
            assert type(self) == type(other)
            if self.radius >= other.radius:
                return True
            else:
                return False
        except AssertionError:
            print(f"TypeError: Cannot compare NOT circle to A Circle")

    def __eq__(self, other):
        try:
            assert type(self) == type(other)
            if self.radius == other.radius:
                return True
            else:
                return False
        except AssertionError:
            print(f"TypeError: Cannot compare NOT circle to A Circle")




c1 = Circle(radius=2)
c2 = Circle(radius=10)
# print(c1.diameter)

c1.diameter = 2

# print(c1.diameter)
# print(c1.radius)

# print(c1.area)


# print(c1+c2)

# print(c1==c2)

# c_arr = [c1, c2]
# print(c1.radius)
c_arr = Circle.sort(c1, c2)

for i in c_arr:
    print(i)