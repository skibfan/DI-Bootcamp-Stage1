import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddToDo } from '../components/AddToDo'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <AddToDo />
    </>
  )
}

export default App
