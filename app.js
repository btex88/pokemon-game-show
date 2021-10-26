// DOM elements
const appContainer = document.querySelector('.app-container');

// Function to generate random number
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

// API URLs
const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${rand(0, 152)}/`
const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=151`



// App main functions
// Function to get all pokemons
const getAllPokemons = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => data);
};

// Function to get all pokemons
const getPokemon = () => {
  return fetch(pokemonURL)
    .then(response => response.json())
    .then(data => data);
};

const showPokemon = async () => {
  const pokemon = await getPokemon();
  const pokemonDiv = document.createElement('div');
  const pokemonImg = document.createElement('img');
  pokemonDiv.classList.add('pokemon');
  pokemonImg.classList.add('pokemon-img');
  pokemonImg.src = pokemon.sprites.back_shiny;
  pokemonDiv.appendChild(pokemonImg);
  appContainer.appendChild(pokemonDiv);
};


window.onload = () => {
  showPokemon()
}
