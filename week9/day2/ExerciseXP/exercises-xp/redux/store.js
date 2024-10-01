import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { todoReducer } from './reducers'


const reducer = combineReducers({
    todoReducer
})


export const store = configureStore({
    reducer
})