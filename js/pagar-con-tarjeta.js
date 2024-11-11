

const cursosAPagar = getCursosEnElCarrito().curso;



const containerCursos = document.querySelector(".cursos");

let precioTotalCarrito = 0;

cursosAPagar.forEach(item => {
    precioTotalCarrito += item.precio * item.cantidad;


    const article = document.createElement("article");
    article.className = "curso_seleccionado";
    article.innerHTML = `<img class="curso_seleccionado_imagen" src=${item.imagen}
                            alt="imagen del curso a pagar">
                        <div class="curso_seleccionado_contenido">
                            <div class="curso_seleccionado_contenedor-del-precio">
                                <p class="curso_seleccionado_contenedor-del-precio_titulo">${item.titulo}</p>
                                <p class="curso_seleccionado_contenedor-del-precio_precio"> U$D ${item.precio}</p>
                            </div>
                            <p class="curso_seleccionado_cantidad">Cantidad: ${item.cantidad}</p>
                            <p class="curso_seleccionado_modalidad">Modalidad: ${item.modalidad}</p>
                        </div>
                    </article>`;


    containerCursos.appendChild(article);
    actualizarContadorDeCarrito();
});



if (cursosAPagar.length === 0) {
    containerCursos.classList.add("vacio");
    containerCursos.innerHTML = "<p>No hay cursos en el carrito.</p>";
} else {
    // Crear contenedor de precio total
    const containerPrecio = document.createElement("article");
    containerPrecio.className = "precio-total";
    containerPrecio.innerHTML = `
        <p class="total">Total: </p>
        <p>U$D ${precioTotalCarrito}</p>
    `;

    containerCursos.appendChild(containerPrecio);
}

//Validar formulario de pago

function validarFormPagoContarjeta() {
    const numeroTarjeta = document.querySelector('#numero-tarjeta');
    const vencimientoTarjeta = document.querySelector('#vencimiento-tarjeta');
    const codigoTarjeta = document.querySelector('#codigo-tarjeta');
    const correoTarjeta = document.querySelector('#correo-tarjeta');
    const nombreTarjeta = document.querySelector('#nombre-tarjeta');
    const direccionTarjeta = document.querySelector('#direccion-tarjeta');

    //validar numero
    const reglaNumeroTarjeta = /^\d{16}$/;
    if (!reglaNumeroTarjeta.test(numeroTarjeta.value.trim())) {
        numeroTarjeta.value = '';
        numeroTarjeta.placeholder = 'Ingrese número de tarjeta válido (16 dígitos)'
        numeroTarjeta.classList.add('error');
        return false;
    } else {
        numeroTarjeta.classList.remove('error');
    }
    //validar vencimiento
    const reglaVencimientoTarjeta = /^\d{2}\/\d{2}$/;
    if (!reglaVencimientoTarjeta.test(vencimientoTarjeta.value.trim())) {
        vencimientoTarjeta.value = '';
        vencimientoTarjeta.placeholder = 'Ingrese fecha en formato MM/AA'
        vencimientoTarjeta.classList.add('error');
        return false;
    } else {
        vencimientoTarjeta.classList.remove('error');
    }

    //validar codigo
    const reglaCodigoTarjeta = /^\d{3}$/;
    if (!reglaCodigoTarjeta.test(codigoTarjeta.value.trim())) {
        codigoTarjeta.value = '';
        codigoTarjeta.placeholder = 'Ingrese 3 dígitos'
        codigoTarjeta.classList.add('error');
        return false;
    } else {
        codigoTarjeta.classList.remove('error');
    }

    //validar correo
    const reglaCorreoTarjeta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!reglaCorreoTarjeta.test(correoTarjeta.value.trim())) {
        correoTarjeta.value = '';
        correoTarjeta.placeholder = 'Correo electrónico no válido. Verifique el formato ingresado';
        correoTarjeta.classList.add('error');
        return false;
    } else {
        correoTarjeta.classList.remove('error');
    }

    //validar nombre
    const reglaNombreTarjeta = /^[a-zA-Z\s]+$/;
    if (!reglaNombreTarjeta.test(nombreTarjeta.value.trim())) {
        nombreTarjeta.value = '';
        nombreTarjeta.placeholder = 'El nombre del titular es obligatorio';
        nombreTarjeta.classList.add('error');
        return false;
    } else {
        nombreTarjeta.classList.remove('error');
    }
    //validar direccion
    if (direccionTarjeta.value.trim() === '') {
        direccionTarjeta.placeholder = 'La dirección es obligatoria';
        direccionTarjeta.classList.add('error');
        return false;
    } else {
        direccionTarjeta.classList.remove('error');
    }

    return true;

}

//modal pago con éxito
function crearModalPagoExitoso() {
    const modalPagoExitoso = document.querySelector('#modal_pago-exitoso');
    const modalTituloPago = document.querySelector('#modal_titulo_pago-exitoso');
    const modalContenidoPago = document.querySelector('#modal_contenido_pago-exitoso');
    const modalBotonPago = document.querySelector('#modal_boton_pago-exitoso');

    modalTituloPago.textContent = '¡El pago se realizó correctamente!';
    modalContenidoPago.textContent = 'Muchas gracias por confiar en Dev-Ex, toda la información le llegará a su correo';
    modalPagoExitoso.showModal();
    modalBotonPago.addEventListener('click', (_event) => {
        modalPagoExitoso.close();
        window.location.assign('../index.html');
    });
}

const nodoFormPagarConTarjeta = document.querySelector('#form_pagar-tarjeta')

nodoFormPagarConTarjeta.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!validarFormPagoContarjeta()) return;
    sessionStorage.removeItem('cursoCarrito');
    crearModalPagoExitoso();
})