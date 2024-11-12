let contadorPersonas = 1;

const url = new URL(location.href);
const idCurso = parseInt(url.searchParams.get('id'));

function getIdJs() {
    const url = new URL(location.href);
    return parseInt(url.searchParams.get('id'));
}

const cursos = JSON.parse(sessionStorage.getItem('ListaDeCursos'));

const cursoSeleccionado = cursos.find(curso => curso.id === idCurso);

// Actualiza el título y el precio del curso
function actualizarCurso() {
    if (cursoSeleccionado) {
        document.getElementById('titulo-curso').textContent = cursoSeleccionado.nombre;
        document.getElementById('precio-curso').textContent = `U$D ${cursoSeleccionado.precio.toFixed(2)}`;
    } else {
        document.getElementById('titulo-curso').textContent = 'Curso no encontrado';
        document.getElementById('precio-curso').textContent = 'U$D 0.00';
    }
}

function agregarPersona() {
    contadorPersonas++;
    const grupoPersonas = document.getElementById("grupo-personas");

    const nuevaPersona = document.createElement("div");
    nuevaPersona.className = "grupo-formulario";
    nuevaPersona.id = `persona-${contadorPersonas}`;
    nuevaPersona.innerHTML = `
        <input type="text" name="name" placeholder="Nombre y Apellido" required>
        <input type="number" name="dni" placeholder="DNI" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="tel" name="telefono" placeholder="Teléfono" required>
        <a href="#" class="boton-eliminar" onclick="eliminarPersona(this)">-</a>
    `;
    grupoPersonas.appendChild(nuevaPersona);
    actualizarTotal();
}

function eliminarPersona(elemento) {
    const grupoPersonas = document.getElementById("grupo-personas");
    const persona = elemento.closest('.grupo-formulario');

    if (contadorPersonas > 1) {
        grupoPersonas.removeChild(persona);
        contadorPersonas--;
    } else {
        // Limpiar los valores de la primera persona
        const inputs = persona.querySelectorAll('input');
        inputs.forEach(input => {
            input.classList.remove('error');
            input.value = '';

            switch (input.name) {
                case 'name':
                    input.placeholder = 'Nombre y Apellido';
                    break;
                case 'dni':
                    input.placeholder = 'DNI';
                    break;
                case 'email':
                    input.placeholder = 'Email';
                    break;
                case 'telefono':
                    input.placeholder = 'Teléfono';
                    break;
                default:
                    input.placeholder = '';
            }
        })
    }
    actualizarTotal();
}

function actualizarTotal() {
    const totalElement = document.getElementById("precio-curso");
    const total = cursoSeleccionado.precio * contadorPersonas;
    totalElement.innerHTML = `U$D ${total.toFixed(2)}`;
}

function actualizarCarrito() {
    let cursoCarrito = JSON.parse(sessionStorage.getItem('cursoCarrito')) || { curso: [], precioTotalDelCarrito: 0 };
    const cursoEnCarrito = cursoCarrito.curso.find(curso => curso.id === idCurso);

    if (cursoEnCarrito) {
        cursoEnCarrito.cantidad = contadorPersonas;
        cursoEnCarrito.precioTotal = cursoEnCarrito.cantidad * cursoEnCarrito.precio;
    } else {
        cursoCarrito.curso.push({
            id: cursoSeleccionado.id,
            titulo: cursoSeleccionado.nombre,
            imagen: cursoSeleccionado.imagen,
            modalidad: cursoSeleccionado.modalidad,
            precio: cursoSeleccionado.precio,
            cantidad: contadorPersonas
        });
    }

    calcularPrecioTotalDelCarrito(cursoCarrito);
    guardarCursoEnElCarrito(cursoCarrito);
    actualizarContadorDeCarrito();
}


function calcularPrecioTotalDelCarrito(cursoCarrito) {
    cursoCarrito.precioTotalDelCarrito = cursoCarrito.curso.reduce((suma, curso) => suma + (curso.cantidad * curso.precio), 0);
}

