import { NavLink } from "react-router-dom"

export const Nav = (props) => {

    return (<>
    <header>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/profile'}>Profile</NavLink>
        <NavLink to={'/shop'}>Shop</NavLink>
    </header>
    </>)
}