

const makeAllCaps = (arr) => new Promise((res, rej) => {
    if (arr.every(element => typeof(element) === 'string')) {
        res(arr.map(element => element = element.toUpperCase()))
    } else {
        rej('not everything is a string')
    }
})

const sortWords = (arr) => new Promise((res, rej) => {
    if (arr.length > 4) {
        res(arr.sort())
    } else {
      