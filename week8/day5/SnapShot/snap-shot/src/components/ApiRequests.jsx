import {createClient} from 'pexels'



export const getPhotos = async (query) => {
    const client = createClient('qvl8rwliZrIkSd8GME77bAC1gAWvG2b3clmCcljBqTuZ0bFrAVTABPaF')
    try {
        const response = await client.photos.search({query, per_page: 30})
        return response
    } catch (error) {
        console.log(error);
        
    }
    
}