import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Nav = (props) => {
    const [search, setSearch] = useState()
    const navigate = useNavigate()
    
    const searchFunc = (e) => {
        e.preventDefault()
        if (search.trim()) {
          navigate(`/search/${search}`)
        }
        
    }

    return (<>
    <header>
      <nav className="nav">
        <form onSubmit={(e) => searchFunc(e)}>
            <input className="search-form" type="text" onChange={(e) => setSearch(e.target.value)}/> 
            <button type="submit">Search</button>
        </form>
        <Link to='/mountains'>Mountain</Link>{" "}
        <Link to='/beaches'>Beaches</Link>{" "}
        <Link to='/birds'>Birds</Link>{" "}
        <Link to='/food'>Food</Link>
      </nav>
    </header>
    </>)
}