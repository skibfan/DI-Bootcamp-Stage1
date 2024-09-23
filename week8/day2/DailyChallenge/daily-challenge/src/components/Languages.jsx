import { useState } from "react"

export const Languages = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div key={props.name}>
            <p>{count}</p>
            <p>{props.name}</p>
            <button onClick={() => setCount(count + 1)}>Click Here</button>
        </div>
    )
}