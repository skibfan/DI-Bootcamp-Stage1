import { useState, useEffect } from "react"

export const Example2 = (props) => {

    const [myData, setmyData] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('/seconddata.json')
            const data = await response.json()
            setmyData(data.Skills)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (<>
        {myData.map(elem => {
            return <div key={elem.Area}>
                <h2>{elem.Area}</h2>
                {elem.SkillSet.map(skill => {
                    return (<div key={skill.Name}><p>{skill.Name} - {skill.Hot ? "HOT" : "Not so hot"}</p></div>)
                })}
                </div>
    })}
    </>)

}