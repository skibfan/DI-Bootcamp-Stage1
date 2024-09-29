import { useState } from "react"
import { getPhotos } from "./ApiRequests"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const Searching = (props) => {
    const [myPhotos, setMyPhotos] = useState([])
    const {query} = useParams()

    const fetchPhotos = async () => {
        const photos = await getPhotos(query)
        setMyPhotos(photos.photos)
        console.log(photos.photos);
        
    }

    useEffect(() => {
        fetchPhotos()
    }, [])
    

    return (<>
    <div className="photocontainer">
        {myPhotos.map(elem => {
            return (<div  key={elem.id} className="singlephoto">
                <img src={elem.src.medium} />
                </div>)
        })}
    </div>
    </>)
}