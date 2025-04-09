document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.getElementById('contenedor-corazones');
    
    function generarElemento() {
        // Seleccionar aleatoriamente entre tres imágenes
        const imagen = Math.random() > 0.5 ? "../assets/images/corazon.webp" : (Math.random() > 0.4 ? "../assets/images/megusta.webp" : "../assets/images/asombro.webp");
        
        const elemento = document.createElement('img');
        elemento.src = imagen; // Usar la imagen seleccionada aleatoriamente
        elemento.alt = "Elemento";
        elemento.title = "Elemento";
        elemento.classList.add("corazon");
    
        // Posicionar el elemento aleatoriamente
        const randomX = Math.random() * (contenedor.offsetWidth - 40); // 40 es el tamaño de la imagen
        elemento.style.left = `${randomX}px`;
    
        // Agregar el elemento al contenedor
        contenedor.appendChild(elemento);
    
        // Eliminar el elemento después de que la animación termine (5 segundos)
        setTimeout(() => {
            elemento.remove();
        }, 5000);
    }
  
    // Generar un elemento cada 500 ms (medio segundo)
    setInterval(generarElemento, 500);
});