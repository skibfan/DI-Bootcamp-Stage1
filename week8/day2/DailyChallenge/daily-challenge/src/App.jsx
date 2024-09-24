import { useState } from 'react'
import { Languages } from './components/Languages'
import './App.css'


function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const handleVote = (index) => {
    const newLang = [...languages]
    newLang[index].votes++
    setLanguages(newLang)
  };

  return (
    <>
      {languages.map( (elem, index) => {
        return <div key={index} className='container'  >
        <p>{elem.votes}</p>
        <p>{elem.name}</p>
        <button onClick={() => handleVote(index)}>Click Here</button>
    </div>
      }

      )}
    </>
  )
}

export default App
