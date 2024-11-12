
const nodoEmailIngresado = document.querySelector('#email-reestablecer-pw');


//1. Validación del formulario
function validarFormOlvidoPw () {
    const reglaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!reglaEmail.test(nodoEmailIngresado.value.trim())) {
        nodoEmailIngresado.value = '';
        nodoEmailIngresado.placeholder = 'Correo electrónico no válido. Verifique el formato ingresado';
        nodoEmailIngresado.classList.add('error');
        return false;
    } 
    return true;
}

//Funcion para remover clase error
nodoEmailIngresado.addEventListener('input', () => {
            if (nodoEmailIngresado.classList.contains('error')) {
                nodoEmailIngresado.classList.remove('error');
            }
        });

//2.Preparo modales de alerta
const nodoModalOlvidoPw = document.querySelector('#modal_olvido-pw');
const nodoModalTitulo = document.querySelector('#modal_titulo_olvido-pw');
const nodoModalContenido = document.querySelector('#modal_contenido_olvido-pw');
const nodoModalBoton = document.querySelector('#modal_boton_olvido-pw');

function crearModalMailInvalido() {
    nodoModalTitulo.textContent = '¡Atención!';
    nodoModalContenido.textContent = 'El usuario ingresado no se encuentra registrado. Por favor verifique el correo electrónico o cree una cuenta nueva.';
    nodoModalOlvidoPw.showModal();
    nodoModalBoton.addEventListener('click', (event) => {
        nodoModalOlvidoPw.close();
    });
}

function crearModalRecuperoDePw() {
    nodoModalTitulo.textContent = '¡Listo!'
    nodoModalContenido.textContent = 'Le hemos enviado un mensaje a su correo para que pueda reestablecer su contraseña.';
    nodoModalOlvidoPw.showModal();
    nodoModalBoton.addEventListener('click', (event) => {
        nodoModalOlvidoPw.close();
        window.location.assign('inicio-sesion.html');
    });
}


//3. Verifico que el usuario esté en el local storage y envío pop-up informativo
function enviarMensajeRecuperoPw (evento){
    evento.preventDefault();

    if(!validarFormOlvidoPw()) return;

    let usuariosRegistrados = {};
    const usuariosRegistradosJSON = localStorage.getItem('usuarios');
    
    if(!usuariosRegistradosJSON){
        crearModalMailInvalido();
        return;
    }else{
        usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
    }

    if(!usuariosRegistrados[nodoEmailIngresado.value]){
        crearModalMailInvalido();
        return;
    }else{
        crearModalRecuperoDePw();
        return;
    }

}

const nodoFormularioOlvido = document.querySelector('#form_olvido-pw');
nodoFormularioOlvido.addEventListener('submit', enviarMensajeRecuperoPw);

