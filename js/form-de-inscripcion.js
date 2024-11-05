let contadorPersonas = 1;

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
    const totalElement = document.getElementById("total");
    const total = 20.00 * contadorPersonas; // U$D 20 por persona
    totalElement.innerHTML = `U$D ${total.toFixed(2)}`;
}

function mostrarResumen() {
    const resumenElement = document.getElementById("resumen-personas");
    const personas = document.querySelectorAll(".grupo-formulario");

    resumenElement.innerHTML = ''; // Limpiar el resumen anterior
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
    document.getElementById("modalResumen").style.display = "none";
}
