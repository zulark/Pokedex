const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImage = document.querySelector('.pokemon_image')
const input = document.querySelector('.input_search')
const form = document.querySelector('.form')
const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')
const pokemonType = document.querySelector('.pokemonType')
const info = document.querySelector('.info')
let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (apiResponse.status === 200) {
        const data = await apiResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Procurando';
    pokemonNumber.innerHTML = '';
    pokemonType.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonImage.style.display = 'block';
        pokemonType.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonType.innerHTML = `${data['types']['0']['type']['name']}`;
        input.value = '';
        searchPokemon = data.id;


        if (pokemonType.textContent == "normal") {
            info.style.backgroundColor = '#aaaa99';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "fire") {
            info.style.backgroundColor = '#ff4422';
            info.style.color = '#fff';
        }
        else if (pokemonType.textContent == "water") {
            info.style.backgroundColor = '#3399ff';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "eletric") {
            info.style.backgroundColor = '#yellow';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "grass") {
            info.style.backgroundColor = '#77cc55';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "ice") {
            info.style.backgroundColor = '#66ccff';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "fighting") {
            info.style.backgroundColor = '#bb5544';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "poison") {
            info.style.backgroundColor = '#aa5599';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "ground") {
            info.style.backgroundColor = '#ddbb55';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "flying") {
            info.style.backgroundColor = '#8899ff';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "pyschic") {
            info.style.backgroundColor = '#ff5599';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "bug") {
            info.style.backgroundColor = '#aabb22';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "rock") {
            info.style.backgroundColor = '#bbaa66';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "ghost") {
            info.style.backgroundColor = '#6666bb';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "dragon") {
            info.style.backgroundColor = '#7766ee';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "dark") {
            info.style.backgroundColor = '#775544';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "steel") {
            info.style.backgroundColor = '#aaaabb';
            info.style.color = '#fff';

        }
        else if (pokemonType.textContent == "fairy") {
            info.style.backgroundColor = '#ee99ee';
            info.style.color = '#fff';
        }
     
    }

    else {
        pokemonImage.style.display = 'none';
        pokemonType.style.display = 'none';
        pokemonName.innerHTML = 'Nada encontrado';
        pokemonNumber.innerHTML = '';
    }
    console.log(pokemonType.textContent)
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());

});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon)
    }
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon)
});

renderPokemon(searchPokemon);

