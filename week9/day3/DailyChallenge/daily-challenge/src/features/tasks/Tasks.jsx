import { TaskInput } from "./TaskInput"
import { TasksList } from "./TasksList"

export const Tasks = (props) => {
    return (<>
        <h2>Tasks</h2>
        <TaskInput />
        <TasksList />
    </>)
}