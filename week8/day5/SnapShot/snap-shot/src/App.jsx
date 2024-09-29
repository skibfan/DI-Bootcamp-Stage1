import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, NavLink, Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Nav } from './components/Nav'
import { Mountain } from './components/Mountain'
import { Beaches } from './components/Beaches'
import { Birds } from './components/Birds'
import { Food } from './components/Food'
import { getPhotos } from './components/ApiRequests'
import {Searching} from './components/Searching'

function App() {
  const [count, setCount] = useState(0)


const Root = () => {
  return (<>
  <Nav />
  <Outlet />
  </>)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/mountains',
        element: <Mountain />
      }, 
      {
        path: '/beaches',
        element: <Beaches />
      },
      {
        path: '/birds',
        element: <Birds />
      },
      {
        path: '/food',
        element: <Food />
      },
      {
        path: '/search/:query',
        element: <Searching />
      }
    ]
  }
])

  return (
    <>
      <RouterProvider router={router} />
      <button onClick={() => getPhotos('birds')} >wow</button>
    </>
  )
}

export default App


// API KEY:
// qvl8rwliZrIkSd8GME77bAC1gAWvG2b3clmCcljBqTuZ0bFrAVTABPaF