import { useContext } from "react"
import { TasksContext } from "../App"
import { TaskRemove } from "./TasksRemove"

export const TasksList = (props) => {
    const {state} = useContext(TasksContext)

    return (<>
        {
            state.tasks.map(elem => {
                return (<div key={elem.id}>
                    {elem.name}
                    <TaskRemove id={elem.id} />
                </div>)
            })
        }
        </>)
}