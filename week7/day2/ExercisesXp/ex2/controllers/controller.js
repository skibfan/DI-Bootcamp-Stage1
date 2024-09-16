import {_getAllBooks, _createBook, _getBookByID} from '../models/model.js'

export const getAllBooks = async (req, res) => {
    try {
        const data = await _getAllBooks()
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({ message: 'hmmm some error'})
    }
}

export const getBookByID = async (req, res) => {
    const {id} = req.params
    try {
        const data = await _getBookByID(id)
        res.status(200).json(data)
    } catch (e) {
        res.status(404).send({message: 'no such book'})
    }
}

export const createBook = async (req, res) => {
    const {title, author, publishedyear} = req.body
    
    try {
        const data = await _createBook(title, author, publishedyear)
        res.status(200).json(data)
    } catch (e) {
        res.status(404).send({message: 'no such book'})
    }
}
