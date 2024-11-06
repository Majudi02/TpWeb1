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
    const persona = elemento.parentElement;

    if (contadorPersonas > 1) {
        grupoPersonas.removeChild(persona);
        contadorPersonas--;
    } else {
        // Limpiar los valores de la primera persona
        persona.querySelector('input[name="name"]').value = '';
        persona.querySelector('input[name="dni"]').value = '';
        persona.querySelector('input[name="email"]').value = '';
        persona.querySelector('input[name="telefono"]').value = '';
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
    const personas = document.querySelectorAll(".grupo-formulario");
    let esValido = true;

    personas.forEach(persona => {
        const inputs = persona.querySelectorAll("input");
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                esValido = false;
                input.reportValidity(); 
                return;
            }
        });
    });

    return esValido;
}

// Mostrar el resumen de personas agregadas
function mostrarResumen() {
    
    if (!validarFormulario()) {
        return; 
    }

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

    document.getElementById("modalResumen").style.display = "flex";
}

function cerrarModal() {
    actualizarCarrito();
    document.getElementById("modalResumen").style.display = "none";
    window.location.href = "oferta-cursos.html";
}

window.onload = actualizarCurso;
