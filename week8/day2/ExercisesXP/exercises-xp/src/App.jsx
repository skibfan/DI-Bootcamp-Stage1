
import { Car } from './components/car'
import { Color } from './components/Color'
import { Phone } from './components/Phone'

function App() {
  const carinfo = {name: "Ford", model: "Mustang"}
  return (
    <>
     <Car model={carinfo.model} />
     <Phone></Phone>
     <Color></Color>
    </>
  )
}

export default App
