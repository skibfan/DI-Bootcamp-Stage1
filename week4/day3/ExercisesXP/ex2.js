const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 


let shoppingList = ["banana", "orange", "apple"]

function myBill() {
    bill = 0
    for (i in shoppingList) {
        if (stock[shoppingList[i]] > 0) {
            bill += prices[shoppingList[i]]
            stock[shoppingList[i]]--
        }
    }
    console.log(bill)
}

myBill()


