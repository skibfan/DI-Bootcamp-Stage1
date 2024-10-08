import { useFilterBooks, useGenreSelector } from "./state/hooks"

const Genre = (props) => {

    const genres = useGenreSelector()
    const callFilterBooks = useFilterBooks()
    

    return (<>
    <select onChange={(e) => callFilterBooks(e.target.value)}>
        <option value={'default'}>Select Genre...</option>
        {
            genres.map(elem => {
                return (<option key={elem} value={elem}>
                    {elem}
                </option>)
            })
        }
    </select>
    </>)
}

export default Genre
