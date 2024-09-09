
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
const query = 'sun'
const rating = 'g'
const limit = 10
const offset = 2




let newRequest = async () => {
    try{
        let request = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&rating=${rating}&limit=${limit}&offset=${offset}&api_key=${apiKey}`)
        let data = await request.json()
        console.log(data);
    } catch(e) {
        console.log(e);
        
    }

}

newRequest()
