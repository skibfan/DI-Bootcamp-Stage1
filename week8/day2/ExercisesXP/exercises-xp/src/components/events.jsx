import { useState } from "react"


export const Events = (props) => {

    const [isToggleOn, setIsToggleOn] = useState(true)

    const clickMe = () => {
        return alert("I was clicked")
    }

    const handleKeyDown = (e) => {
        
        if(e.key === 'Enter'){
            alert("The Enter key was pressed, your input is: ",e.target.value)
        }
    }
    
    return (
        <>
        <button onClick={() => clickMe()}>I am a button</button>
        <input type="text" onKeyDown={() => handleKeyDown(event)} placeholder="Press the ENTER key!"></input>
        <button onClick={() => setIsToggleOn(!isToggleOn)}>{isToggleOn ? "ON" : "OFF"} </button>
        </>
    )
}