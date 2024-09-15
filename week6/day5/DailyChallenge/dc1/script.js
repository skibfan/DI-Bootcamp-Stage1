let score = 0
let currentGame = null;

const getData = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (e) {
        console.log(e);
    }
}

const main = () => {
    getData('http://127.0.0.1:3005/game')
    .then(myD => {
        console.log(myD);
        currentGame = myD
        render(myD)
    })
}

const render = (arr) => {
    const container = document.getElementById('emojistoshow')
    container.innerHTML = ''
    const html = arr.map((item) => {
        const element = document.createElement('div')
        const emoji = document.createElement('p')
        emoji.textContent = item.emoji
        const name = document.createElement('button')
        name.textContent = item.name
        name.addEventListener('click', () => handleGuess(item.name))
        element.appendChild(emoji)
        element.appendChild(name)
        container.appendChild(element)        
    })
}


const handleGuess = async (userGuess) => {
    if (!currentGame) return
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ emojiName: userGuess })
    }

    try {
        const result = await fetch('/guess', options)
        const data = await result.json()
        if (data.correct) {
            score += 1
            document.getElementById('score').textContent = `Score: ${score}`
            alert('Correct guess!')
        } else { 
            alert('Incorrect guess. Try again!')
        }
    } catch (e) {
        console.log(e); 
    }
    
    main()
}

main()