import { useState, useEffect } from "react"

export const Example3 = (props) => {

    const [myData, setmyData] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('/seconddata.json')
            const data = await response.json()
            setmyData(data.Experiences)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (<>
        {myData.map(elem => {
            return <div key={elem.companyName}>
                <h2>{elem.companyName}</h2>
                <img src={elem.logo}/>
                {elem.roles.map(role => {
                    return (<div key={role.title}><p>{role.title} - {role.description}</p>
                    <p>{role.startDate} - {role.endDate} at {role.location}</p>
                    </div>)
                })}
                </div>
    })}
    </>)

}