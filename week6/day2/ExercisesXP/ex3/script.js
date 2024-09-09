
let swapi = async () => {
    try{
        let response = await fetch("https://www.swapi.tech/api/starships/9/")
        let data = await response.json()
        console.log(data.result);
        
    } catch(e) {
        console.log(e);
        
    }
}

swapi()