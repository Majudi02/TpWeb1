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
    const nodoNombre = document.querySelector('#nombre-perfil');
    const nodoApellido = document.querySelector('#apellido-perfil');
    const nodoEmail = document.querySelector('#email-perfil');


    nodoNombre.textContent = usuarioActual.nombre;
    nodoApellido.textContent = usuarioActual.apellido;
    nodoEmail.textContent = usuarioActual.email;
}

cargarDatosUsuario(emailUsuarioActivo);

//Modal de confirmación para eliminar cuenta
const nodoModalEliminarCuenta = document.querySelector('#modal_eliminar-cuenta');
//Botón que abre el modal para confirmar eliminar
const nodoBotonEliminarCuenta = document.querySelector('#btn_eliminar-cuenta')

nodoBotonEliminarCuenta.addEventListener ('click', (evento) => {
    nodoModalEliminarCuenta.showModal();
});

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
    window.location.assign('../index.html')
}

//Botones modal
const nodoBotonEliminarCuentaSi = document.querySelector('#modal_boton_eliminar-cuenta-si');
const nodoBotonEliminarCuentaNo = document.querySelector('#modal_boton_eliminar-cuenta-no');

nodoBotonEliminarCuentaSi.addEventListener('click', eliminarCuenta);

nodoBotonEliminarCuentaNo.addEventListener('click', (evento) => {
    nodoModalEliminarCuenta.close();
});