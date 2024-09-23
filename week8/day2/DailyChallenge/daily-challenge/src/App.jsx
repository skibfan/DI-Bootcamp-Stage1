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

  const handleVote = (name) => {
    setLanguages(languages.map(elem => 
      elem.name === name 
        ? {name: elem.name, votes: elem.votes + 1 } 
        : elem
    ));
  };

  return (
    <>
      {languages.map( elem => {
        return <div key={elem.name} className='container'  >
        <p>{elem.votes}</p>
        <p>{elem.name}</p>
        <button onClick={() => handleVote(elem.name)}>Click Here</button>
    </div>
      }

      )}
    </>
  )
}

export default App
