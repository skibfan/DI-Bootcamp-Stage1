
const myFunc = (myString) => typeof(myString) === 'string'  ? true : false


console.log(myFunc('123'))

console.log(myFunc('hello')); 
//true
console.log(myFunc([1, 2, 4, 0]));
//false