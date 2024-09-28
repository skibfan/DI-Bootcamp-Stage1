import { useEffect, useState } from "react"

export const PostToServ = (props) => {
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL
    const [inp, setInp] = useState()
    const [resp, setResp] = useState([])
    
    const myPost = async (e) => {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inp })
        }

        const response = await fetch(`${BASE_URL}/api/hello`, options)
        const data = await response.json()
        setResp(data)
    }

    return(<>
    <form onSubmit={(e) => myPost(e)} >
      <h3>Post to Server:</h3>
      <input type='text' onChange={(e) => {setInp(e.target.value)}}/>
      <input type='submit' />
     </form>
    <h4>wow {resp.message}</h4>
    </>)
}