console.log(firstF(35));

function firstF (kg) {
    return kg * 1000
}

const secondF = function (kg) {
    return kg * 1000
}

console.log(secondF(2));

// function declaration can be invoked before it's declatartion,
//  while function expression is limited to from-top-to-bottom coding style.

const thirdF = kg => kg * 1000

console.log(thirdF(4))

