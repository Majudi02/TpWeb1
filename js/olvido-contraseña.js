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

    if(!usuariosRegistradosJSON){
        nodoMensajePopup.textContent = 'El usuario ingresado no es válido. Por favor vuelva a intentar o cree una nueva cuenta'
        mostrarPopup();
        return;
    }else{
        usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
    }

    const emailIngresado = document.querySelector('#email-reestablecer-pw').value;

    if(!usuariosRegistrados[emailIngresado]){
        nodoMensajePopup.textContent = 'El usuario ingresado no es válido. Por favor vuelva a intentar o cree una nueva cuenta'
        mostrarPopup();
        return;
    }else{
        nodoMensajePopup.textContent = 'Listo! Le hemos enviado un mensaje a su correo para que pueda reestablecer su contraseña'
        mostrarPopup();
        return;
    }

}

const nodoFormularioOlvido = document.querySelector('#form_olvido-pw');
nodoFormularioOlvido.addEventListener('submit', enviarMensajeRecuperoPw);

