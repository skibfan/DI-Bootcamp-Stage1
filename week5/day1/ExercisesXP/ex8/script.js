
// #I

// function makeJuice(size) {
    

//     function addIngredients(firstI, secondI, thirdI) {
//         alert(`The client wants a ${size} juice, containing ${firstI}, ${secondI}, ${thirdI}`)
//     }
//     addIngredients('apple', 'banana', 'cactus')
// }

// makeJuice('small')


// #II
function makeJuice(size) {
    let ingredients = []

    function addIngredients(firstI, secondI, thirdI) {
        ingredients.push([firstI, secondI, thirdI])
    }
    addIngredients('apple', 'banana', 'cactus')
    addIngredients('cacao', 'kiwi', 'ananas')
    function displayJuice() {
        alert(`The client wants a ${size} juice, containing ${ingredients.join(',