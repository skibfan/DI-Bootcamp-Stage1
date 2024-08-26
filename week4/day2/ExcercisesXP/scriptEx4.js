// 1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2
console.log(building.numberOfFloors)

// 3
console.log(`Console.log how many apartments are on the floors 1 and 3: ${building.numberOfAptByFloor.firstFloor} and ${building.numberOfAptByFloor.thirdFloor}`)

// 4
let secondTen = building.nameOfTenants[1]
let rooRenSeT = building.numberOfRoomsAndRent[secondTen.toLowerCase()]
console.log(`Second tennant is ${secondTen}, he has ${rooRenSeT[0]} rooms for total rent of ${rooRenSeT[1]}`)

let danRen = rooRenSeT[1]
let elseRen
let totalRen = 0
for (i in building.numberOfRoomsAndRent) {
    totalRen += building.numberOfRoomsAndRent[i][1]
}
if (totalRen - danRen > danRen) {
    building.numberOfRoomsAndRent[secondTen.toLowerCase()][1] = 1200
}
console.log(`Dan's rent now is: ${building.numberOfRoomsAndRent[secondTen.toLowerCase()][1]}`)

