function changeEnough(itemPrice, amountOfChange) {
    total = 0

    for (i = 0; i < amountOfChange.length; i++) {
        switch (i) {
            case 0:
                total += amountOfChange[i] * 0.25
                break
            case 1:
                total += amountOfChange[i] * 0.1
                break
            case 2: 
                total += amountOfChange[i] * 0.05
                break
            case 3:
                total += amountOfChange[i] * 0.01
                break
            default:
                break
        }
    }

    if (total >= itemPrice) {
        return true
    } else {
        return false
    }
}

console.log(changeEnough(0.75, [0,0,20,5]))

