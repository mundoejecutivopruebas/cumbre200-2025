document.addEventListener("DOMContentLoaded", function () {
    const jsonUrl = '../assets/json/package.json';
    const contenedorTarjetas = document.getElementById('contenedor-tarjetas-soporte');
    const inputBusqueda = document.querySelector('.input-4');
    let tarjetasData = [];
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            tarjetasData = data.tarjetas;
            mostrarTarjetas(tarjetasData);
        })
        .catch(error => {
            console.error('Error cargando el archivo JSON:', error);
        });
    function mostrarTarjetas(tarjetas) {
        contenedorTarjetas.innerHTML = '';
        tarjetas.forEach(tarjeta => {
            const tarjetaDiv = document.createElement('a');
            tarjetaDiv.classList.add('tarjeta-3');

            if (tarjeta.Enlace && tarjeta.Enlace.href) {
                tarjetaDiv.href = tarjeta.Enlace.href;
            }
            const titulo = document.createElement('p');
            titulo.classList.add(tarjeta.Titulo.clase);
            titulo.textContent = tarjeta.Titulo.texto;
            const descripcion = document.createElement('p');
            descripcion.classList.add(tarjeta.Descripcion.clase);
            descripcion.textContent = tarjeta.Descripcion.texto;
            tarjetaDiv.appendChild(titulo);
            tarjetaDiv.appendChild(descripcion);
            contenedorTarjetas.appendChild(tarjetaDiv);
        });
    }
    function filtrarTarjetas(query) {
        const tarjetasFiltradas = tarjetasData.filter(tarjeta => {
            const titulo = tarjeta.Titulo.texto.toLowerCase();
            const descripcion = tarjeta.Descripcion.texto.toLowerCase();
            return titulo.includes(query) || descripcion.includes(query);
        });
        mostrarTarjetas(tarjetasFiltradas);
    }
    inputBusqueda.addEventListener('input', function () {
        const query = inputBusqueda.value.toLowerCase();
        filtrarTarjetas(query);
    });
});