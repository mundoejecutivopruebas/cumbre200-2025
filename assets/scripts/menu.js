window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('preload-container').style.transition = 'opacity 1s ease-out';
        document.getElementById('preload-container').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('preload-container').style.display = 'none';
        }, 1000);
    }, 3200);
});
const prevButton = document.querySelector('.carrusel-prev');
const nextButton = document.querySelector('.carrusel-next');
const carrusel = document.querySelector('.contenedor-carrusel-1');
prevButton.addEventListener('click', () => {
  carrusel.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
});
nextButton.addEventListener('click', () => {
  carrusel.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});
const prevButton2 = document.querySelector('#carrusel-prev-2');
const nextButton2 = document.querySelector('#carrusel-next-2');
const carrusel2 = document.querySelector('#contenedor-carrusel-1-2');
prevButton2.addEventListener('click', () => {
  carrusel2.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
});
nextButton2.addEventListener('click', () => {
  carrusel2.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});
const prevButton3 = document.querySelector('#carrusel-prev-3');
const nextButton3 = document.querySelector('#carrusel-next-3');
const carrusel3 = document.querySelector('#contenedor-carrusel-1-3');
prevButton3.addEventListener('click', () => {
  carrusel3.scrollBy({
    left: -300,
    behavior: 'smooth', 
  });
});
nextButton3.addEventListener('click', () => {
  carrusel3.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});
function cargarListaDeReproduccion() {
  const apiKey = 'AIzaSyAtDHe5TAlLzCdr-BvIHglbX8VKRWHBkDg';
  const playlistId = 'PLcPasP33lrPUsJEwGIRCFPTGLtoekGFZr'; 
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
  fetch(url)
      .then(response => response.json())
      .then(data => {
          const videos = data.items;
          const contenedorParte2 = document.querySelector('.contenedor-universal-parte-2');
          const contenedorParte1 = document.querySelector('.contenedor-universal-parte-1');
          const ultimoVideo = videos[0];
          mostrarVideo(ultimoVideo, contenedorParte1);
          videos.forEach(video => {
              const videoId = video.snippet.resourceId.videoId;
              const title = video.snippet.title;
              const thumbnail = video.snippet.thumbnails.medium.url;

              const videoElement = document.createElement('div');
              videoElement.classList.add('video-miniatura');
              videoElement.innerHTML = `
                  <img src="${thumbnail}" alt="${title}" data-video-id="${videoId}" loading="lazy">
                  <p>${title}</p>
              `;
              videoElement.addEventListener('click', function () {
                  mostrarVideo(video, contenedorParte1);
              });
              contenedorParte2.appendChild(videoElement);
          });
      })
      .catch(error => console.error('Error al cargar los videos:', error));
}
function mostrarVideo(video, contenedor) {
  const videoId = video.snippet.resourceId.videoId;
  const iframe = document.createElement('iframe');
  iframe.classList.add('videogrande');
  iframe.width = '100%';
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  iframe.frameborder = '0';
  iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowfullscreen = true;
  iframe.title = video.snippet.title || 'CUMBRE 200';
  contenedor.innerHTML = '';
  contenedor.appendChild(iframe);
}
document.addEventListener('DOMContentLoaded', cargarListaDeReproduccion);
if (window.innerWidth >= 0 && window.innerWidth <= 600) {
  document.getElementById('p6-1').innerHTML = "• Mercadotécnica: <br> mariana.guillen@mundoejecutivo.com.mx";
  document.getElementById('p6-2').innerHTML = "• General: <br> araceli.hernandez@mundoejecutivo.com.mx";
} else if(window.innerWidth >= 601 && window.innerWidth <= 4000){
  document.getElementById('p6-1').innerHTML = "• Mercadotécnica: mariana.guillen@mundoejecutivo.com.mx";
  document.getElementById('p6-2').innerHTML = "• General: araceli.hernandez@mundoejecutivo.com.mx";
}
document.addEventListener("DOMContentLoaded", function() {
  fetch('assets/json/package.json')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('panelistas-container');
      data.panelistas.forEach(panelista => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-1');
      const imagenDiv = document.createElement('div');
      imagenDiv.classList.add('tarjeta-1-imagen');
      const imagen = document.createElement('img');
      imagen.src = panelista.imagen;
      imagen.alt = `${panelista.nombre} | ${panelista.cargo}`;
      imagen.title = `${panelista.nombre} | ${panelista.cargo}`;
      imagen.classList.add('imagen-3');
      imagen.setAttribute('loading', 'lazy');
      imagenDiv.appendChild(imagen);
      const textoDiv = document.createElement('div');
      textoDiv.classList.add('tarjeta-1-texto');
      const textoParte1 = document.createElement('div');
      textoParte1.classList.add('tarjeta-1-texto-parte-1');
      const nombreP = document.createElement('p');
      nombreP.textContent = panelista.nombre;
      nombreP.classList.add('parrafo-13');
      const nombreP2 = document.createElement('p');
      nombreP2.textContent = panelista.cargo;
      nombreP2.classList.add('parrafo-14');
      textoParte1.appendChild(nombreP);
      textoParte1.appendChild(nombreP2);
      const textoParte2 = document.createElement('div');
      textoParte2.classList.add('tarjeta-1-texto-parte-2');
      const enlace = document.createElement('a');
      enlace.classList.add('circulo');
      enlace.href = panelista.href;
      enlace.title = "VER";
      const icono = document.createElement('i');
      icono.classList.add('fa-solid', 'fa-eye');
      icono.title = "VER";
      enlace.appendChild(icono);
      textoParte2.appendChild(enlace);
      textoDiv.appendChild(textoParte1);
      textoDiv.appendChild(textoParte2);
      tarjeta.appendChild(imagenDiv);
      tarjeta.appendChild(textoDiv);
      container.appendChild(tarjeta);
      });
  })
  .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const tarjetas = document.querySelectorAll('.tarjeta-1');
  let maxHeight = 0;
  tarjetas.forEach(tarjeta => {
  const alturaTexto = tarjeta.querySelector('.tarjeta-1-texto').offsetHeight;
  if (alturaTexto > maxHeight) {
      maxHeight = alturaTexto;
  }
  });
  tarjetas.forEach(tarjeta => {
  tarjeta.querySelector('.tarjeta-1-texto').style.height = `${maxHeight}px`;
  });
});
function initMap() {
  const location = { lat: 19.361981581902388, lng: -99.16887092434175 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "El Cantoral",
    icon: {
      url: "https://grupomundoejecutivo.com/cumbre200-2025/assets/images/pin.webp",
      scaledSize: new google.maps.Size(50, 50),
    },
  });
}
/*
const images = [1, 2, 4, 5, 7, 11]; // Lista de imágenes a mostrar
let index = 0;
const imgElement = document.querySelector(".imagen-11");

setInterval(() => {
    index = (index + 1) % images.length; // Avanza y reinicia cuando llegue al final
    imgElement.src = `assets/images/${images[index]}.webp`;
}, 3000);*/
