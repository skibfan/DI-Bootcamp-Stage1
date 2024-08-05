my_fav_numbers = {10, 20, 35 ,44, 3}
my_fav_numbers.add(23)
my_fav_numbers.add(33)

for i in my_fav_numbers: 
    temp = i

my_fav_numbers.discard(temp)

friend_fav_numbers = {3, 4, 8, 10}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
