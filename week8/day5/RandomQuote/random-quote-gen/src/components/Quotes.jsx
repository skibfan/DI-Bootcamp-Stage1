import { useEffect } from "react";
import { quotes } from "./QuotesDatabase";
import { useState } from "react";
import './Quotes.css'
export const Quotes = (props) => {

    const [curQuote, setCurQuoute] = useState('')
    const [color, setColor] = useState()

    const getRandQuote = () => {
        const availableQuotes = quotes.filter(elem => elem.quote != curQuote.quote)
        const quote = availableQuotes[(Math.floor(Math.random() * availableQuotes.length))]
        setCurQuoute(quote)
        getRandomColor()
    }

    const getRandomColor = () => {
        const hue = Math.floor(Math.random() * 360);
        // setColor(`hsl(${hue}, 70%, 80%)`)
        document.documentElement.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
        document.documentElement.style.transition = 'background-color 0.5s ease'
        setColor(`hsl(${hue}, 70%, 80%)`)

    };

    
    useEffect(() => {
        getRandQuote()
        getRandomColor()
    }, [])

    return (<>
    <div className="quotes">

        <h1 style={{
            color: color,
        }}>{curQuote.quote}</h1>

        <h2 className="author" style={{
            color: color,
        }}>{curQuote.author}</h2>

        <button className='button' style={{
            backgroundColor: color,
        }}onClick={() => {getRandQuote()}}>New Quote</button>

    </div>
    </>)
}