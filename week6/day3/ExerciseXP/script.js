
function loading() {
    let myDiv = document.getElementById('curelem')
    let loadingEl = document.createElement('i')
    loadingEl.classList.add('fa-solid', 'fa-cog', 'fa-spin') 
    loadingEl.style.fontSize = '64px'
    myDiv.replaceChildren(loadingEl)
    let loadingStr = document.createElement('p')
    loadingStr.textContent = 'Loading...'
    myDiv.appendChild(loadingStr)
}

const findSomeone = async () => {
    loading()
    curId = Math.floor(Math.random() * 83)
    try{
        let response = await fetch(`https://www.swapi.tech/api/people/${curId}`)
        let data = await response.json()
        createMyElem(data.result.properties, curId)
    } catch(e) {
        let errorMessage = document.createElement('p')
        errorMessage.textContent = "Oh No! That person isn't available." 
        document.getElementById('curelem').replaceChildren(errorMessage)
        console.log(e); 
    }

}

const createMyElem = async (data, curId) => {
    let curChar = document.createElement('div')

    let nameL = document.createElement('h4')
    nameL.textContent = `NAME: ${data.name}`
    curChar.appendChild(nameL)
    let heightL = document.createElement('p')
    heightL.textContent = `Height: ${data.height}`
    curChar.appendChild(heightL)
    let genderL = document.createElement('p')
    genderL.textContent = `Gender: ${data.gender}`
    curChar.appendChild(genderL)
    let birthYL = document.createElement('p')
    birthYL.textContent = `Birth Year: ${data.birth_year}`
    curChar.appendChild(birthYL)
    let homeWoL = document.createElement('p')
    let planetName = await getPlanet(data.homeworld)
    if (planetName) {
        homeWoL.textContent = `Home World: ${planetName}`
        curChar.appendChild(homeWoL)
        document.getElementById('curelem').replaceChildren(curChar)
    }
}

const getPlanet = async(homeworld) => {
    try{
        let response = await fetch(homeworld)
        let data = await response.json()
        return data.result.properties.name
    } catch(e) {
        let errorMessage = document.createElement('p')
        errorMessage.textContent = "Oh No! That person isn't available." 
        document.getElementById('curelem').replaceChildren(errorMessage)
        console.log(e); 
    }
}


findSomeone()
