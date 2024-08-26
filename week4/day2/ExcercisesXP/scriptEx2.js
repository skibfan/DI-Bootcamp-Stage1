

let colors = ["blue", "green", "red", "purple", "orange"];


for (i in colors){
    let suffix
    if (i == 0) {
        suffix = 'st'
    } else if (i == 1) {
        suffix = 'nd'
    } else if (i == 2) {
        suffix = 'rd'
    } else {
        suffix = 'th'
    }
    console.log(`My ${Number(i)+1}${suffix} choice is ${colors[i]}`)
}


