import { useEffect } from "react";
import { useState } from "react";

export const PostList = (props) => {

    const [myData, setmyData] = useState([])
    
    
    const getData = async () => {
        try {
            const response = await fetch('/data.json')
            const data = await response.json()
            setmyData(data)
            console.log(data);
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (<>
    {myData.map(elem => {
        return (
            <div key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.content}</p>
            </div>
        )
    })}
    </>)

}