import { useState, useEffect } from "react"

export const Example1 = (props) => {

    const [myData, setmyData] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('/seconddata.json')
            const data = await response.json()
            setmyData(data.SocialMedias)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (<>
        {myData.map(elem => {
            return <div key={elem}>{elem}</div>
    })}
    </>)

}