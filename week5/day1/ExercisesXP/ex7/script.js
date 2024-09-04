

(function (name, imgSrc) {
    let temp = document.createElement('div')
    temp.textContent = name

    let img = document.createElement('img')
    img.src = imgSrc
    img.style.width = '50px'
    img.style.height = '50px'

    document.getElementsByClassName('navBar')[0].appendChild(temp)
    document.getElementsByClassName('navBar')[0].lastChild.appendChild(img)
})("Me", 'https://assets.mycast.io/actor_images/actor-samwise-gamgee-137775_large.jpg?1603418105')