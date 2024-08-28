
function hotelCost() {
    let cost = 's'
    while (isNaN(cost)) {    
        cost = prompt("For how long are you going to stay?")

    }
    cost = Number(cost)
    return cost * 140
}

function planeRideCost() {
    let destination = 1
    while (typeof(destination) != 'string' || !isNaN(destination) || destination.trim() === '') {
        destination = prompt("Where are you going?")
    }
    if (destination.toLowerCase() == 'london') {
        return 183
    } else if (destination.toLowerCase() == 'paris') {
        return 220
    } else {
        return 300
    }
}

function rentalCarCost() {
    let cost = 's'
    while (isNaN(cost)) {    
        cost = prompt("For how long are you going to rent a car?")

    }
    cost = Number(cost)
    if (cost > 10) {
        return cost * 40 * 0.95
    } else {
        return cost
    }
}

function totalVacationCost() {
    let hotel = hotelCost()
    let plane = planeRideCost()
    let car = rentalCarCost()
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`)
}

totalVacationCost()