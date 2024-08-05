sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders: 
    sandwich_orders.remove("Pastrami sandwich")
    

finished_sandwiches = []

for i in range(len(sandwich_orders)): 
    finished_sandwiches.append(sandwich_orders[i])

for i in finished_sandwiches:
    print(f"I made your {i}")