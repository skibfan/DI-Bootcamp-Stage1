import { useDispatch } from "react-redux";
import { edittask } from "./state/slice";
export const TaskEdit = ({id}) => {
    const dispatch = useDispatch()


    const handleEditTask = () => {
        const newTask =  prompt("Your edited task:", ).trim()
        console.log(newTask);
        if (newTask != "") {
            dispatch(edittask({id, task: newTask}))
        }
    }

    return (<>
    <button onClick={() => handleEditTask()} >Edit</button>
    </>)
}