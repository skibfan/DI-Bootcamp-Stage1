const registerNewUser = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const username = e.target.username.value
    const first_name = e.target.first_name.value
    const last_name = e.target.last_name.value
    const password = e.target.password.value
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, username, first_name, last_name, password })
    }
    
    try {
        const result = await fetch('/register', options)
        const data = await result.json()
        
        let html = ``
        if (data.message === 'user created succesfully!') {
            html = `<p>Hello ${username}, your account is now created!</p>`
        } else { 
            html = `<p>Username already exists</p>`
        }
        document.getElementById('serverresponse').innerHTML = html
    } catch (e) {
        console.log(e); 
        document.getElementById('serverresponse').innerHTML = '<p>An error occurred. Please try again.</p>';
    }
    
}



const login = async (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    }
    
    try {
        const result = await fetch('/login', options)
        const data = await result.json()
        
        let html = ``
        console.log(data.isLogged);
        
        if (data.isLogged) {
            html = `<p>Hello ${username}!</p>`
        } else { 
            html = `<p>Username not exist</p>`
        }
        document.getElementById('serverresponse').innerHTML = html
    } catch (e) {
        console.log(e); 
        document.getElementById('serverresponse').innerHTML = '<p>An error occurred. Please try again.</p>';
    }
    
}