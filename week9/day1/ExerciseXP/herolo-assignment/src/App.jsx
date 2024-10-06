import { createContext, useReducer } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Weather } from './components/Weather'
import { Favorites } from './components/Favorites'

const Root = () => {
  return <>
    <Nav /> 
    <Outlet />
  </>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/weather',
        element: <Weather />
      }, 
      {
        path: '/favorites',
        element: <Favorites />
      }
    
    ]
  }
])

export const WeatherContext = createContext()
export const ADD_FAVORITE = 'add a favorite weather'
export const REMOVE_FAV = 'remove this favorite'
const initialState = {
  weather: []
}
const weatherReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const newFavs = [...state.weather]
      const flag = newFavs.some(elem => elem.location.name === action.payload.location.name)
      if (!flag) {
        newFavs.push(action.payload)
        return {...state, weather: newFavs}
      }
      return state
    case REMOVE_FAV:
      const afterdelFavs = state.weather.filter(elem => elem.location.name !== action.payload)
      return {...state, weather: afterdelFavs}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(weatherReducer, initialState)

  return (
    <>
      <WeatherContext.Provider value={{state, dispatch}}>
          <RouterProvider router={router} />
      </WeatherContext.Provider>
    </>
  )
}

export default App
