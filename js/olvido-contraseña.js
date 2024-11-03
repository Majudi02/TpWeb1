//#email-reestablecer-pw
//#form_olvido-pw
//#popup_olvido-pw
//#texto_popup

//1. Valido el formato del input con html5
function validarFormOlvidoPw() {
    const nodoFormularioOlvido = document.querySelector('#form_olvido-pw');
    //Validación con HTML 5
    if (!nodoFormularioOlvido.checkValidity()) {
        nodoFormularioOlvido.reportValidity();
        return false;
    }
   
    return true;
}

//2. Preparo funciones para mostrar/ocultar el pop-up

function mostrarPopup() {
    document.querySelector('#popup_olvido-pw').style.display = 'block';
    const nodoFormularioOlvido = document.querySelector('#form_olvido-pw');
    nodoFormularioOlvido.reset();

}

function cerrarPopup_JS() {
    document.querySelector('#popup_olvido-pw').style.display = 'none';
}


//2. Verifico que el usuario esté en el local storage y envío pop-up informativo
function enviarMensajeRecuperoPw (evento){
    evento.preventDefault();

    if(!validarFormOlvidoPw()) return;

    let usuariosRegistrados = {};
    const usuariosRegistradosJSON = localStorage.getItem('usuarios');
    const nodoMensajePopup = document.querySelector('#texto_popup');
    //const nodoFormularioOlvido = document.querySelector('#form_olvido-pw');

    if(!usuariosRegistradosJSON){
        nodoMensajePopup.textContent = 'El usuario ingresado no es válido. Por favor vuelva a intentar o cree una nueva cuenta'
        mostrarPopup();
        //nodoFormularioOlvido.reset();
        return;
    }else{
        usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
    }

    const emailIngresado = document.querySelector('#email-reestablecer-pw').value;

    if(!usuariosRegistrados[emailIngresado]){
        nodoMensajePopup.textContent = 'El usuario ingresado no es válido. Por favor vuelva a intentar o cree una nueva cuenta'
        mostrarPopup();
        //nodoFormularioOlvido.reset();
        return;
    }else{
        nodoMensajePopup.textContent = 'Listo! Le hemos enviado un mensaje a su correo para que pueda reestablecer su contraseña'
        mostrarPopup();
        //nodoFormularioOlvido.reset();
        return;
    }

}

const nodoFormularioOlvido = document.querySelector('#form_olvido-pw');
nodoFormularioOlvido.addEventListener('submit', enviarMensajeRecuperoPw);



/*
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
*/