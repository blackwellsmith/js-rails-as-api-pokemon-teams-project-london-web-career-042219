const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')

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
    const div = document.createElement('div')
    main.appendChild(div)
    div.className = "card"
    div.setAttribute('data-id', `${trainer.id}`)
    const p = document.createElement('p')
    div.appendChild(p)
    p.innerHTML = `${trainer.name}`
    const button = document.createElement('button')
    p.appendChild(button)
    button.setAttribute('data-trainer-id', `${trainer.id}`)
    button.innerHTML = 'Add Pokemon'
    const ul = document.createElement('ul')
    div.appendChild(ul)
    fetch(POKEMONS_URL).then(res => res.json())
        .then(pokemon => sorted(pokemon, trainer.id))
        .then(result => renderPokemons(result))
    .then(array => array.map(li => ul.appendChild(li)))

   // button.addEventListener('click', function (){
      //  fetch(POKEMONS_URL).then(res => res.json())
     //   .then( pokemons => renderPokemons(pokemons)) 
  //  })
    
}

function renderPokemons(pokemons) {
    let array = []
    pokemons.forEach(function (poke) { 
        array.push(pokemonCard(poke))
    })
    return array
}

function pokemonCard(pokemon) {
    const li = document.createElement('li')
    let btn = document.createElement('button')
    btn.setAttribute("data-pokemon-id", pokemon.id)
    btn.setAttribute("class", 'release')
    btn.innerHTML = 'Release'
    li.appendChild(btn)
    li.innerHTML = `${pokemon.nickname} (${pokemon.species})`
    return li
}

function sorted(pokemon, trainerId) {
    array = []
    pokemon.forEach(function(poke){
        if (poke.trainer_id == trainerId) {
       array.push(poke)
        }
    })
    return array
}

