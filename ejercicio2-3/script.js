
function BusquedaPorTitulo() {
  const titulo = prompt('Ingresa el nombre del Libro:');
  if (!titulo) {
    console.log('No has ingresado nada intenta de nuevo');
    alert('No has ingresado nada intenta de nuevo');
    return;
  }

  const apiUrl = `http://openlibrary.org/search.json?q=${encodeURIComponent(titulo)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const PrimerLibro = data.docs[0];
      if (PrimerLibro) {
        //console.log('Titulo:', data);
        console.log('Titulo:', PrimerLibro.title);
        console.log('Autor/es:', PrimerLibro.author_name);

      } else {
        console.log('Lo siento, no he encontrado el libro');
        alert('Lo siento, no he encontrado el libro');
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}
  


// fetch(apiUrl)//busqueda relacionada con el nombre 
//     .then(response => response.json())
//     .then(data => {
//       if (data.docs.length > 0) {
//         const PrimerLibro = data.docs[0];
//         const NombreAutor = PrimerLibro.author_name ? PrimerLibro.author_name[0] : 'Unknown';
//         console.log(`Titulo: ${PrimerLibro.title}`);
//         console.log(`Autor: ${NombreAutor}`);
//         console.log('libros relacionados con el nombre:');
//         for (const libro of data.docs) {
//           console.log(libro.title);
//         }
//       } else {
//         console.log('Lo siento, no he encontrado el libro');
//         alert('Lo siento, no he encontrado el libro');
//       }
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }








function BusquedaPorAutor() {
  const NombreAutor = prompt('Enter the name of the author:');
  if (!NombreAutor) {
    console.log('No has ingresado nada intenta de nuevo.');
    return;
  }

  const apiUrl = `http://openlibrary.org/search.json?author=${encodeURIComponent(NombreAutor)}`;
  

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let contador=0;
      if (data.docs.length > 0) {
        console.log(`Libros escritos por ${NombreAutor}:`);
        for (const libro of data.docs) {
          console.log(libro.title);
          contador=contador+1;
        }
      } else {
        console.log(`No books found by ${NombreAutor}.`);
      }
      console.log(`Cantidad de libros escritos: ${contador}:`);
    })
    .catch(error => console.error('Error fetching data:', error));
}
