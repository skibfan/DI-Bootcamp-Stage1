const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }


let line = ""
for (i in details) {
    line += `${i} ${details[i]} `
}
console.log(line.trim())