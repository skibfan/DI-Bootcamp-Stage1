import {useSelector} from 'react-redux'
import { TaskItem } from './TaskItem'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export const TasksList = (props) => {
    const tasks = useSelector(state => state.tasksReducer.tasks)
    const dateRef = useRef()
    const [filterDate, setFilterDate] = useState()
    const [taskList, setTaskList] = useState(tasks)

    useEffect(() => {
        if (filterDate) {
            setTaskList(tasks.filter((elem) => new Date(elem.duedate).toDateString() === new Date(filterDate).toDateString()))
        } else {
            setTaskList(tasks)
        }
    }, [filterDate])

    return (<>
        <p>Your tasks at: 
            <input type='date' ref={dateRef} onChange={(e) => setFilterDate(e.target.value)}/>
            <button onClick={() => {
                dateRef.current.value = ""
                setFilterDate()
                }}>clear</button>
        </p>
        {
            taskList.map(elem => {
                return (<TaskItem key={elem.id} task={elem} />)
            })
        }
    
    </>)
}