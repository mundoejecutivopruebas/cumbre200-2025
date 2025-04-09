document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.getElementById('contenedor-corazones');
    
    function generarElemento() {
        // Seleccionar aleatoriamente entre tres imágenes
        const imagen = Math.random() > 0.5 ? "assets/images/logogeneral-2.webp" : (Math.random() > 0.4 ? "assets/images/android-chrome-512x512.png" : "assets/images/android-chrome-512x512.png");
        
        const elemento = document.createElement('img');
        elemento.src = imagen; // Usar la imagen seleccionada aleatoriamente
        elemento.alt = "Elemento";
        elemento.title = "Elemento";
        elemento.classList.add("corazon2");
    
        // Posicionar el elemento aleatoriamente en el contenedor
        const randomX = Math.random() * (contenedor.offsetWidth - 60); // 60 es el tamaño de la imagen
        const randomY = Math.random() * (contenedor.offsetHeight - 60); // 60 es el tamaño de la imagen
        elemento.style.left = `${randomX}px`;
        elemento.style.top = `${randomY}px`;
    
        // Agregar el elemento al contenedor
        contenedor.appendChild(elemento);
    
        // Eliminar el elemento después de que la animación termine (8 segundos)
        setTimeout(() => {
            elemento.remove();
        }, 8000);
    }
  
    // Generar un elemento cada 500 ms (medio segundo)
    setInterval(generarElemento, 500);
});
