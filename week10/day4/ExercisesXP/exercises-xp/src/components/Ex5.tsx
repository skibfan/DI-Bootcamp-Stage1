import axios from "axios"
import { useEffect, useState } from "react"

interface UserF {
    id: number;
    name: string;
    username: string;
    email: string;
    image: string;
  }

const Ex5 = () => {
const [users, setUsers] = useState<UserF[]>([])
useEffect(() => {
    getUsers()
},[])

const getUsers = async () => {
    try {
        const respons = await axios.get('/robots.json')
        setUsers(respons.data)
        console.log(respons.data);    
    } catch (error) {
        console.log(error);
        
    }
    
    
}
    return (<>
        {
            users.map(elem => {
                return (<div key={elem.id}>
                    <h2>{elem.name} {elem.email}</h2>
                </div>)
            })
        }
        </>)
}

export default Ex5