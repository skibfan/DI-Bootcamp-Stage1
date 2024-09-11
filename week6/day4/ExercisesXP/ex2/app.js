import { people } from "./data.js";

let avAge = (people) => {
    let sum = 0
    people.forEach(element => {
        sum += element.age
    });
    
    return sum / people.length
    
}

console.log(avAge(people));

