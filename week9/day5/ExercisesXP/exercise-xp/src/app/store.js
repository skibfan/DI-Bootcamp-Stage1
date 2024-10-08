import {combineReducers, configureStore} from '@reduxjs/toolkit'
import booksReducer from '../features/books/state/booksSlice'

const appReducer = combineReducers({
    booksReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store