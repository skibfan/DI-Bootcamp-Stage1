import { useState } from "react"

export const BuggyCounter = (props) => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }


    if (counter >= 5) {
        throw new Error('I crashed!')
    }



    return (<>
    <button onClick={() => handleClick()}>Click me {counter}</button>
    </>)
}