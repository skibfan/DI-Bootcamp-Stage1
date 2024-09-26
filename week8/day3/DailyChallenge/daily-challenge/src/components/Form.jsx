import { useEffect, useState } from "react"
import './Form.css'
import { FormComponent } from "./FormComponent"

export const Form = (props) => {

    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: "",
        age: 0,
        gender: "",
        destination: "Tel Aviv",
        dietary_restrictions: []
    })


    const myDietary = (name) => {
        const myDiet = inputs.dietary_restrictions
        const index = myDiet.findIndex(elem => elem == name)
        if (index == -1) {
            myDiet.push(name)
        } else {
            myDiet.splice(index, 1)
        }
        setInputs({...inputs, dietary_restrictions: myDiet})
    }

    

    return (<>
    <form id="myform" >
        <input type="text" className="textoviy" placeholder="First Name" onChange={ (e) => setInputs({...inputs, first_name: e.target.value})} required></input>
        <input type="text" className="textoviy" placeholder="Last Name"onChange={ (e) => setInputs({...inputs, last_name: e.target.value})} required></input>
        <input type="number" className="textoviy" placeholder="Age" onChange={ (e) => setInputs({...inputs, age: e.target.value})} required />
        <label>Male<input type="radio" id="male" name="gender" value='Male'onChange={ (e) => setInputs({...inputs, gender: e.target.value})} required /></label>
        <label>Female<input type="radio" id="female" name="gender" value='Female' onChange={ (e) => setInputs({...inputs, gender: e.target.value})} required/></label>

        <label htmlFor='destination'>Select Your Destination</label>
        <select name='destination' form="myform" onChange={ (e) => setInputs({...inputs, destination: e.target.value})} required>
                <option value="Tel Aviv">Tel Aviv</option>
                <option value="Jerusalem">Jerusalem</option>
                <option value="Zichron Ya'akov">Zichron Ya'akov</option>
        </select>

        Dietary restrictions:<br/>

        <label>Nuts Free<input type="checkbox" name="Nuts Free" onChange={ (e) => {myDietary(e.target.name)}}  ></input></label> 
        <label>
        Lactose<input type="checkbox" name="Lactose" onChange={ (e) => {myDietary(e.target.name)}} />
        </label>
        <label>Vegan<input type="checkbox" name="Vegan" onChange={ (e) => {myDietary(e.target.name)}} ></input></label> 
        <input type="submit"></input>
    </form>

    <FormComponent inputs={inputs}></FormComponent>
    </>)
}