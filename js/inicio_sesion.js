//#form_iniciar-sesion
//#email-usuario
//#password-usuario

//1. Validar que los campos estén completos
function validarFormIniciarSesion() {
    const nodoEmail = document.querySelector('#email-usuario');
    const nodoPassword = document.querySelector('#password-usuario');

    // Validación del email
    const reglaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!reglaEmail.test(nodoEmail.value.trim())) {
        nodoEmail.value = ''; 
        nodoEmail.placeholder = 'Correo electrónico no válido. Verifique el formato ingresado';
        nodoEmail.classList.add('error');
        return false;
    } else {
        nodoEmail.classList.remove('error');
    }

    //Validación de la contraseña
    if (nodoPassword.value.trim() === '') {
        nodoPassword.placeholder = 'Ingrese su contraseña';
        nodoPassword.classList.add('error');
        return false;
    } else {
        nodoPassword.classList.remove('error');
    }
   
    return true;
}

//2. Función para guardar usuario en el session storage
function guardarUsuarioSesion (emailUsuario){
    sessionStorage.setItem('ultimoUsuarioLogueado', emailUsuario)
}

//3. Preparo modal de alerta
const nodoModalInicioSesion = document.querySelector('#modal_inicio-sesion');
const nodoModalBoton = document.querySelector('#modal_boton_inicio-sesion')

function crearModalUsuarioExistente() {
    nodoModalInicioSesion.showModal();
    nodoModalBoton.addEventListener('click', (event) => {
        nodoModalInicioSesion.close();
    });
}


//4. Verificar si el usuario existe y si su contraseña es correcta

function validarUsuario(evento){
    evento.preventDefault();
    
    //verifico que el usuario haya cargado los dos campos
    if(!validarFormIniciarSesion()) return;

    //Verifico que haya un objeto en el local storage, sino ya arrojo un msjs de que el usuario no está registrado
    
    let usuariosRegistrados = {};
    const usuariosRegistradosJSON = localStorage.getItem('usuarios');

    if(!usuariosRegistradosJSON){
        crearModalUsuarioExistente();
        return;
    }else{
        usuariosRegistrados = JSON.parse(usuariosRegistradosJSON);
    }

    //busco el mail-usuario en el local storage y corroboro contraseña

    const emailUsuario = document.querySelector('#email-usuario').value; //email ingresado por el usuario
    const passwordUsuario = document.querySelector('#password-usuario').value; //Contraseña ingresada por el usuario
    
    if(!usuariosRegistrados[emailUsuario]){
        crearModalUsuarioExistente();
        return;
    }
    
    const usuarioPorValidar = usuariosRegistrados[emailUsuario];
    if(usuarioPorValidar.password === passwordUsuario){
            guardarUsuarioSesion(usuarioPorValidar.email)
            window.location.assign('../index.html');
        }else{
            const nodoPwError = document.querySelector('#mensaje_pw_incorrecta');
            nodoPwError.textContent = 'Contraseña incorrecta, vuelva a intentar';
        }
}

//5. Llamo al evento
const nodoFormularioInicio = document.querySelector('#form_iniciar-sesion');
nodoFormularioInicio.addEventListener('submit', validarUsuario);