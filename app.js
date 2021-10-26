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

const pokemonImg = document.createElement('img');

const showPokemon = async () => {
  const pokemon = await getPokemon();
  const pokemonQuizTitle = document.createElement('h1');
  const pokemonDiv = document.querySelector('.display-pokemon');
  
  pokemonQuizTitle.classList.add('pokemon-quiz-title')
  pokemonDiv.classList.add('pokemon');
  pokemonImg.classList.add('pokemon-img');
  pokemonImg.src = pokemon.sprites.back_shiny;
  pokemonQuizTitle.innerText = 'Quem é esse pokemon???'
  pokemonDiv.appendChild(pokemonQuizTitle);
  pokemonDiv.appendChild(pokemonImg);
  return pokemon
};


const addOptions = async () => {
  const pokemons = await getAllPokemons();
  const button = document.createElement('button')
  button.innerText = pokemons.results[rand(0, 151)].name;
  button.addEventListener('click', () => {
    button.classList.add('wrong-answer')
  })
  return button;
};

const options = document.querySelector('.options');
const applyOptions = async () => {
  const option = await addOptions();
  options.appendChild(option);
}
  
const resultButton = async () => {
  const result = await showPokemon();
  const button = document.createElement('button')
  button.innerText = result.name;
  button.addEventListener('click', () => {
    button.classList.add('right-answer');
    pokemonImg.src = result.sprites.front_default;
    setTimeout(() => alert('PARABENS!!!'),1000)
    setTimeout(() => location.reload(),1000);
  })
  options.appendChild(button);
}

const randTime = (min, max) => {
  max *= 1000;
  min *= 1000;
  Math.floor(Math.random()* (max - min) + min)
};

const addButtons = () => {
  setTimeout(() => {
    resultButton();  
  }, randTime(0.5,2));
  setTimeout(() => {
    applyOptions();
  }, randTime(0.5,2));
  setTimeout(() => {
    applyOptions();
  }, randTime(0.5,2));
  setTimeout(() => {
    applyOptions();
  }, randTime(0.5,2));
}



window.onload = () => {
  addButtons()
  // showPokemon()
  // console.log(getAllPokemons())
}
