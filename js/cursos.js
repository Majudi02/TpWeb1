
document.addEventListener("DOMContentLoaded",()=>{
    mostrarTarjetas(4);
});




const idCurso = getIdJs();

function getIdJs() {
    const url = new URL(location.href);
    return parseInt(url.searchParams.get('id'));
}


const cursos = JSON.parse(sessionStorage.getItem('ListaDeCursos'));

const cursoSeleccionado = cursos.find(cursos => cursos.id === idCurso);



const imagen = document.querySelector(".curso_imagen");
imagen.src = `${cursoSeleccionado.imagen}`;


const titulo = document.querySelector(".curso_informacion__titulo");
titulo.textContent = cursoSeleccionado.nombre;

const valor = document.querySelector(".curso_informacion__valor");
valor.textContent = `Precio: U$D ${cursoSeleccionado.precio} `;

const duracion = document.querySelector(".curso_informacion__duracion");
duracion.textContent = `Tiempo de dedicación necesario: ${cursoSeleccionado.duracion} horas`;

const descripcion = document.querySelector(".curso_informacion__descripcion");
descripcion.textContent = `Descripcion del curso: ${cursoSeleccionado.descripcion} `;

const requisitos = document.querySelector(".curso_informacion__requisitos");
requisitos.textContent = `Requisitos previos: ${cursoSeleccionado.requisitos} `;

const modalidad = document.querySelector(".curso_informacion__modadalidad");
modalidad.textContent = `Modalidad: ${cursoSeleccionado.modalidad}`;


const botonConfimar = document.querySelector(".curso_informacion__button");


const botonAgregarAlCarrito = document.querySelector(".curso_informacion__button");

botonAgregarAlCarrito.addEventListener("click", (event) => {

    agregarCursoAlCarrito(cursoSeleccionado.id);
    if (cursoSeleccionado.modalidad === "Virtual") {
        event.preventDefault();
        carritoSidebar.classList.toggle("abierto");
    }
});


if (cursoSeleccionado.modalidad === "Virtual") {
    botonConfimar.textContent = 'Pagar';
} else {
    botonConfimar.textContent = 'Inscribirse';
    botonConfimar.href = `./form-de-inscripcion.html?id=${idCurso}`;
}


document.addEventListener("DOMContentLoaded", () => {
    const unidades = document.querySelectorAll(".curso_summary");

    cursoSeleccionado.contenido.forEach((unidad, unidadesIndex) => {
        unidades[unidadesIndex].textContent = unidad.nombre;

        const contenedorTemas = unidades[unidadesIndex].parentElement.querySelectorAll(".curso_summary__tema");

        unidad.temas.forEach((contenido, indice) => {
            if (contenedorTemas[indice]) {
                contenedorTemas[indice].innerHTML = ` <p class="curso_summary__tema">
                                    <img class="curso_summary__tema__imagen" src="${contenido.icono}" alt="icono">
                                    ${contenido.tema}
                                    <input class="curso_summary__tema__checkbox" type="checkbox" class="checkbox">
                                </p>`;
            }
        });
    });
});






const idDocente = cursoSeleccionado.docenteId;
const docenteGuardados = JSON.parse(sessionStorage.getItem('Docentes'));

const docente = docenteGuardados.find(docente => docente.id === idDocente);



const imagenDocente = document.querySelector(".docente_imagen");
imagenDocente.src = docente.imagen;


const imagenDocenteCelular = document.querySelector(".docente_info_imagen_celular");
imagenDocenteCelular.src = docente.imagen;



const nombreDocente = document.querySelector(".docente_info_nombre");
nombreDocente.textContent = docente.nombre;

const nombreDocenteCelular = document.querySelector(".docente_info_nombre_celular");
nombreDocenteCelular.textContent = docente.nombre;


const descripcionDelDocente = document.querySelector(".docente_info_descripcion");
descripcionDelDocente.textContent = docente.descripcion;




function obtener4CursosAleatorio() {
    const copiaDeCursos = cursosInformacion;
    const cursosRelacionados = []

    for (let i = 0; i < 4; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copiaDeCursos.length);
        cursosRelacionados.push(copiaDeCursos[indiceAleatorio]);
        copiaDeCursos.splice(indiceAleatorio, 1);
    }

    return cursosRelacionados
}
