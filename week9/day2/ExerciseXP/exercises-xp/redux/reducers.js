import {v4 as uuidv4} from 'uuid'
import { ADD, DEL, DONE } from './actions'

const initialState= {
    tasks: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: 
            const newTasks = [...state.tasks]
            newTasks.push({id: uuidv4(), task: action.payload, active: true})
            return {...state, tasks: newTasks}

        case DEL:
            const savedTasks = state.tasks.filter(elem => elem.id != action.payload)
            
            return {...state, tasks: savedTasks}
        case DONE:
            const allTasks = state.tasks.map(elem => elem.id == action.payload ? {...elem, active: !elem.active} : {...elem})
            
            return {...state, tasks: allTasks}
            
        default:
            return state
    }
}