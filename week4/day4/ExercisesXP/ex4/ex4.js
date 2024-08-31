let myForm = document.getElementById('MyForm')


function calculate(event) {
    event.preventDefault()

    let radius = document.getElementById('radius').value

    let volume = 4 / 3 * Math.PI * Math.pow(radius, 3)

    document.getElementById('volume').value = volume.toFixed(2)
}


myForm.addEventListener('submit', calculate)