
let newRequest = async () => {
    try{
    let request = await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    let data = await request.json()
    console.log(data);
    } catch(e) {
        console.log(e);
        
    }

}

newRequest()