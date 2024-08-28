

const className = document.getElementById('navBar')
className.setAttribute('id', 'socialNetworkNavigation')
console.log(className.getAttribute('id'))


let newLi = document.createElement('li')
let newTextNode = document.createTextNode('Logout')
newLi.appendChild(newTextNode)
className.appendChild(newLi)
let firstEle = className.firstElementChild
let lastEle = className.lastElementChild
console.log('First <li> is: ' + firstEle.textContent)
console.log('Last <li> is: ' + lastEle.textContent)
