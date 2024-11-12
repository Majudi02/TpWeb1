const imagenes = document.querySelectorAll('.section-slider__imagen');
const indicadores = document.querySelectorAll('.indicador');
let indiceActual = 0;
const tiempoIntervalo = 3000;

function mostrarImagen() {
    imagenes.forEach((imagen, i) => imagen.classList.toggle('active', i === indiceActual));
    indicadores.forEach((indicador, i) => indicador.classList.toggle('active', i === indiceActual));
}

function cambiarImagen(paso) {
    indiceActual = (indiceActual + paso + imagenes.length) % imagenes.length;
    mostrarImagen();
    reiniciarIntervalo();
}

document.querySelector('.next-button').addEventListener('click', (e) => {
    e.preventDefault();
    cambiarImagen(1);
});

document.querySelector('.prev-button').addEventListener('click', (e) => {
    e.preventDefault();
    cambiarImagen(-1);
});

indicadores.forEach((indicador) => {
    indicador.addEventListener('click', (e) => {
        indiceActual = parseInt(indicador.getAttribute('data-index'));
        mostrarImagen();
        reiniciarIntervalo();
    });
});

let intervalo = setInterval(() => cambiarImagen(1), tiempoIntervalo);

function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(() => cambiarImagen(1), tiempoIntervalo);
}

mostrarImagen();
