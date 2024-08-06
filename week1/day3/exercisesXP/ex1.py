
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# new_array = zip(keys, values)
# print(tuple(new_array))

# for key, values in new_array:
#     print(f"{key} = {values}")

new_array = {}
for i in range(len(keys)):
    new_array[keys[i]] = values[i]
    

for key, values in new_array.items():
    print(f"{key} = {values}")
