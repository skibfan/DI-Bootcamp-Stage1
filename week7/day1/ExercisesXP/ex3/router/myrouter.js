import express from 'express'

const router = express.Router()

router.use(express.json())

const books = [];

// Get all books
router.get('/books', (req, res) => {
    res.json(books)
})

router.get('/books/:id', (req, res) => {
    const {id} = req.params
    const curBook = books.find(book => book.id == id)
    res.json(curBook)
})
// Add a new book

router.post('/books', (req, res) => {
    const id = books.length + 1
    const {booktitle, bookauthor} = req.body
    const newbook = {id, booktitle, bookauthor}
    books.push(newbook)
    res.json(books)
})

// Update a book by ID

router.put('/books/:id', (req, res) => {
    const {id} = req.params
    const {booktitle, bookauthor} = req.body
    const curBook = books.find(book => book.id == id)
    if (curBook) {
        curBook.booktitle = booktitle
        curBook.bookauthor = bookauthor
        res.json(books)
    } else {
        res.status(404).send({message: "no book here"})
    }
})

// Delete a book by ID

router.delete('/books/:id', (req, res) => {
    const {id} = req.params
    const index = books.findIndex(book => book.id == id)
    if (index != -1) {
        books.splice(index, 1)
        for (let i = index; i < books.length; i++) {
            books[i].id--
        }
        res.json(books)
    } else {
        res.status(404).send({message: 'no book'})
    }

})

export default router