let allBoldItems = ''



function getBoldItems() {
    let bold = document.getElementsByTagName('strong')
    for (i = 0; i < bold.length; i++) {
        allBoldItems += bold[i].textContent
    }
}
getBoldItems()
console.log(allBoldItems)

function highlight() {
    let bold = document.getElementsByTagName('strong')
    for (i = 0; i < bold.length; i++) {
        bold[i].style.color = 'blue'
    }
}



function returnItemsToDefault() {
    let bold = document.getElementsByTagName('strong')
    for (i = 0; i < bold.length; i++) {
        bold[i].style.color = 'black'
    }
}



let paragraph = document.getElementsByTagName('p')[0]
paragraph.addEventListener('mouseover', highlight)
paragraph.addEventListener('mouseout', returnItemsToDefault)