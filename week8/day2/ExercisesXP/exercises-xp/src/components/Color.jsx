import { useEffect } from "react"
import { useState } from "react"

export const Color = (props) => {
    const [favoriteColor, setFavoriteColor] = useState('red')

    useEffect(() => {
        alert('useEffect reached')
        setFavoriteColor('yellow')
    }, [favoriteColor])

    // this task is terribly written. what is expected?
    //  when should i change color to yellow? 
    // should I keep blue?
    // should I useState() to change colors? 
    // should I pass favoriteColor to useEffect? 
    // why do we even need this task?

    return (
        <>
        <h1>My Favorite Color is {favoriteColor}</h1>
        <button onClick={() => setFavoriteColor('blue')}>change to blue</button>
        </>
    )
}