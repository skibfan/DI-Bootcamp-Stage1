function partOne() {
    alert("Hello World")
}

setTimeout(partOne, 2000)

function partTwo() {
    let newP = document.createElement('p')
    newP.textContent = 'Hello World'
    document.getElementById('container').appendChild(newP)
}

setTimeout(partTwo, 2000)


let myInterval
function partThree() {
    
        let container = document.getElementById('container')
        let newP = document.createElement('p')
        if (container.getElementsByTagName('p').length >= 5) {
            clearInter()
        } else {
            newP.textContent = 'Hello World'
            container.appendChild(newP)
        }
}
myInterval = setInterval(partThree, 2000)

function clearInter(){
    clearInterval(myInterval)
}

document.getElementById('clear').addEventListener('click', clearInter)


