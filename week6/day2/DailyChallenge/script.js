const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
const rating = 'g'


let newSearch = async (e) => {
    e.preventDefault()
    try{
        let tag = e.target.searchline.value    
        let request = await fetch(`https://api.giphy.com/v1/gifs/random/?api_key=${apiKey}&tag=${tag}&rating=${rating}`)
        let data = await request.json()
        let curGif = data.data.images.original.url
        let curID = data.data.id
        
        let curDiv = document.createElement('div')
        curDiv.id = curID
        document.getElementById('gifbelow').appendChild(curDiv)

        let gif = document.createElement('img')
        gif.src = curGif

        let delBut = document.createElement('button')
        delBut.textContent = "Delete"
        delBut.addEventListener('click', () => {
            curDiv.remove()
            // gif.remove()
            // delBut.remove()
        })
        document.getElementById(curID).appendChild(gif)
        document.getElementById(curID).appendChild(delBut)
        
        console.log(data)

        e.target.searchline.value = ''

    } catch(e) {
        console.log(e);
    }

}


let deleteEVEYTHING = () => {
    let oldDiv = document.getElementById('gifbelow')
    oldDiv.remove()
    let newDiv = document.createElement('div')
    newDiv.id = 'gifbelow'
    document.body.appendChild(newDiv)
}
