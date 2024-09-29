import { createContext, useContext, useState } from 'react'
import './App.css'
import { ThemeSw } from './components/ThemeSw'
import { CharCounter } from './components/CharCounter'
import { ToDoList } from './components/ToDoList'

export const AppContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  

  return (
    <>
    {/* <CharCounter />
    <AppContext.Provider value={{theme, setTheme}}>
      <ThemeSw />
    </AppContext.Provider> */}
    <ToDoList />
    </>
  )
}

export default App
