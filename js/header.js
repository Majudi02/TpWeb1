//BOTONES INGRESAR vs MI PERFIL
function actualizarBotonHeader() {
    const emailUsuario = sessionStorage.getItem('ultimoUsuarioLogueado');
    const btnIngresar = document.querySelector('#btn-login');
    const btnMiPerfil = document.querySelector('#btn-mi-perfil');


    if (emailUsuario) {
        // Usuario logueado: muestra "Mi perfil" y oculta "Ingresar"
        btnIngresar.style.display = 'none';
        btnMiPerfil.style.display = 'flex';

    } else {
        // Usuario no logueado: muestra "Ingresar" y oculta "Mi perfil"
        btnIngresar.style.display = 'flex';
        btnMiPerfil.style.display = 'none';
    }

}


// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', actualizarBotonHeader);

function redirigirAInicio(ruta) {
    if (window.location.pathname.includes('/pages/')) {
        window.location.assign(`../${ruta}`);
    } else {
        window.location.assign(ruta);
    }
}

function redirigirAEliminarCuenta(ruta) {
    if (window.location.pathname.includes('/pages/')) {
        window.location.assign(ruta);
    } else {
        window.location.assign(`./pages/${ruta}`);
    }
}

// Variables de elementos
const btnMiPerfil = document.querySelector('#btn-mi-perfil');
const dropdownMenu = document.querySelector('#dropdown-menu');
const btnCerrarSesion = document.querySelector('#cerrar-sesion');
const btnEliminarCuenta = document.querySelector('#eliminar-cuenta');

// Mostrar/ocultar el menú cuando se hace clic en "Mi perfil"
btnMiPerfil.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Funcionalidad del botón "Cerrar sesión"
btnCerrarSesion.addEventListener('click', () => {
    //sessionStorage.removeItem('ultimoUsuarioLogueado'); 
    sessionStorage.clear();// Elimina toda la información almacenada hasta el momento en el session storage
    redirigirAInicio('index.html');
});

// Me redirecciona a la vista de eliminar cuenta
btnEliminarCuenta.addEventListener('click', () => {
    redirigirAEliminarCuenta('administracion-de-usuario.html');
});



//BUSCADOR
//En sessionStorage: 'ListaDeCursos' -> Array con info de los cursos. Atributo de interes = 'nombre'.
//#input-buscador
//#datalist-buscador
//<option></option>
const nodoInputBuscador = document.querySelector('#input-buscador');
const nodoDatalistBuscador = document.querySelector('#datalist-buscador');
let listadoDeCursosBuscador = [];
const listadoDeCursosJSON = sessionStorage.getItem('ListaDeCursos');

if (listadoDeCursosJSON) {
    listadoDeCursosBuscador = JSON.parse(listadoDeCursosJSON);
}


function actualizarDatalistBuscador(termino) {
    //Mi array para buscar los cursos es listadoDeCursosBuscador
    nodoDatalistBuscador.innerHTML = '';
    const resultadosDeBusqueda = listadoDeCursosBuscador.filter(
        curso => curso.nombre.toLowerCase().includes(termino.toLowerCase()));

    if (resultadosDeBusqueda.length === 0) {
        return;
    }

    resultadosDeBusqueda.forEach(curso => {
        const option = document.createElement('option');
        option.value = curso.nombre;
        nodoDatalistBuscador.appendChild(option);
    });
}

nodoInputBuscador.addEventListener('input', () => {
    actualizarDatalistBuscador(nodoInputBuscador.value);
});

nodoInputBuscador.addEventListener('change', () => {
    const terminoSeleccionado = nodoInputBuscador.value.toLowerCase();

    // Buscar el curso seleccionado en el array
    const cursoEncontrado = listadoDeCursosBuscador.find(curso =>
        curso.nombre.toLowerCase() === terminoSeleccionado
    );
    //Si lo encuentro: 
    if (cursoEncontrado) {
        // Redirigir a la página del curso según ubicacion actual index vs no index
        const rutaActual = window.location.pathname;
        const esPage = rutaActual.includes('/pages/'); //Esto me devuelve true or false

        // Ajustar la ruta del enlace según la ubicación
        const baseRuta = esPage ? '' : 'pages/';
        window.location.href = `${baseRuta}descripcion.del-curso.html?id=${cursoEncontrado.id}`;
    } else {
        console.log('Curso no encontrado.');
    }
})

