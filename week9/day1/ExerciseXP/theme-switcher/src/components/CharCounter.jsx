import { useEffect, useRef, useState } from "react"

export const CharCounter = (props) => {
    const uinputRef = useRef('')
    const [counter, setCounter] = useState(0)

    const myHandler = (value) => {
        uinputRef.current = value
        setCounter(uinputRef.current.length)
    }

    return (<>
    <input type="text" onChange={(e) => myHandler(e.target.value)}/>
    <h2>{counter}</h2>
    </>)
}