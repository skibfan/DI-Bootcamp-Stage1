

const processInput = (value: number | string | boolean) => {
    if (typeof(value) === "number") {
        return value * value
    } 
    else if (typeof(value) === "string") {
        return value.toUpperCase()   
    } else if( typeof(value) === "boolean") {
        return !value
    }
}

console.log(processInput(3));
console.log(processInput('wow'));
console.log(processInput(false));

