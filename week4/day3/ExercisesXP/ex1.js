
let divisor = 23

function displayNumbersDivisible(divisor) {
    num = 0
    for (i = 0; i < 500; i++) {
        if (i%divisor == 0) {
            console.log(i)
            num += i
        }
    }
    console.log(num)
}

displayNumbersDivisible(divisor)



