const formulario = document.querySelector(".grupo-formulario");
const modal = document.getElementById("modal");
const botonModal = document.getElementById("boton-modal"); 

formulario.addEventListener("submit", validarForm);

const mensajeInput = document.getElementById("mensaje");
const contadorCaracteres = document.getElementById("contador-caracteres");
const mensajeError = document.getElementById("mensaje_error");

mensajeInput.addEventListener("input", function() {
    const remaining = 1000 - mensajeInput.value.length;
    contadorCaracteres.textContent = `${remaining} caracteres restantes`;
});

function validarForm(e) {
    e.preventDefault();

    mensajeError.innerHTML = "";

    const nombre = document.getElementById('name').value.trim();
    const correo = document.getElementById('email').value.trim();
    const telefono = document.getElementById('tel').value.trim();
    let esValido = true;

    if (nombre === "") {
        mensajeError.innerHTML += "<p>El nombre no puede estar vacío.</p>";
        esValido = false;
    }

    if (!validarMail(correo)) {
        mensajeError.innerHTML += "<p>Por favor, ingresa un correo válido.</p>";
        esValido = false;
    }

    if (telefono !== "" && !validarTel(telefono)) {
        mensajeError.innerHTML += "<p>El formato del teléfono es incorrecto. Debe contener 8 números con un guion en el medio.</p>";
        esValido = false;
    }

    if (esValido) {
        modal.style.display = "flex";
    }
    }

botonModal.addEventListener("click", () => {
    modal.style.display = 'none'; 
    formulario.submit(); 
});

function validarMail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}

function validarTel(telefono) {
    const re = /^\d{4}-?\d{4}$/;
    return re.test(telefono);
} 


