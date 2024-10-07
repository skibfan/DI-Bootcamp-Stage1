import { useDispatch } from "react-redux"
import { removetask, toggleactive } from "./state/slice"
import { TaskRemove } from "./TaskRemove"
import './tasks.css'
import { TaskEdit } from "./TaskEdit"

export const TaskItem = ({task}) => {

    const dispatch = useDispatch()

    const toggleActive = () => {
        dispatch(toggleactive(task.id))
    }
    return (<>
    <div>
        
        <span className={task.active ? "" : "notactive"}
            onClick={() => toggleActive()} >  
            {task.task} -- {task.duedate}
             </span>
       
             <TaskEdit id={task.id}/>
            <TaskRemove id={task.id}/>
        </div>
    </>)
}