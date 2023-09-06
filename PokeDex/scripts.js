const pokemonContainer = document.getElementById("pokemonContainer");
const filterInput = document.getElementById("filterInput");
const sortSelect = document.getElementById("sortSelect");

let pokemonData = [];

//fetch data 
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

//fetch all pokemon
async function fetchPokemon() {
    const initialResponse = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokemonUrls = initialResponse.results.map((result) => result.url);

    const pokemonDetails = await Promise.all(pokemonUrls.map(fetchData));

    pokemonData = pokemonDetails.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((type) => type.type.name),
        image: pokemon.sprites.other["dream_world"].front_default,
    }));

    displayPokemon(pokemonData);
}

//display cards
function displayPokemon(pokemonList) {
    pokemonContainer.innerHTML = "";

    pokemonList.forEach((pokemon) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <p>ID: ${pokemon.id}</p>
            <p>Name: ${pokemon.name}</p>
            <p>Type: ${pokemon.types.join(", ")}</p>
            <img src="${pokemon.image}" alt="${pokemon.name}">
        `;
        pokemonContainer.appendChild(card);
    });
}

//sort
function sortPokemon() {
    const sortBy = sortSelect.value;
    let sortedPokemon = [...pokemonData];

    switch (sortBy) {
        case "idAsc":
            sortedPokemon.sort((a, b) => a.id - b.id);
            break;
        case "idDesc":
            sortedPokemon.sort((a, b) => b.id - a.id);
            break;
        case "nameAsc":
            sortedPokemon.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "nameDesc":
            sortedPokemon.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }

    displayPokemon(sortedPokemon);
}

//filter
function filterPokemon() {
    const filterText = filterInput.value.toLowerCase();
    const filteredPokemon = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filterText) || String(pokemon.id).includes(filterText)
    );

    displayPokemon(filteredPokemon);
}

//initial display
fetchPokemon();

