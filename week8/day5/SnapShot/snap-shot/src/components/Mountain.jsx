import { useState } from "react"
import { getPhotos } from "./ApiRequests"
import { useEffect } from "react"

export const Mountain = (props) => {
    const [myPhotos, setMyPhotos] = useState([])

    const fetchPhotos = async () => {
        const photos = await getPhotos('Mountains')
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