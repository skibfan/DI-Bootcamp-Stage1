import { useState } from "react"

export const Phone = (props) => {
    const [brand, setBrand] = useState('Samsung')
    const [model, setModel] = useState('Galaxy S20')
    const [color, setColor] = useState('black')
    const [year, setYear] = useState(2020)

    const changeColor = () => {

        color == 'black' ? setColor('blue') : setColor('black')
        
    }
    return (
        <>
        <h1>My phone is {brand}</h1>
        <h2>It is a {color} {model} from {year}</h2>
        <button onClick={() => changeColor()}>Change color</button>
        </>
    )
}