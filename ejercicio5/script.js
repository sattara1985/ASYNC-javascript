function ObtenerCaracteristicas() {
    const IdPersonaje = prompt('Enter the ID of the Star Wars character (1-83):');
    if (!IdPersonaje || isNaN(IdPersonaje) || IdPersonaje < 1 || IdPersonaje > 83) {
      console.log('ID del personaje invalido');
      return;
    }
  
    const apiUrl = `https://swapi.dev/api/people/${IdPersonaje}/`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(`Nombre: ${data.name}`);
        console.log(`Altura: ${data.height} cm`);
        console.log(`Peso: ${data.mass} kg`);
        console.log(`Genero: ${data.gender}`);
  
        const ApareceEn= data.films;// extraigo la propiedad films del objeto data y esa lista la almaceno en ApareceEn
        if (ApareceEn.length > 0) { // conpruebo que por lo menos este en una pelicula sino se va al else
          console.log('Aparece en peliculas:');// imprime el mensaje por consola
          ApareceEn.forEach(peliculaUrl => { // utilixo este metodo forEach para iterar en la url en donde aparece ApareceEn
            fetch(peliculaUrl)// realizo de nuevo una solicitud para obtener los datos de la pelicula mediante la url
              .then(response => response.json()) // recivo la respuesta y convierto en formato json
              .then(peliculaData => console.log(peliculaData.title))//accedo a la propiedad title de peliculaData y muestro 
              .catch(error => console.error('Error fetching film data:', error));// muestro si ocurre un error en el segundo fetch
          });
        } else {
          console.log('No aparece en peliculas.');
        }
      })
      .catch(error => console.error('Error fetching character data:', error));
  }