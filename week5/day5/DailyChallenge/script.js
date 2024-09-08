

let myform = document.getElementsByName('myform')[0]
myform.addEventListener('submit', function(e) {
    e.preventDefault()
    let firstWord = document.getElementById('firstword').value
    let secondWord = document.getElementById('secondword').value

    alertUser(checkAnagram(firstWord, secondWord))
    myform.reset()
})


function checkAnagram(firstWord, secondWord) {
    firstWord = firstWord.replaceAll(' ','').toLowerCase().split('').sort().join()
    secondWord = secondWord.replaceAll(' ', '').toLowerCase().split('').sort().join()

    return firstWord === secondWord
}

function alertUser(flag) {
    if (flag) {
        alert('The words you provided are anagrams!')
    } else {
        alert('This words are not anagrams....')
    }
}