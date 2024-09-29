import { createContext, useContext, useState } from 'react'
import './App.css'
import { ThemeSw } from './components/ThemeSw'

export const AppContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  

  return (
    <>
    <AppContext.Provider value={{theme, setTheme}}>
      <ThemeSw />
    </AppContext.Provider>
    </>
  )
}

export default App
