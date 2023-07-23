async function Pokemon151() {
    try {
      const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
      const response = await fetch(apiUrl);
      const data = await response.json();
      const pokemonArray = [];
  
      for (const pokemon of data.results) {
        //console.log(data);
        const DatosPokemon = await fetchPokemonData(pokemon.url);
        pokemonArray.push({
          Nombre: DatosPokemon.name,
          movimiento: DatosPokemon.moves.map(movimietoPokemon => movimietoPokemon.move.name),
          tipo: DatosPokemon.types.map(tipoPokemon => tipoPokemon.type.name),
          Altura: DatosPokemon.height,
          Ancho: DatosPokemon.weight,
        });
      }
  
      console.log("el arreglo de Pokemon",pokemonArray);
    } catch (error) {
      console.error('algo paso con los datosd:', error);
    }
  }
  
  async function fetchPokemonData(url) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.error('algo paso con los datos de url:', error);
    }
  }