function winBattle(){
    return true;
}

// #1
const winArrow = () => true
// #2
let experiencePoints = winBattle() ? 10 : 1


console.log(winBattle());
console.log(winArrow())

console.log(experiencePoints);
