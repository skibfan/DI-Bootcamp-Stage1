const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((elem, i) => {
    console.log(`${i+1}# choice is ${elem}.`)
})

if (colors.some(elem => {return elem == "Violet"})) {
    console.log('Yeah')
} else {
    console.log('No....')
}