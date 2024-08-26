
let uInput

do {
    uInput = prompt("Pick a number")
    if (isNaN(uInput)) {
        break
    }
    uInput = Number(uInput)
    
} while (uInput < 10)
