//Declaracion de constantes
const nodoFormGiftCard = document.querySelector('#form_giftcard');
const giftCardContenedor = document.querySelector('.contenido_vista-previa_giftcard'); 
const giftCardDestinatario = document.querySelector('.contenido_vista-previa_giftcard--destinatario');
const giftCardPrecio = document.querySelector('.contenido_vista-previa_giftcard--precio');
const inputDestinatario = document.querySelector('#destinatario');
const inputsColor = document.querySelectorAll("input[name='color']");
const inputsTamañoFuente = document.querySelectorAll("input[name='tamaño']");
const inputsUbicacion = document.querySelectorAll("input[name='ubicacion']");
const inputsFondo = document.querySelectorAll("input[name='fondo']");
const inputMonto = document.querySelector('#monto');


// Objeto de colores por id
const colorFuente = {
    "color-rojo": 'rgb(255, 0, 0)',
    "color-azul": 'rgb(0, 0, 255)',
    "color-verde": 'rgb(48, 216, 48)',
    "color-amarillo": 'rgb(255, 255, 0)',
    "color-rosa": 'rgb(240, 81, 174)',
};

// Objeto de tamaño de fuente por id
const tamanioFuente = {
    "size-20px": '20px',
    "size-28px": '28px',
    "size-32px": '32px',
    "size-48px": '48px',
    "size-60px": '60px',
};

// Objeto de ubicacion de la etiqueta precio por id
const ubicacionTop = {
    "ubicacion-1": '87%',
    "ubicacion-2": '1%',
    "ubicacion-3": '1%',
};

const ubicacionRight = {
    "ubicacion-1": '0%',
    "ubicacion-2": '83%',
    "ubicacion-3": '0%',
};


// Objeto de colores por id
const colorFondo = {
    "fondo-1": 'rgb(255, 153, 0)',
    "fondo-2": 'rgb(154, 30, 211)',
    "fondo-3": 'rgb(45, 145, 238)',
    "fondo-4": 'rgb(233, 25, 112)',
    "fondo-5": 'rgb(119, 116, 118)',
};


//Actualizar nombre del DESTINATARIO
function actualizarNombreDestinatario() {
    const nombreDestinatario = inputDestinatario.value; 
    giftCardDestinatario.textContent = nombreDestinatario || 'Destinatario';  
}

inputDestinatario.addEventListener('input', actualizarNombreDestinatario);

// Función para aplicar el COLOR DE FUENTE seleccionado
function aplicarColorFuente(event) {
    const colorSeleccionado = colorFuente[event.target.id];
    if (colorSeleccionado) {
        giftCardDestinatario.style.color = colorSeleccionado;
    }
}

//Recorre el array de inputs y cuando encuentra el seleccionado aplica la funcion aplicarColorFuente
inputsColor.forEach(input => input.addEventListener("change", aplicarColorFuente));

// TAMANIO DE FUENTE 
function aplicarTamanioFuente(event) {
    const tamanioSeleccionado = tamanioFuente[event.target.id];
    if (tamanioSeleccionado) {
        giftCardDestinatario.style.fontSize = tamanioSeleccionado;
    }
}

inputsTamañoFuente.forEach(input => input.addEventListener("change", aplicarTamanioFuente));

//MONTO
function actualizarMonto() {
    const monto = inputMonto.value; 
    giftCardPrecio.textContent = `U$D ${monto}.-` || 'U$D 0000.-'; 
}

inputMonto.addEventListener('input', actualizarMonto);


// UBICACION PRECIO
function aplicarUbicacionPrecio(event) {
    const ubicacionSeleccionada = event.target.id;
    giftCardPrecio.style.top = ubicacionTop[ubicacionSeleccionada];
    giftCardPrecio.style.right = ubicacionRight[ubicacionSeleccionada];
}

inputsUbicacion.forEach(input => input.addEventListener("change", aplicarUbicacionPrecio));

// COLOR FONDO
function aplicarColorFondo(event) {
    const fondoSeleccionado = colorFondo[event.target.id];
    if (fondoSeleccionado) {
        giftCardContenedor.style.backgroundColor = fondoSeleccionado;
    }
}

inputsFondo.forEach(input => input.addEventListener("change", aplicarColorFondo));


//Generar código aleatorio para la giftcard
function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < 6; i++) { 
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
}

// Guardar el código en el localStorage
function guardarCodigoEnLocalStorage(codigo) {
    localStorage.setItem('giftcard_codigo', codigo);
}

//Constante del form nodoFormGiftCard




