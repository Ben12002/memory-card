const POKEMON_AMOUNT = 490;

async function fetchPokemonData(num=12) {
    let pokemon = [];
    let random_numbers = [];
    let random_number = parseInt(Math.random() * POKEMON_AMOUNT);
    while (random_numbers.length < num){
       while (random_numbers.includes(random_number)){
           random_number = parseInt(Math.random() * POKEMON_AMOUNT);
       }
       random_numbers.push(random_number);

       try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random_number}/`);
        let data = await response.json();
        let processedData = processData(data);
        pokemon.push(processedData);
        // console.log(processedData);
       } catch(error) {
        console.error('Error fetching data:', error);
       }

    }
    // console.log(pokemon);
    return pokemon;
    
}

function processData(data){
    return { species:data["name"], imageURL:data["sprites"]["back_default"] };
}

export default fetchPokemonData