/*ID a usar:
#form_mi-perfil
#nombre-perfil
#apellido-perfil
#email-perfil
#btn_eliminar-cuenta
*/

//Como a esta vista sólo vamos a llegar si el botón de "registrarse" cambió a mi prefil, simplemente ya sé
//que hay un dato en el session storage
const mailUsuarioActivo = sessionStorage.getItem('ultimoUsuarioLogueado');

//Cargo los datos del usuario
function cargarDatosUsuario (email){
    const usuariosRegistradosJSON = localStorage.getItem('usuarios');

    //Requiero menos validaciones porque a esta página no se llega si no hay un usuario logueado y en el local storage
    const usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
    const usuarioActual = usuariosRegistrados[email]; 

    document.querySelector('#nombre-perfil').value = usuarioActual.nombre;
    document.querySelector('#apellido-perfil').value = usuarioActual.apellido;
    document.querySelector('#email-perfil').value = usuarioActual.email;

}

cargarDatosUsuario(mailUsuarioActivo);