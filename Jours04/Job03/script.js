document.getElementById("filter-btn").addEventListener("click", async () => {
    const idInput = document.getElementById("id-input").value.trim();
    const nameInput = document.getElementById("name-input").value.trim().toLowerCase();
    const typeInput = document.getElementById("type-select").value;

    const response = await fetch("pokemon.json");
    const pokemons = await response.json();

    const filteredPokemons = pokemons.filter(pokemon => {
        const matchesID = idInput === "" || pokemon.id.toString() === idInput;
        const matchesName = nameInput === "" || pokemon.name.english.toLowerCase().includes(nameInput);
        const matchesType = typeInput === "" || pokemon.type.includes(typeInput);
        return matchesID && matchesName && matchesType;
    });

    displayPokemons(filteredPokemons);
});

function displayPokemons(pokemons) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    if (pokemons.length === 0) {
        resultsDiv.innerHTML = "<p>Aucun Pokémon trouvé.</p>";
        return;
    }

    pokemons.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("pokemon-card");
        card.innerHTML = `
            <h3>${pokemon.name.english}</h3>
            <p>ID: ${pokemon.id}</p>
            <p>Type: ${pokemon.type.join(", ")}</p>
            <p>HP: ${pokemon.base.HP}</p>
            <p>Attack: ${pokemon.base.Attack}</p>
        `;
        resultsDiv.appendChild(card);
    });
}