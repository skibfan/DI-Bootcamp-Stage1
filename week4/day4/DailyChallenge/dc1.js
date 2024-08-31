let myForm = document.getElementById('libform')

let noun, adjective, person, verb, place
let nounInput = document.getElementById('noun')
nounInput.required = true
let adjectiveInput = document.getElementById('adjective')
adjectiveInput.required = true
let personInput = document.getElementById('person')
personInput.required = true
let verbInput = document.getElementById('verb')
verbInput.required = true
let placeInput = document.getElementById('place')
placeInput.required = true

function getStory(event) {
    event.preventDefault()

    noun = nounInput.value
    adjective = adjectiveInput.value
    person = personInput.value
    verb = verbInput.value
    place = placeInput.value

    let story = document.getElementById('story')
    story.textContent = noun + ' ' + adjective + ' ' + person + ' ' + verb + ' ' + place
    
}

myForm.addEventListener('submit', getStory)
