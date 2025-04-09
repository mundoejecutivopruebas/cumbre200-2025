document.addEventListener("DOMContentLoaded", function() {
    fetch('../../assets/json/package.json')
    .then(response => response.json())
    .then(data => {
        const pageTitle = document.title;
        const panelista = data.panelistas.find(p => p.nombre === pageTitle);
        if (panelista) {
            const titulo = document.getElementById('panelista-1-titulo-1');
            titulo.textContent = panelista.nombre;
            const cargo = document.getElementById('panelista-1-cargo-1');
            cargo.textContent = panelista.cargo;
            const imagen = document.getElementById('imagen-panelista-1');
            imagen.src = "../../" + panelista.imagen;
            imagen.alt = panelista.nombre;
            imagen.title = panelista.nombre;
        } else {
            console.log('No se encontró un panelista que coincida con el título de la página');
        }
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
});