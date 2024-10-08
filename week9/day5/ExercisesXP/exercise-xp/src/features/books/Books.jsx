import Genre from "./Genre"
import { useBooksSelector } from "./state/hooks"


const Books = (props) => {

    const books = useBooksSelector()

    return (<>
    <Genre />
    {
        books.map(elem => {
            return (<div key={elem.id}
            style={{border: '2px solid', padding: '5px', margin: '10px'}}>
            <h3>{elem.title}</h3>
            <h4>{elem.author}</h4>
            <p>{elem.genre}</p>
            </div>)
        })
    }
    </>)
}

export default Books