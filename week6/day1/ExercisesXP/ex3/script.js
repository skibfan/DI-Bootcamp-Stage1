

let first = new Promise((resolve) => resolve(3))
let second = new Promise((res, rej) => rej('Boo!'))

first
    .then(result => console.log(result))
    .catch((error) => console.log(console.error()))

second
.then(result => console.log(result))
.catch((error) => console.log(error))