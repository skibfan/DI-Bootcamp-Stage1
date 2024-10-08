import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "./usersSlice";

const Users = (props) => {
    const users = useSelector(state => state.usersReducer.users)
    const status = useSelector(state => state.usersReducer.status)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    if (status === 'loading') return <h2>Loading....</h2>
    
    if (status === 'failed') return <h2>wow...failed....</h2>

    return (<>
    {
        users.map(elem => {
            return (<div key={elem.id}>
                <h3>{elem.name} : {elem.email}</h3>
            </div>)
        })
    }
    </>)
}

export default Users