const nodoFormContacto = document.querySelector('#form_contacto');
const nodoNombreContacto = document.querySelector('#nombre-contacto');
const nodoEmailContacto = document.querySelector('#email-contacto');
const nodoTelefonoContacto = document.querySelector('#tel-contacto');
const nodoMensajeContacto = document.querySelector('#mensaje-contacto');
const nodoModalContacto = document.querySelector('#modal_contacto');
const nodoModalBotonContacto = document.querySelector('#modal_boton_contacto');
const contadorCaracteres = document.getElementById("contador-caracteres");

//Contador msj
nodoMensajeContacto.addEventListener("input", function () {
    const remaining = 1000 - nodoMensajeContacto.value.length;
    contadorCaracteres.textContent = `${remaining} caracteres restantes`;
});

//Validar email
function validarMail(email) {
    const regla = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regla.test(email);
}

//Validar teléfono
function validarTel(telefono) {
    const regla = /^\d{4}-?\d{4}$/;
    return regla.test(telefono);
}

//Validación total del formulario
function validarFormContacto() {

    if (nodoNombreContacto.value === '') {
        nodoNombreContacto.placeholder = 'El nombre es obligatorio.';
        nodoNombreContacto.classList.add('error');
        return false;
    }else {
        nodoNombreContacto.classList.remove('error');
    }

    if (!validarMail(nodoEmailContacto.value.trim())) {
        nodoEmailContacto.value = '';
        nodoEmailContacto.placeholder = 'Ingrese un correo con formato válido.';
        nodoEmailContacto.classList.add('error');
        return false;
    } else {
        nodoEmailContacto.classList.remove('error');
    }

    if (nodoMensajeContacto.value === '') {
        nodoMensajeContacto.placeholder = 'Por favor ingrese su mensaje.';
        nodoMensajeContacto.classList.add('error');
        return false;
    }else {
        nodoMensajeContacto.classList.remove('error');
    }

    if (nodoTelefonoContacto.value !== '' && !validarTel(nodoTelefonoContacto.value.trim())) {
        nodoTelefonoContacto.value = '';
        nodoTelefonoContacto.placeholder = 'Ingrese un teléfono con formato del tipo 1111-1111';
        nodoTelefonoContacto.classList.add('error');
        return false;
    } else {
        nodoTelefonoContacto.classList.remove('error');
        nodoTelefonoContacto.placeholder = 'Teléfono'
    }

    return true;
}

//Eventos
nodoModalBotonContacto.addEventListener('click', (_evento) =>{
    nodoModalContacto.close();
    window.location.assign('../index.html');
});

nodoFormContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if(!validarFormContacto()) return;
    nodoModalContacto.showModal();
});


