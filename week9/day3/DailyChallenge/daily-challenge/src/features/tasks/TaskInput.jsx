import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addnewtask } from "./state/slice"

export const TaskInput = (props) => {
    const dispatch = useDispatch()
    const newtaskRef = useRef('')
    const duedateRef = useRef()

    const addTask = () => {
        const value = newtaskRef.current?.value.trim()
        const dueDate = duedateRef.current?.value
        if (value == "") return
        dispatch(addnewtask({value, dueDate}))
        newtaskRef.current.value = ""
    }

    return (<>
        <input ref={newtaskRef} placeholder="Add new task..."/>
        <input type="date" ref={duedateRef} />
        <button onClick={() => addTask()}>Add Task</button>
    </>)
}