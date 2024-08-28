let allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
        alreadyRead: false
    },
]


let mySec = document.getElementsByClassName('listBooks')
let newDiv = document.createElement('div')
newDiv.classList.add('books')
mySec[0].appendChild(newDiv)



function addProperties(thisBook) {
    let curBook = document.createElement('div')
    curBook.style.display = 'flex'
    curBook.style.flexDirection = 'column'
    curBook.style.alignItems = 'center'
    curBook.style.margin = '20px'

    let caption = document.createElement('p')
    caption.textContent = `${thisBook.title} written by ${thisBook.author}`
    if (thisBook.alreadyRead == true) {
        caption.style.backgroundColor = 'indianred'
    } else {
        caption.style.backgroundColor = 'lightgreen' 
    }

    curBook.appendChild(caption)

    let img = document.createElement('img')
    img.src = thisBook.image
    img.style.height = '150px'
    img.style.width = '100px'
    curBook.appendChild(img)

    newDiv.appendChild(curBook)
}


addProperties(allBooks[0])
addProperties(allBooks[1])

