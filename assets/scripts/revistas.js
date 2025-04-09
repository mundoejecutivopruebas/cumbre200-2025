// Cargar el contenido JSON desde la URL
fetch('https://xandacompany.github.io/assets/json/revistas.json')
    .then(response => response.json())
    .then(data => {
        // Obtener las revistas de "especialme"
        const revistasEspecialme = data.especialme;
        
        // Obtener las primeras 5 revistas de "mujer_ejecutiva"
        const revistasMujerEjecutiva = data.mujer_ejecutiva.slice(0, 5);
        
        // Seleccionar el contenedor donde se agregarán las tarjetas
        const container = document.getElementById('revistas-container');

        // Función para crear tarjetas a partir de un array de revistas
        const crearTarjetas = (revistas) => {
            revistas.forEach(revista => {
                // Crear la tarjeta para cada revista
                const tarjeta = document.createElement('div');
                tarjeta.classList.add('tarjeta');

                // Insertar el contenido de la revista dentro de la tarjeta
                tarjeta.innerHTML = `
                    <img src="${revista.imagenPortada}" alt="${revista.altText}">
                    <h3>${revista.titulo}</h3>
                    <p>${revista.fecha}</p>
                    <a href="${revista.enlace_revista}" target="_blank">Ver revista</a>
                `;

                // Agregar la tarjeta al contenedor
                container.appendChild(tarjeta);
            });
        };

        // Crear tarjetas para "especialme"
        crearTarjetas(revistasEspecialme);
        
        // Crear tarjetas para las primeras 5 revistas de "mujer_ejecutiva"
        crearTarjetas(revistasMujerEjecutiva);
    })
    .catch(error => {
        console.error('Error al cargar el JSON:', error);
    });