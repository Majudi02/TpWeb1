
function actualizarBotonHeader() {
    const emailUsuario = sessionStorage.getItem('ultimoUsuarioLogueado');
    const btnIngresar = document.querySelector('#espacio-btn-login');
    const btnMiPerfil = document.querySelector('#espacio-btn-perfil');

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



// Variables de elementos
const btnMiPerfil = document.querySelector('#btn-mi-perfil');
const dropdownMenu = document.querySelector('#dropdown-menu');
const btnCerrarSesion = document.querySelector('#cerrar-sesion');
const btnEliminarCuenta = document.querySelector('#eliminar-cuenta');

// Mostrar/ocultar el menú cuando se hace clic en "Mi perfil"
btnMiPerfil.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!btnMiPerfil.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
});

// Funcionalidad del botón "Cerrar sesión"
btnCerrarSesion.addEventListener('click', () => {
    sessionStorage.removeItem('ultimoUsuarioLogueado'); // Elimina el usuario de la sesión
    window.location.assign('../index.html');
});

// Me redirecciona a la vista de eliminar cuenta
btnEliminarCuenta.addEventListener('click', () => {
    window.location.assign('administracion-de-usuario.html');
});
