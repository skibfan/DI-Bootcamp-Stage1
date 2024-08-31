let myForm = document.getElementsByTagName('form')[0]
console.log(myForm)


function getValue(event) {

    event.preventDefault();

    let fName = myForm.elements['fname'].value
    let lName = myForm.elements['lname'].value

    console.log('First Name: ', fName)
    console.log('Last Name: ',lName)
}

myForm.addEventListener('submit', getValue)


function getValueSecond(event) {

    event.preventDefault();

    let fName = document.getElementsByName('firstname')[0].value
    let lName = document.getElementsByName('lastname')[0].value

    console.log('First Name Second: ', fName)
    console.log('Last Name Second: ',lName)
}

myForm.addEventListener('submit', getValueSecond)



function getValueThird(event) {

    event.preventDefault()

    let fName = document.getElementsByName('firstname')[0].value
    let lName = document.getElementsByName('lastname')[0].value

    let newUl = document.createElement('ul')
    newUl.classList.add('usersAnswer')

    let liFN = document.createElement('li')
    liFN.textContent = fName

    let liLN = document.createElement('li')
    liLN.textContent = lName

    newUl.appendChild(liFN)
    newUl.appendChild(liLN)
    myForm.appendChild(newUl)
    console.log(newUl)
}

myForm.addEventListener('submit', getValueThird)




// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :