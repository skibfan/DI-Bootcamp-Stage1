import { useState } from "react"

export const Caluclator = (props) => {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [result, setResult] = useState(0)
    const [userSelect, setUserSelect] = useState('addition')


    const addition = (e) => {
        e.preventDefault()
        
        switch (userSelect) {
            case 'addition':
                setResult((first + second).toFixed(2))
                break
            case 'substraction': 
            setResult((first - second).toFixed(2))
                break
            case 'multiplication': 
            setResult((first * second).toFixed(2))
            case 'division':
                if (second === 0) {
                    alert('no 0 division')
                    break
                } else {
                    setResult((first / second).toFixed(2))
                    break
                }
            default:
                alert('some error')
                break;
                

        }
        
        
    }

    

    return (<>
    <form onSubmit={(e) => addition(e)} className="myform">
        <div className="inputs">
        <input type="number" onChange={(e) => setFirst(Number(e.target.value))}/>
        <input type="number" onChange={(e) => setSecond(Number(e.target.value))} />
        </div>
        <select className='selector' onChange={(e) => setUserSelect(e.target.value)}>
            <option value={"addition"}>addition</option>
            <option value={"substraction"}>substraction</option>
            <option value={"multiplication"}>multiplication</option>
            <option value={"division"}>division</option>
        </select>
        <input className='go' type="submit" value={"GO!"} />
    </form>
    <h1>{result}</h1>
    </>)
}