import { useState } from 'react'
import { Garage } from './garage'
import { Events } from './events'


export const Car = (props) => {
    const [carColor, setCarColor] = useState('teal')
    return (
        <>
        <Garage size="small" />
        <h1>This car is {carColor} {props.model}</h1>
        <Events></Events>
        </>
    )
}