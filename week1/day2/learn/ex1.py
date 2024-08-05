list1 = [5, 10, 15, 20, 25, 50, 20]
counter = 0

for i in range(len(list1)): 
    if list1[i] == 20 and counter == 0: 
        list1[i] = 200
        counter += 1

print(list1)



a_tuple = (10, 20, 30, 40)

a, b, c, d = a_tuple

# Your code
print(a) # should print 10
print(b) # should print 20
print(c) # should print 30
print(d) # should print 40