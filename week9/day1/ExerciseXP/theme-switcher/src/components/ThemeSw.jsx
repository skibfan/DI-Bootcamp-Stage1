import { useContext } from "react"
import { AppContext } from "../App"

export const ThemeSw = (props) => {
    const {theme, setTheme} = useContext(AppContext)


    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (<>
    <button 
    style={{backgroundColor: theme === 'light' ? "cyan" : "teal"}}
    onClick={() => changeTheme()}>
        Change to: {theme == 'light' ? "Dark Mode" : "Light Mode"}
        </button>
    </>)

}