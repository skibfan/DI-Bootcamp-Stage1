import { useRef } from "react"
import { useDispatch } from "react-redux";
import { TaskList } from "./TaskList";
import { addToDo } from "../redux/actions";
export const AddToDo = (props) => {
    const dispatch = useDispatch()
    const inputRef = useRef()
    return (<>
    <div>
        <input ref={inputRef}/>
        <button onClick={() => {
            dispatch(addToDo(inputRef.current.value))
            inputRef.current.value = ""
            }} >ADD</button>
        <TaskList />
    </div>
    </>)
}