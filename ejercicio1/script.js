function obtenerMiPokemon() {
    const NumeroPokemonRandom = Math.floor(Math.random() * 898) + 1; // dice que hay 1281 pokemon
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${NumeroPokemonRandom}/`;
    //console.log(apiUrl);
    //console.log(NumeroPokemonRandom);
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //alert(apiUrl+`Id Pokemon: ${data.id} `+` Nombre: ${data.name}`+' Tipos: '+);
        console.log(apiUrl);
        console.log(`Id Pokemon: ${data.id}`);
        console.log(`Nombre: ${data.name}`);
        console.log('Tipos:');
        const Tipos=[];
        for (const type of data.types) {
            Tipos.push(type.type.name);  
            console.log(type.type.name);
        }
        console.log('Tipos:', Tipos);
        alert(apiUrl+` Id Pokemon: ${data.id} `+` Nombre: ${data.name}`+' Tipos: '+ Tipos);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  