

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
        rej('Too small array')
    }
})

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(result => sortWords(result))
      .then((result) => console.log(result))
      .catch(error => console.log(error))