const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


const toJs = () => new Promise((resolve, reject) => {
    if (morse.length == 0) {
        reject('morse is empty')
    } else {
        resolve(JSON.parse(morse))
    }
}) 


const toMorse = (morseJS) => new Promise((resolve, reject) => {
    let userWord = prompt('Give me your word')
    let toDOM = userWord
    userWord = userWord.toLowerCase().split('')
    if (userWord.every(element => element in morseJS)) {
        resolve(userWord.map(elem => elem = morseJS[elem]))
        let showMessage = document.createElement('p')
        showMessage.textContent = `"${toDOM}" gives you:`
        document.body.appendChild(showMessage)
    } else {
        reject('Cannot do it, use english ascii characters')
    }
})



