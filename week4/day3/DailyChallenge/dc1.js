let planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
]


let planetColors = [
    "gray",        // Mercury
    "yellow",      // Venus
    "blue",        // Earth
    "red",         // Mars
    "orange",      // Jupiter
    "lightgoldenrodyellow", // Saturn
    "lightblue",   // Uranus
    "darkblue"     // Neptune
]



function createPlanets(planet, planetColor) {
    let plan = document.createElement('div')
    plan.classList.add('planet')
    plan.textContent = planet
    plan.style.backgroundColor = planetColor
    document.body.appendChild(plan)
}

for (i = 0; i < planets.length; i++) {
    createPlanets(planets[i], planetColors[i])
}



