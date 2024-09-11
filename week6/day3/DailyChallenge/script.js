let getAllCurrencies = async () => {
    try { 
        let response = await fetch(`https://v6.exchangerate-api.com/v6/838ec68da1ae9527ec218f04/latest/USD`)
        let data = await response.json()
        
        console.log(data);
        console.log(Object.keys(data.conversion_rates));
        return Object.keys(data.conversion_rates)
    } catch(e) {
        console.log(e);
        
    }
}


let populateSelect = async () => {
    let allCur = await getAllCurrencies()

    const fromSelector = document.getElementById('fromcur')
    const toSelector = document.getElementById('tocur')

    allCur.forEach(elem => {
        const currency = document.createElement('option')
        currency.value = elem
        currency.textContent = elem
        if (elem == 'USD') {
            currency.selected = 'selected'
        }

        fromSelector.appendChild(currency)
        
    })

    allCur.forEach(elem => {
        const currency = document.createElement('option')
        currency.value = elem
        currency.textContent = elem
        if (elem == 'ILS') {
            currency.selected = 'selected'
        }

        toSelector.appendChild(currency)
    })
}

const getAmount = async (e) => {
    e.preventDefault()
    let fromcur = document.getElementById('fromcur').value
    let tocur = document.getElementById('tocur').value
    console.log(fromcur, tocur);
    
    try { 
        let response = await fetch(`https://v6.exchangerate-api.com/v6/838ec68da1ae9527ec218f04/latest/${fromcur}`)
        let data = await response.json()
        let exchangerate = data.conversion_rates[tocur]

        let amount = document.getElementById('amounttoconv').value

        let resultcalc = document.getElementById('resultcalc')
        resultcalc.value = `${(amount * exchangerate).toFixed(2)} ${tocur}`
    } catch(e) {
        console.log(e);
    }
}

populateSelect()