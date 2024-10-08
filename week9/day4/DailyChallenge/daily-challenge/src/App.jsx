import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgeTracker from './features/agetracker/AgeTracker'
import 'bootstrap/dist/css/bootstrap.min.css';
// npm i bootstrap
// npm i react-bootstrap

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AgeTracker />
    </>
  )
}

export default App
