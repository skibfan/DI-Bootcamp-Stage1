items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 
affordable_items = []


wallet = int(wallet.strip("$").strip(" ").replace(",",""))
for i in items_purchase.keys():
    items_purchase[i] =  items_purchase[i].strip("$").replace(",","").strip(" ")
    items_purchase[i] = int(items_purchase[i])


for i in items_purchase.keys():
    if wallet - items_purchase[i] >= 0:
        wallet -= items_purchase[i]
        affordable_items.append(i)



if len(affordable_items) == 0:
    print("Nothing")
else:
    affordable_items.sort()
    print(affordable_items)

