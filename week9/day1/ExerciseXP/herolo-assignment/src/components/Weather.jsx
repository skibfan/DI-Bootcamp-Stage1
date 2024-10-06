import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import { ADD_FAVORITE, WeatherContext } from "../App";

export const Weather = (props) => {
    const [weather, setWeather] = useState()
    const cityRef = useRef()
    const {dispatch} = useContext(WeatherContext)

    const getApiData = async () => {
        const apiKey = '8d732749ef514ec9ab982933241809';

        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityRef.current.value}`);
            const data = await response.json()
            setWeather(data)
        } catch (error) {
            console.log(error);
            alert('Some error, please, try again....')
        }
    }

    return (<>
        <div>
            <input ref={cityRef}/> 
            <button onClick={() => getApiData()}>Go</button>
        </div>
        {
            cityRef.current?.value ? 
            <div>
                <p>Current Temperature: <strong>{weather.current.temp_c}&deg;C</strong></p>
                <p>Location: <strong id="serverlocation">{weather.location.name}</strong></p>
                <img id='weathericon' src={weather.current.condition.icon}></img>
                <button onClick={() => dispatch({type: ADD_FAVORITE, payload: weather})}>Add Favorite</button>
            </div>
            : null
            
        }
    </>)
}


// 8d732749ef514ec9ab982933241809