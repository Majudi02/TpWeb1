
//1.Valido el formulario

function validarFormCrearCuenta() {
    const nodoFormulario = document.querySelector('#form_crear-cuenta');
    //Validación con HTML 5
    if (!nodoFormulario.checkValidity()) {
        nodoFormulario.reportValidity();
        return false;
    }

    //Validación personalizada para la contraseña
    const nodoPassword = document.querySelector('#password');
    const nodoError = document.querySelector('#mensaje_error');

    //Expresion regular: al menos 4 letras y 4 números
    const reglaPassword = /^(?=(.*[A-Za-z]){4,})(?=(.*\d){4,}).{8,}$/;

    if (!reglaPassword.test(nodoPassword.value)) {
        nodoError.textContent = 'La contraseña debe tener al menos 4 letras y 4 números';
        //alert('La contraseña debe tener al menos 4 letras y 4 números')
        return false;
    }

    return true;
}

//2. Verifico que el usuario no exista y lo guardo en el local storage

function guardarUsuarioNuevo() { 
    let usuariosRegistrados = {};
    const usuariosRegistradosJSON = localStorage.getItem('usuarios');

    const nodoNombre = document.querySelector('#nombre');
    const nodoApellido = document.querySelector('#apellido');
    const nodoEmail = document.querySelector('#email');
    const nodoPassword = document.querySelector('#password');

    // Obtener los usuarios registrados si existen en el Local Storage
    if (usuariosRegistradosJSON) {
            usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
        }

    // Verificar si el email ya existe
    if (usuariosRegistrados[nodoEmail.value]) {
        alert('Ya existe un usuario registrado con este email.'); //Aca podemos probar un pop-up
        const nodoFormulario = document.querySelector('#form_crear-cuenta');
        nodoFormulario.reset();
        const nodoError = document.querySelector('#mensaje_error');
        nodoError.textContent = '';
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

//3. Ejecuto una función que reúne la función de verificar los datos y guardar al nuevo usuario

function manejarEnvioFormulario(evento) {
    evento.preventDefault();
    
    // Verificación de que la validación se ejecuta y retorna el valor correcto
    //El return detiene la función si la validación salió mal. Si el formulario se validó correctamente
    //se obtiene un true, pero como está negado arroja un false, por eso la ejecución sigue
    console.log("Validando formulario...");
    if (!validarFormCrearCuenta()) return;
    
    // Si la función guardarNuevoUsuario devuelve true, guardo los datos en el local storage
    if (guardarUsuarioNuevo()) {
        console.log("Usuario guardado exitosamente en Local Storage.");
        alert('Usuario creado exitosamente, ya puede iniciar sesión');
        window.location.assign('inicio-sesion.html');
    } 
}

//Añado el evento al formulario
const nodoFormCrearCuenta = document.querySelector('#form_crear-cuenta');
nodoFormCrearCuenta.addEventListener('submit', manejarEnvioFormulario);

