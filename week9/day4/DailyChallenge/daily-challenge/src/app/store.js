import {configureStore, combineReducers} from '@reduxjs/toolkit'
import ageTrackerReducer from '../features/agetracker/ageTrackerSlice'


const appReducer = combineReducers({
    ageTrackerReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store