
const greet =(name: string = 'noname') => {
    if (name === 'noname') return 'Hello nameless guest!'
    return `Hello, ${name}`
}

console.log(greet('Maria'));
console.log(greet());

