import express from 'express'
import { books } from './books.js'

const app = express()
const PORT = 3003
app.use(express.json())

app.listen(PORT, () => console.log(`listening ${PORT}`))



app.get('/books', (req,res) => {
    res.json(books)
})


app.get('/books/:id', (req,res) => {
    const {id} = req.params
    const curBook = books.find(elem => elem.id == id)
    if (!curBook) return res.status(404).send('No such book here')
    res.status(200).json(curBook)
})

app.post('/books', (req, res) => {
    const id = books.length + 1
    const {title, author, publishedYear} = req.body
    
    const newBook = {id, title, author, publishedYear}
    if (!newBook) return res.status(404).send('Not enough/incorrect info to add new book')
    books.push(newBook)
    res.status(201).json(books)
})

