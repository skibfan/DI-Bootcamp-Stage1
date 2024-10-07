import { createSlice, nanoid } from "@reduxjs/toolkit"


const ADDNEW = 'add new task to task list'

const initialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addnewtask: (state, action) => {
            state.tasks.push({
                id: nanoid(),
                task: action.payload.value,
                duedate: action.payload.dueDate,
                active: true
            })
            state.tasks = state.tasks.sort((a, b) => new Date(a.duedate) - new Date(b.duedate))
        },
        removetask: (state, action) => {
            state.tasks = state.tasks.filter(elem => elem.id !== action.payload)
        },
        toggleactive: (state, action) => {
            const task = state.tasks.find(elem => elem.id === action.payload)
            if (task) {
                task.active = !task.active
            }
        },
        edittask: (state, action) => {
            console.log(action);
            
            const edittask = state.tasks.find(elem => elem.id === action.payload.id)
            if (edittask) {
                edittask.task = action.payload.task
            }
        }
    }
})

export const { addnewtask, removetask, toggleactive, edittask } = tasksSlice.actions
export default tasksSlice.reducer