/*ID a usar:
#form_mi-perfil
#nombre-perfil
#apellido-perfil
#email-perfil
#btn_eliminar-cuenta
*/

//Como a esta vista sólo vamos a llegar si el botón de "registrarse" cambió a mi prefil, simplemente ya sé
//que hay un dato en el session storage por eso requiero menos validaciones de las que vinimos trabajando
const emailUsuarioActivo = sessionStorage.getItem('ultimoUsuarioLogueado');


//Cargo los datos del usuario
function cargarDatosUsuario (email){  
    const usuariosRegistradosJSON = localStorage.getItem('usuarios');
    const usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
    const usuarioActual = usuariosRegistrados[email]; 

    document.querySelector('#nombre-perfil').value = usuarioActual.nombre;
    document.querySelector('#apellido-perfil').value = usuarioActual.apellido;
    document.querySelector('#email-perfil').value = usuarioActual.email;
}

cargarDatosUsuario(emailUsuarioActivo);


//Botón para eliminar
const nodoBotonEliminarCuenta = document.querySelector('#btn_eliminar-cuenta')

//Eliminar usuario y actualizar local storage
function eliminarCuenta (evento){
    evento.preventDefault();
    const emailPorEliminar = emailUsuarioActivo;
    const usuariosRegistradosJSON = localStorage.getItem('usuarios');
    const usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
    //Elimino usuario
    delete usuariosRegistrados[emailPorEliminar];
    //Actualizo y redirijo
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
    sessionStorage.clear();
    alert('Su cuenta ha sido eliminada');
    window.location.assign('../index.html')
}

nodoBotonEliminarCuenta.addEventListener('click', eliminarCuenta);