import { useContext } from "react"
import { DEL_TASK, TasksContext } from "../App"



export const TaskRemove = ({ id }) => {
    const {dispatch} = useContext(TasksContext)
    return (<>
    <button onClick={() => dispatch({type: DEL_TASK, payload: id})}>X</button>
    </>)
}