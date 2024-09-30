import { useDispatch, useSelector } from "react-redux"
import { delToDo, doneToDo } from "../redux/actions"

export const TaskList = (props) => {
    const tasks = useSelector(state => state.todoReducer.tasks)

    const dispatch = useDispatch()
    
    return (<>
        {
            tasks.map(elem => {

                return (<div key={elem.id} 
                style={{backgroundColor: elem.active ? "darkolivegreen" : "darkred"}}
                >
                     
                     <button onClick={() => 
                        dispatch(doneToDo(elem.id))
                        }>Done</button> {" "}
                    {elem.task} {" "}
                    <button onClick={() => dispatch(delToDo(elem.id))}>X</button>
                </div>)
            })
        }
    </>)
}