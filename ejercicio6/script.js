function AsteroidesPeligrosos() {
    const apiKey = 'I5JNShuUoVkRCsMae7itAeUzLAzbBW1sZuiYwPbO'; // RClave generada por la nasa en el correo
    const baseUrl = 'https://api.nasa.gov/neo/rest/v1/feed';
    const FechaFinal = new Date(); // fecha de hoy
    const FechaInicial = new Date();
    FechaInicial.setDate(FechaFinal.getDate() - 7); // siete dias atras
  
    const formatoFechaInicial = formatDate(FechaInicial);
    const formatoFechaFinal = formatDate(FechaFinal);
  
    const apiUrl = `${baseUrl}?start_date=${formatoFechaInicial}&end_date=${formatoFechaFinal}&api_key=${apiKey}`;
    console.log(apiUrl);
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const AstePeligrosos = [];///ARREGLO DE ALMACENAJE
        for (const date in data.near_earth_objects) {
          const AsteroideCerca = data.near_earth_objects[date];
          const PeligroAsteroide = AsteroideCerca.filter(peligrosos => peligrosos.is_potentially_hazardous_asteroid);// evalue si es true
          AstePeligrosos.push(...PeligroAsteroide);
        }
  
        if (AstePeligrosos.length > 0) {
          console.log('Asteroides peligrosos:');
          for (const peligrosos of AstePeligrosos) {

            console.log(`ID: ${peligrosos.id}, Nombre: ${peligrosos.name}, Fecha de acercamiento: ${peligrosos.close_approach_data[0].close_approach_date}, Es peligroso para la tierra: ${peligrosos.is_potentially_hazardous_asteroid}, Su Magnitud es: ${peligrosos.absolute_magnitude_h}`);
          }
        } else {
          console.log('No se encontro asteroides peligrosos');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  function formatDate(date) {
    const year = date.getFullYear();// utilice getfullyear para obtener el año
    const month = String(date.getMonth() + 1).padStart(2, '0'); // utilizo getmonth para obtener el mes en javascript los meses son desde 0 enero entonces le sumo uno y el padstart es para agregar un cero y debe quedar con dos digitos
    const day = String(date.getDate()).padStart(2, '0');// los mismo para el dia 
    return `${year}-${month}-${day}`; //retorno la fecha ya tratada
  }
  


//   {
//     "links": {
//         "self": "http://api.nasa.gov/neo/rest/v1/neo/54226796?api_key=I5JNShuUoVkRCsMae7itAeUzLAzbBW1sZuiYwPbO"
//     },
//     "id": "54226796",
//     "neo_reference_id": "54226796",
//     "name": "(2021 XG2)",
//     "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54226796",
//     "absolute_magnitude_h": 21.93,
//     "estimated_diameter": {
//         "kilometers": {
//             "estimated_diameter_min": 0.1092835959,
//             "estimated_diameter_max": 0.2443655492
//         },
//         "meters": {
//             "estimated_diameter_min": 109.2835958696,
//             "estimated_diameter_max": 244.36554919
//         },
//         "miles": {
//             "estimated_diameter_min": 0.0679056572,
//             "estimated_diameter_max": 0.1518416657
//         },
//         "feet": {
//             "estimated_diameter_min": 358.5419926728,
//             "estimated_diameter_max": 801.7242684045
//         }
//     },
//     "is_potentially_hazardous_asteroid": true,// ES TRUE
//     "close_approach_data": [
//         {
//             "close_approach_date": "2023-07-16",  // FECHA DE ACERCAMIENTO
//             "close_approach_date_full": "2023-Jul-16 09:22", // FECHA Y HORA EXACTA ACERCAMIENTO
//             "epoch_date_close_approach": 1689499320000,
//             "relative_velocity": {
//                 "kilometers_per_second": "21.0698037122",
//                 "kilometers_per_hour": "75851.2933640932",
//                 "miles_per_hour": "47131.0439239278"
//             },
//             "miss_distance": {
//                 "astronomical": "0.4331638622",
//                 "lunar": "168.5007423958",
//                 "kilometers": "64800391.146093514",
//                 "miles": "40265095.9408739332"
//             },
//             "orbiting_body": "Earth"
//         }
//     ],
//     "is_sentry_object": false
// },


// s://api.nasa.gov/neo/rest/v1/feed?start_date=2023-07-16&end_date=2023-07-23&api_key=I5JNShuUoVkRCsMae7itAeUzLAzbBW1sZuiYwPbO
// script.js:25 Asteroides peligrosos:
// script.js:27 Nombre: (2021 XG2), Fecha de acercamiento: 2023-07-16