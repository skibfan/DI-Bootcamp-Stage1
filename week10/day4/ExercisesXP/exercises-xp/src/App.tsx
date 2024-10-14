import './App.css'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4'
import Ex5 from './components/Ex5'


function App() {
  return (
    <>
      <Ex2 name='myname'/>
      <Ex3/>
      <Ex4 name='Bob' age={25}/>
      <Ex4 />
      <Ex5 />
    </>
  )
}

export default App
