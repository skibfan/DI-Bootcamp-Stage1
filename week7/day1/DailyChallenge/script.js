let counter = 0
let score = 0

const main = () => {
    getData('http://127.0.0.1:3008/quiz')
    .then(myD => {
        console.log(myD);
        currentGame = myD
        render(myD)
    })
}

const getData = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (e) {
        console.log(e);
    }
}


const render = (arr) => {
    if (counter == arr.length) {
        const myform = document.getElementById('answerform')
        myform.innerHTML = `<div>End of the game! Check your score and good luck next time!</div>`
        const container = document.getElementById('currentq')
        container.innerHTML = ''
    } else {
        const container = document.getElementById('currentq')
        container.innerHTML = ''
        const html = `<p> ${arr[counter].question} </p>`
        container.innerHTML = html
    }
}


const getnext = async (e) => {
    e.preventDefault()
    const answer = e.target.answer.value

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ answer })
    }
    try {
        const result = await fetch('/quiz', options)
        const data = await result.json()
        if (data.correct) {
            score+=1
            alert('correct answer!')
            document.getElementById('score').textContent = score
        } else {
            alert('you are wrong!')
        }
    } catch (e) {
        console.log(e);
        
    }
    e.target.answer.value = ''
    counter++
    main()
}

main()