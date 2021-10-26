// DOM elements
const appContainer = document.querySelector('.app-container');

// API URLs
const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${rand(0, 152)}/`
const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=151`

// Function to generate random number
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);


// App main functions
// Function to get all pokemons
const getAllPokemons = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data));
};

// Function to get all pokemons
const getPokemon = () => {
  return fetch(pokemonURL)
    .then(response => response.json())
    .then(data => console.log(data));
};

const showPokemon = () => {
  const pokemonDiv = createElement('div')
  pokemonDiv.classlist.add('pokemon')
};


getPokemon()
