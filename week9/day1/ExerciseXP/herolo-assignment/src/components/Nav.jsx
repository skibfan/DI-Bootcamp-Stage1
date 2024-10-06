import { Link } from "react-router-dom"

export const Nav = (props) => {
    return (<>
    <header>
      <nav>
        <Link to='/weather'>Weather</Link>
        <Link to='/favorites'>Favorites</Link>
      </nav>
    </header>
    </>)
}