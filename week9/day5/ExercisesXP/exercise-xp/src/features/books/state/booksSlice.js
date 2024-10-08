import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    books: [
        { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
        { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure' },
        { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
        { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
        { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 8, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Science Fiction' },
        { id: 9, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian' },
        { id: 10, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 11, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Classic' },
        { id: 12, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Philosophical Fiction' },
        { id: 13, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'Gothic Fiction' },
        { id: 14, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Philosophical Fiction' },
        { id: 15, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy' },
        { id: 16, title: 'Animal Farm', author: 'George Orwell', genre: 'Political Satire' },
        { id: 17, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Gothic Fiction' },
        { id: 18, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical Fiction' },
        { id: 19, title: 'The Odyssey', author: 'Homer', genre: 'Epic Poetry' },
        { id: 20, title: 'Don Quixote', author: 'Miguel de Cervantes', genre: 'Adventure' }
    ],
    filter: 'default'
}


const booksSlice = createSlice({
    name: "books", 
    initialState,
    reducers: {
        filterbooks: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const books = (state) => state.booksReducer.books
export const state = (state) => state.booksReducer

export const { filterbooks } = booksSlice.actions
export default booksSlice.reducer