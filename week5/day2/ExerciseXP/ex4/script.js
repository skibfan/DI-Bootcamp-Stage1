const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let welcUsers = users.map((item) => {
    return "Hello there, " + item.firstName + ' ' + item.lastName + '!'
})

console.log(welcUsers);

let fullStack = users.filter((item) => { return item.role == 'Full Stack Resident' })

console.log(fullStack);


let lnameFullSt = users
    .filter((item) => { return item.role == 'Full Stack Resident' })
    .map((item) => {return item.lastName});

console.log(lnameFullSt);
