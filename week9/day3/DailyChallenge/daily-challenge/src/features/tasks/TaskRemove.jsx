import { useDispatch } from "react-redux";
import { removetask } from "./state/slice";

export const TaskRemove = ({id}) => {

    const dispatch = useDispatch()

    const removeTask = () => {
        dispatch(removetask(id))
    }

    return (<button onClick={() => removeTask()}>X</button>)
}