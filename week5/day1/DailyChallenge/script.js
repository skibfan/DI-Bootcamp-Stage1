let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = arr => arr.fruits.forEach(element => {
    console.log(element);
    
});

function cloneGroceries() {
    let user = client
    client = 'Betty'
    console.log(client)
    console.log(user)
    // primitive variables are passed by copying, thus independent from each other. 
    let shopping = groceries
    shopping.totalPrice = '35$'
    shopping.other.paid = false
    console.log(shopping);
    console.log(groceries);
    
    // complex variables are passed by reference, thus changed together
}

displayGroceries(groceries)

cloneGroceries()



