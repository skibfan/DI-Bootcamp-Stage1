let headerOne = document.getElementsByTagName('h1')
console.log(headerOne[0].textContent)

let art = document.querySelector('article').lastElementChild.remove()

let cur = document.querySelector('h2')
cur.addEventListener('click', function () {
    
    if (cur.style.backgroundColor != 'indianred') {
        cur.style.backgroundColor = 'indianred'
    } else { 
        cur.style.backgroundColor = 'transparent'
    }
    cur.style.display = 'inline'
})

let curThree = document.querySelector('h3')
curThree.addEventListener('click', function () {
    curThree.style.display = 'none'
})

let myButton = document.createElement('button')
myButton.innerHTML = 'Set to Bold'
myButton.addEventListener('click', function () {
    if (document.body.style.fontWeight == 'bold') {
        myButton.innerHTML = 'Set to Normal'
        document.body.style.fontWeight = 'normal'
    } else {
        myButton.innerHTML = 'Set to Bold'
        document.body.style.fontWeight = 'bold'
    }
})
document.body.appendChild(myButton)

