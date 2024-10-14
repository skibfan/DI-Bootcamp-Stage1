import { useState } from "react"

const Ex3 = () => {
    const [count, setCount] = useState(0)
    return (<>
    <button onClick={() => setCount(prev => prev+1)}>+</button>
    {count}
    <button onClick={() => setCount(prev => prev-1)}>-</button>
    </>)
}

export default Ex3