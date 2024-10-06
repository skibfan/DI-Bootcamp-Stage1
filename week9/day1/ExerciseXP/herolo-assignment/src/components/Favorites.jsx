import { useContext } from "react"
import { REMOVE_FAV, WeatherContext } from "../App"

export const Favorites = (props) => {

    const {state, dispatch} = useContext(WeatherContext)
    
    return (<>
        {
            state.weather.map(elem => {
               return (<div key={elem.location.name}>
                    <p>Current Temperature: <strong>{elem.current.temp_c}&deg;C</strong></p>
                    <p>Location: <strong id="serverlocation">{elem.location.name}</strong></p>
                    <img id='weathericon' src={elem.current.condition.icon}></img>
                    <button onClick={() => dispatch({type: REMOVE_FAV, payload: elem.location.name})}>Remove Favorite</button>
                </div>)
            })
        }
    </>)
}