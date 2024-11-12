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




