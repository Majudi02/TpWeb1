const cursosInformacion = JSON.parse(sessionStorage.getItem('ListaDeCursos'));





const abrirPopup = document.querySelectorAll('.nuevoCurso');
const popup = document.querySelector('.popup');
const irAlCurso = document.querySelector('.popup-button');
const tituloCurso = document.querySelector('.popup_titulo');
const imagenCurso = document.querySelector('.popup_imagen');
const descripcionCurso = document.querySelector('.popup_descripcion');




abrirPopup.forEach((boton, i) => {
    boton.addEventListener('click', () => {
        tituloCurso.textContent = cursosInformacion[i].nombre;
        imagenCurso.src = cursosInformacion[i].imagen;
        descripcionCurso.textContent = cursosInformacion[i].descripcion;
        popup.classList.add('popup__open');

        irAlCurso.addEventListener("click",()=>{
            irAlCurso.href=`./descripcion.del-curso.html?id=${cursosInformacion[i].id}`
        });
    });
});

const cerrarPopup = document.querySelector('.popup-cerrar');
cerrarPopup.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('popup__open');
});




