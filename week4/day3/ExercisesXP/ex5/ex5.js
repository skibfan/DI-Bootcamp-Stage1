let myDiv = document.getElementById("container")
console.log(myDiv)

let myList = document.getElementsByClassName('list')
myList[0].lastElementChild.innerText = 'Richard'

let nameNode = myList[1].childNodes[3]
nameNode.remove()

for (i = 0; i < 2; i++) {
    myList[i].firstElementChild.textContent = 'Daniel'
}

for (i = 0; i < 2; i++) {
    myList[i].classList.add('student_list')
}

myList[0].classList.add('university', 'attendance')

myDiv.style.backgroundColor = 'lightblue'
myDiv.style.padding = '20px'

myList[1].lastElementChild.style.display = 'none'
myList[0].lastElementChild.style.border = 'dotted'

document.body.style.fontSize = '48px'
