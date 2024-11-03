//#form_iniciar-sesion
//#email-usuario
//#password-usuario

//1. Validar que los campos estén completos

function validarFormIniciarSesion() {
    const nodoFormularioInicio = document.querySelector('#form_iniciar-sesion');
    //Validación con HTML 5
    if (!nodoFormularioInicio.checkValidity()) {
        nodoFormularioInicio.reportValidity();
        return false;
    }
   
    return true;
}

//2. Verificar si el usuario existe y si su contraseña es correcta

function validarUsuario(evento){
    evento.preventDefault();
    
    //verifico que el usuario haya cargado los dos campos
    if(!validarFormIniciarSesion()) return;

    //Verifico que haya un objeto en el local storage, sino ya arrojo un msjs de que el usuario no está registrado
    
    let usuariosRegistrados = {};
    const usuariosRegistradosJSON = localStorage.getItem('usuarios');

    if(!usuariosRegistradosJSON){
        alert('El usuario no se encuentra registrado'); //Cambiar por pop-up
        return;
    }else{
        usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
    }

    //busco el mail-usuario en el local storage y corroboro contraseña

    const emailUsuario = document.querySelector('#email-usuario').value; //email ingresado por el usuario
    const passwordUsuario = document.querySelector('#password-usuario').value; //Contraseña ingresada por el usuario
    
    if(!usuariosRegistrados[emailUsuario]){
        alert('El usuario no se encuentra registrado'); //Cambiar por pop-up
        return;
    }
    
    const usuarioPorValidar = usuariosRegistrados[emailUsuario];
    if(usuarioPorValidar.password === passwordUsuario){
            window.location.assign('../index.html');
        }else{
            const nodoPwError = document.querySelector('#mensaje_pw_incorrecta');
            nodoPwError.textContent = 'Contraseña incorrecta, vuelva a intentar';
        }
}

//Llamo al evento
const nodoFormularioInicio = document.querySelector('#form_iniciar-sesion');
nodoFormularioInicio.addEventListener('submit', validarUsuario);