function guardarCursoEnElCarrito(cursoCarrito) {
    sessionStorage.setItem('cursoCarrito', JSON.stringify(cursoCarrito));
}

function actualizarContadorDeCarrito() {
    const cursoInformacion = JSON.parse(sessionStorage.getItem('cursoCarrito')) || { curso: [], precioTotalDelCarrito: 0 };
    const contadorElemento = document.querySelector(".navprimario__menu-items-carrito-numero");
    const contadorDeCursosSidebar = document.querySelector(".js-carrito-sidebar__header__titulo__contador");
    const totalCursos = cursoInformacion.curso.reduce((contador, curso) => contador + curso.cantidad, 0);
    contadorElemento.innerText = totalCursos;
    contadorDeCursosSidebar.innerText = totalCursos;

    const mensajeCarritoVacio = document.querySelector(".carrito-sidebar__contenedor-carrito-vacio");
    mensajeCarritoVacio.classList.toggle("oculto", totalCursos > 0);
}

function validarFormulario() {
    const personas = document.querySelectorAll('.grupo-formulario');
    let esValido = true;

    for(const persona of personas) {
        const inputs = persona.querySelectorAll('input');
        
        for (const input of inputs){
            // Validar el formato del Nombre
            if (input.name === 'name') {
                const reglaNombre = /^[a-zA-Z\s]+$/;
                if (!reglaNombre.test(input.value.trim())) {
                    input.value = '';
                    esValido = false;
                    input.classList.add('error');
                    input.placeholder = 'Ingrese un nombre válido.';
                    break;
                } else {
                    input.classList.remove('error');
                    input.placeholder = 'Nombre y Apellido';
                }
            }

            // Validar el formato del DNI
            if (input.name === 'dni') {
                const reglaDni = /^[0-9]+$/;
                if (!reglaDni.test(input.value.trim())) {
                    input.value = '';
                    esValido = false;
                    input.classList.add('error');
                    input.placeholder = 'Ingrese un DNI válido.';
                    break;
                } else {
                    input.classList.remove('error');
                    input.placeholder = 'DNI';
                }
            }

            // Validar el formato del email
            if (input.name === 'email') {
                const reglaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!reglaEmail.test(input.value.trim())) {
                    input.value = '';
                    esValido = false;
                    input.classList.add('error');
                    input.placeholder = 'Ingrese un email válido.';
                    break;
                } else {
                    input.classList.remove('error');
                    input.placeholder = 'Email';
                }
            }

            // Validar el formato del telefono
            if (input.name === 'telefono') {
                const reglaTel = /^[0-9]+$/;
                if (!reglaTel.test(input.value.trim())) {
                    input.value = '';
                    esValido = false;
                    input.classList.add('error');
                    input.placeholder = 'Ingrese un teléfono válido.';
                    break;
                } else {
                    input.classList.remove('error');
                    input.placeholder = 'Teléfono';
                }
            }
        };
        if(!esValido){
            break;
        }
    };

    return esValido;
    
}

const modal = document.getElementById("modalResumen");

// Mostrar el resumen de personas agregadas
function mostrarResumen(event) {
    event.preventDefault();
    if (!validarFormulario()) return;

    const resumenElement = document.getElementById("resumen-personas");
    const personas = document.querySelectorAll(".grupo-formulario");

    resumenElement.innerHTML = ''; // Limpia el resumen anterior
    personas.forEach((persona, index) => {
        const nombre = persona.querySelector('input[name="name"]').value;
        const dni = persona.querySelector('input[name="dni"]').value;
        const email = persona.querySelector('input[name="email"]').value;
        const telefono = persona.querySelector('input[name="telefono"]').value;

        if (nombre) {
            resumenElement.innerHTML += `<p>Persona ${index + 1}: ${nombre}, DNI: ${dni}, Email: ${email}, Teléfono: ${telefono}</p>`;
        }
    });
    modal.showModal();
}


function cerrarModal() {
    actualizarCarrito();
    modal.close();
    window.location.href = "index.html";
}

window.onload = actualizarCurso;
