const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];


const myEpic = epic.reduce((myEpicString, item) => {
    return myEpicString + ' ' + item
}, '')

console.log(myEpic);
