import axios from "axios";


export const fetchPosts = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (e) {
        console.log(e);
    }
}