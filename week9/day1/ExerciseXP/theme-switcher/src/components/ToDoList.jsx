import { useReducer, useRef, useState } from "react"
const reducer = (state, action) => {
    
    switch(action.type) {
        case ADD: 
            return [...state, {id: Date.now(), text: action.payload}]
        case DEL:
            return state.filter(elem => elem.id != action.payload)
        default:
            break
    }
}

const ADD = 'ADD'
const DEL = "DEL"

export const ToDoList = (props) => {
    const [state, dispatch] = useReducer(reducer, [])
    const todoRef = useRef('')

    
    return (<>
    <input ref={todoRef} type="text" placeholder="What you gonna do?"  />
    <button onClick={() => dispatch({type: ADD, payload: todoRef.current.value})}>Add</button>
    
    <ul>
        
    </ul>
    {state.map(elem => {
        return <li key={elem.id}>
            {elem.text}
            <button onClick={() => dispatch({type: DEL, payload: elem.id})} >Remove</button>
        </li>
    })}
    </>)
}