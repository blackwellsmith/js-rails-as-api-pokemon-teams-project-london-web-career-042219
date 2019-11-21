const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', function () {
    fetch(TRAINERS_URL).then(res => res.json())
    .then( trainers => renderTrainers(trainers))
})
function renderTrainers(trainers) {
    trainers.forEach(function (trainer) {
       trainerCard(trainer) 
    })
}

function trainerCard(trainer) {
    const main = document.getElementsByTagName('main')
    const div = document.createElement('div')
    main.appendChild(div)
    div.className = "card"
    div.setAttribute('data-id=', `${trainer.id}`)
    const p = document.createElement('p')
    p.innerHTML = `${trainer.name}`
    const button1 = document.createElement('button')
    button.setAttribute('data-trainer-id=', `${trainer.id}`)
    button.innerHTML = 'Add Pokemon'
    const ul = document.createElement('ul')
    button.addEventListener('click', function (){
        fetch(POKEMONS_URL).then(res => res.json())
        .then( pokemons => renderPokemons(pokemons)) 
    })
}

function renderPokemons(pokemons) {
    pokemons.forEach(function (pokemon) {
       pokemonCard(pokemon) 
    })
}

function pokemonCard(pokemon) {
    const li = document.createElement('li')
    const button = document.createElent('button')
    button.setAttribute("id", pokemon.id)
    li.appendChild(button)
    li.innerHTML = `${pokemon.name} (${pokemon.species})`
}