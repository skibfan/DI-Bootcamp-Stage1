

const getDetails = (name: string, age: number) => {

    let reply: [string, number, string] = [name, age, `Hello, ${name}! You are ${age} years old.`]
    return reply
}

const details = getDetails("Alice", 25)

console.log(details);
