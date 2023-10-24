const inputValue = document.querySelector('#inputValue')
const PokemonName = document.querySelector('.PokemonName')
const btnPrev = document.querySelector('#btnPrev')
const btnNext = document.querySelector('#btnNext')

const pokemonImage = document.querySelector('.pokemon__image')
const form = document.querySelector('form')


let incremento =1

const requisicaoAPI = async (pokemon) => {

 const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon} `)
 const dados = await API.json()
 return dados

}

const renderPokemon = async (pokemon) => {


    try{
        const DadosRender = await requisicaoAPI(pokemon)
        PokemonName.innerHTML = DadosRender.name
        pokemonImage.src = DadosRender['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default']
        

    }

    catch{

     PokemonName.innerHTML = 'ERRO'
     pokemonImage.src = ''

    }




}

renderPokemon(incremento)

form.addEventListener('submit', (e) => {
e.preventDefault()
  renderPokemon(inputValue.value.toLowerCase())
   inputValue.value = ''


})


btnPrev.addEventListener('click', () => {
 if(incremento>1)
 {
  incremento-=1
  renderPokemon(incremento)

 }

})

btnNext.addEventListener('click', () => {

  incremento+=1
  renderPokemon(incremento)

})







