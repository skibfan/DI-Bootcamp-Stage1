let sentence = '// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.'

let wordNot = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")

if (wordBad > wordNot && wordBad != -1 && wordNot != -1) {
    sentence = sentence.slice(0, wordNot)  + 'good' + sentence.slice(wordBad+3)
}

console.log(sentence)


