let pokemonName = document.getElementById('name');
let imgPokemonFront = document.getElementById('pokemonImg');
let imgPokemonBack = document.getElementById('pokemonImg2');
const btnPokemon = document.getElementById('buscarPokemon');
const buscarPokemon = document.getElementById('buscarPokemon');

const pokeapi = 'https://pokeapi.co/api/v2/pokemon/';


const getPokemon = async (id) => { 

    const response = await fetch(`${ pokeapi }/${ id }`);
    const data = await response.json();
    return data;
}

const init = async () => {
    const firstPokemon = await getPokemon( 150 );
    updatePokemon( firstPokemon );
}

const updatePokemon = ( pokemon ) => {
    pokemonName.innerHTML = pokemon.name;
    imgPokemonFront.src = pokemon.sprites.front_default;
    imgPokemonBack.src = pokemon.sprites.back_default;
}

buscarPokemon.addEventListener( 'change', async (event) =>{

        
    const pokemon = await getPokemon(buscarPokemon.value);
    updatePokemon(pokemon);

})

init();

