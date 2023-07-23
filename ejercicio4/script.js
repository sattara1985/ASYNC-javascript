function ObtenerGenero(){
    const NombreBanda = prompt('Ingresa el nombre de la banda:');
    if (!NombreBanda) {
      console.log('Debes ingresar un nombre de banda.');
      return;
    }
  
    const apiUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(NombreBanda)}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const banda = data.artists;
        if (banda && banda.length > 0) {
          const BandaEncontrada = banda[0];
          console.log(`Banda: ${BandaEncontrada.strArtist}`);
          console.log(`Genero: ${BandaEncontrada.strGenre}`);
        } else {
          console.log('No pude encontrar su banda.');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }