import { act, createContext, useReducer, useRef, useState } from 'react'
import './App.css'
import {v4 as uuidv4} from 'uuid'
import { TasksList } from './components/TasksList'
export const TasksContext = createContext()
const initialState = {
  tasks: []
}

const ADD_TASK = "add_task"
export const DEL_TASK = "remove_task"

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks]
      newTasks.push({id: uuidv4(), name: action.payload, active: true})
      return {...state, tasks: newTasks}
    case DEL_TASK:
      const todelTasks = state.tasks.filter(elem => elem.id !== action.payload)
      return {...state, tasks: todelTasks}
    default:
      break
  }
  return state
}



function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  const inputRef = useRef()

  const addTask = () => {
    const value = inputRef.current.value
    dispatch({type: ADD_TASK, payload: value})
    inputRef.current.value = ""
  }


  return (
    <TasksContext.Provider value={{state, dispatch}}>
      <div>
        <input placeholder='Add Task...' ref={inputRef} />
        <button onClick={() => addTask()}>Add</button>
      </div>
      <div>
        <h2>List of Tasks</h2>
        <TasksList />
      </div>
    </TasksContext.Provider>
  )
}

export default App
