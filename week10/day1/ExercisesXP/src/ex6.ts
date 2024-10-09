type Person = {
    name: string, 
    age: number
}


const createPerson = (name: string, age: number) => {
    let newPerson: Person = {name, age}
    return newPerson
}

let newPer = createPerson('wow', 35)

console.log(newPer);
