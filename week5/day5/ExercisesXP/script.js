const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];



let myContainer = document.createElement('div')
myContainer.classList.add('container')
document.body.appendChild(myContainer)

function createRobot(robot) {
    // create all
    let curDiv = document.createElement('div')
    curDiv.id = robot.id
    curDiv.classList.add('card')
    // let id = document.createElement('p')
    // id.textContent = robot.id
    let name = document.createElement('h2')
    name.textContent = robot.name
    let username = document.createElement('p')
    username.textContent = robot.username
    let email = document.createElement('p')
    email.textContent = robot.email
    let image = document.createElement('img')
    image.classList.add('img')
    image.src = robot.image
    



    // append all
    // curDiv.appendChild(id)
    curDiv.appendChild(image)
    curDiv.appendChild(name)
    curDiv.appendChild(username)
    curDiv.appendChild(email)
    


    document.getElementsByClassName('container')[0].appendChild(curDiv)
}

function displayRobots(robots) {
    myContainer.innerHTML = ''
    robots.forEach(robot => {createRobot(robot)});
}

function filterRobots(searchLine) {
    return robots.filter(robot => 
        robot.name.toLowerCase().includes(searchLine.toLowerCase())
    )}

let mform = document.getElementById('mysearch')
mform.addEventListener('input', function(e) {
    const search = e.target.value
    const filteredRobots = filterRobots(search)
    displayRobots(filteredRobots)
})


displayRobots(robots)