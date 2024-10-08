import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersReducer from '../features/usersSlice'

const appReducer = combineReducers({
  usersReducer
});


const store = configureStore({
  reducer: appReducer,
});

export default store;