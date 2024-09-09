
const compareToTen = (number) => new Promise(function (res, rej) {
    if (number <= 10) {
        res('Promise resolved')
    } else {
        rej('Promise rejected')
    }
})



compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))