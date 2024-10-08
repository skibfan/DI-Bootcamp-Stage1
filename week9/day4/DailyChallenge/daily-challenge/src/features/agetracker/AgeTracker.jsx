// npm i react-bootstrap
import Spinner from 'react-bootstrap/Spinner';


import { useDispatch, useSelector } from "react-redux"
import { addAge, minusAge } from "./ageTrackerSlice"

const AgeTracker = (props) => {
    const age = useSelector(state => state.ageTrackerReducer.age)
    const status = useSelector(state => state.ageTrackerReducer.status)
    const dispatch = useDispatch()

    return (<>
    <h2>{status}</h2>
        <div>
            <button onClick={() => dispatch(minusAge())}>-</button>
            {
                status === "success" ? age : <Spinner animation="grow" />
            }
            <button onClick={() => dispatch(addAge())}>+</button>
        </div>
    </>)
}

export default AgeTracker
