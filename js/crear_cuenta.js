//CONSTANTES
const nodoNombre = document.querySelector('#nombre');
const nodoApellido = document.querySelector('#apellido');
const nodoEmail = document.querySelector('#email');
const nodoPassword = document.querySelector('#password');


//1.Valido el formulario
function validarFormCrearCuenta() {
    // Validación del nombre
    const reglaNombre = /^[a-zA-Z\s]+$/;
    if (!reglaNombre.test(nodoNombre.value.trim())) {
        nodoNombre.value = '';
        nodoNombre.placeholder = 'El nombre es obligatorio';
        nodoNombre.classList.add('error');
        return false;
    } 
    // Validación del apellido
    const reglaApellido = /^[a-zA-Z\s]+$/;
    if (!reglaApellido.test(nodoApellido.value.trim())) {
        nodoApellido.value = '';
        nodoApellido.placeholder = 'El apellido es obligatorio';
        nodoApellido.classList.add('error');
        return false;
    } 

    // Validación del email
    const reglaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!reglaEmail.test(nodoEmail.value.trim())) {
        nodoEmail.value = ''; 
        nodoEmail.placeholder = 'Correo electrónico no válido. Verifique el formato ingresado';
        nodoEmail.classList.add('error');
        return false;
    }

    // Validación de la contraseña
    const reglaPassword = /^(?=(.*[A-Za-z]){4,})(?=(.*\d){4,}).{8,}$/;
    if (!reglaPassword.test(nodoPassword.value.trim())) {
        nodoPassword.value = '';
        nodoPassword.placeholder = 'La contraseña debe tener al menos 4 letras y 4 números';
        nodoPassword.classList.add('error');
        return false;
    }

    return true;
}

//Funcion para remover clase error
function removerErroresDeInputs(inputs) {
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                input.classList.remove('error');
            }
        });
    });
}

// array de inputs
const inputsFormularioCrearCuenta = [
    nodoNombre,
    nodoApellido,
    nodoEmail,
    nodoPassword
];

removerErroresDeInputs(inputsFormularioCrearCuenta);

//2.Preparo modales de alerta
const nodoModalCrearCuenta = document.querySelector('#modal_crear-cuenta');
const nodoModalTitulo = document.querySelector('#modal_titulo_crear-cuenta');
const nodoModalContenido = document.querySelector('#modal_contenido_crear-cuenta');
const nodoModalBoton = document.querySelector('#modal_boton_crear-cuenta');

function crearModalUsuarioExistente() {
    nodoModalTitulo.textContent = '¡Atención!';
    nodoModalContenido.textContent = 'Ya existe un usuario registrado con este email.';
    nodoModalCrearCuenta.showModal();
    nodoModalBoton.addEventListener('click', (event) => {
        nodoModalCrearCuenta.close();
    });
}

function crearModalDeBienvenida() {
    nodoModalTitulo.textContent = '¡Bienvenida/o a DevX!'
    nodoModalContenido.textContent = 'Usuario creado exitosamente, ya puede iniciar sesión.';
    nodoModalCrearCuenta.showModal();
    nodoModalBoton.addEventListener('click', (event) => {
        nodoModalCrearCuenta.close();
        window.location.assign('inicio-sesion.html');
    });
}

//3. Verifico que el usuario no exista y lo guardo en el local storage

function guardarUsuarioNuevo() {
    let usuariosRegistrados = {};
    const usuariosRegistradosJSON = localStorage.getItem('usuarios');

    // Obtener los usuarios registrados si existen en el Local Storage
    if (usuariosRegistradosJSON) {
        usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
    }

    // Verificar si el email ya existe
    if (usuariosRegistrados[nodoEmail.value]) {
        crearModalUsuarioExistente();
        const nodoFormulario = document.querySelector('#form_crear-cuenta');
        nodoFormulario.reset();
        return false;
    }

    // Agregar el nuevo usuario al objeto `usuariosRegistrados`
    usuariosRegistrados[nodoEmail.value] = {
        nombre: nodoNombre.value,
        apellido: nodoApellido.value,
        email: nodoEmail.value,
        password: nodoPassword.value
    };

    // Guardar el objeto de usuarios como JSON en Local Storage
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
    return true;
}

//4. Ejecuto una función que reúne la función de verificar los datos y guardar al nuevo usuario

function manejarEnvioFormulario(evento) {
    evento.preventDefault();

    // Verificación de que la validación se ejecuta y retorna el valor correcto
    //El return detiene la función si la validación salió mal. Si el formulario se validó correctamente
    //se obtiene un true, pero como está negado arroja un false, por eso la ejecución sigue
    if (!validarFormCrearCuenta()) return;

    // Si la función guardarNuevoUsuario devuelve true, guardo los datos en el local storage
    if (guardarUsuarioNuevo()) {
        crearModalDeBienvenida();
    }
}

//5. Añado el evento al formulario
const nodoFormCrearCuenta = document.querySelector('#form_crear-cuenta');
nodoFormCrearCuenta.addEventListener('submit', manejarEnvioFormulario);

