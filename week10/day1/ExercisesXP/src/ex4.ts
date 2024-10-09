




const myFunc = (value: number) => { 
    let numberstatus: "positive" | "negative" | "zero" = "zero"
    if (value > 0) {
        numberstatus = "positive" 
    } else if (value == 0) {
        numberstatus = "zero"
    } else if (value < 0) {
        numberstatus = "negative"
    }
    return numberstatus
}

console.log(myFunc(150));
