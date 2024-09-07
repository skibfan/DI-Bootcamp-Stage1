

const form = document.getElementById('myform')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let uname = document.getElementById('username').value
    let lname = document.getElementById('lastname').value

    let fullName = {
        name: uname,
        lastname: lname
    }
    let jsonString = JSON.stringify(fullName, null, 1)
    
    let myString = document.createElement('div')
    myString.textContent = jsonString
    form.appendChild(myString)
})