let myPromise = new Promise((res,rej) => {
    setTimeout(() => {
        res('success')
    }, 4000)
})

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))