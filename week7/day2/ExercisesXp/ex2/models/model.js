import {db} from '../config/data.js'


export const _getAllBooks = () => {
    
    try {
        return db(`books`).select(`id`, `title`, `author`, `publishedyear`)
    } catch (e) {
        throw(e)
    }
}

export const _getBookByID = async (id) => {
    try {
        const data = await db(`books`).select(`id`, `title`, `author`, `publishedyear`).where({id}).first() 
        if (!data) {
            throw new Error('no such book')
        }
        return data
    } catch (e) {
        throw(e)
    }
    
}

export const _createBook = (title, author, publishedyear) => {
    try {
        return db(`books`).insert({title, author, publishedyear}, [`id`, `title`, `author`, `publishedyear`])    
    } catch (e) {
        throw(e)
    }
}
