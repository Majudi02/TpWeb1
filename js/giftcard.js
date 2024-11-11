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

inputsUbicacion.forEach(input => input.addEventListener('change', aplicarUbicacionPrecio));

// COLOR FONDO
function aplicarColorFondo(event) {
    const fondoSeleccionado = colorFondo[event.target.id];
    if (fondoSeleccionado) {
        giftCardContenedor.style.backgroundColor = fondoSeleccionado;
    }
}

inputsFondo.forEach(input => input.addEventListener('change', aplicarColorFondo));


//Creo array giftCards
let giftCards = JSON.parse(localStorage.getItem('giftCards')) || [];

/*if (!giftCards) {
    giftCards = [];
}*/

//Generar código aleatorio único para la giftcard
function generarCodigoUnico(giftCards) {
    let codigo;
    do {
        codigo = Math.random().toString(36).substring(2, 8);
    } while (giftCards.some(giftCardExistente => giftCardExistente.codigo === codigo));
    return codigo;
}

//Creo objeto nuevaGiftCard y lo agrego al array. 
function crearNuevaGiftCard() {
    const codigoUnico = generarCodigoUnico(giftCards);

    const nuevaGiftCard = {
        nombre: 'GiftCard',
        imagen: '../assets/giftcard.png',
        codigo: codigoUnico,
        monto: inputMonto.value
    }
    giftCards.push(nuevaGiftCard);
    localStorage.setItem("giftCards", JSON.stringify(giftCards));
    return nuevaGiftCard;
}

//Modal
const nodoModalGiftCard = document.querySelector('#modal_giftCard');
const nodoModalContenidoGiftCard = document.querySelector('#modal_contenido_giftCard');
const nodoModalBotonGiftCard =  document.querySelector('#modal_boton_giftCard');

nodoModalBotonGiftCard.addEventListener('click', (evento) => {
    nodoModalGiftCard.close();
    window.location.assign('../index.html');
})

//validación del formulario
function validarFormGiftCard() {
    const nombreDestinatario = document.querySelector('#destinatario');
    const montoIngresado = document.querySelector('#monto');

    // Validación del nombre del destinatario
    if (nombreDestinatario.value.trim() === '') {
        nombreDestinatario.placeholder = 'Complete el nombre del destinatario';
        nombreDestinatario.classList.add('error');
        return false;
    } else {
        nombreDestinatario.classList.remove('error');
    }
    // Validación del monto ingresado
    const reglaMonto = /^[0-9]+$/;
        if (!reglaMonto.test(montoIngresado.value.trim()) || montoIngresado.value.trim() === '') {
        montoIngresado.placeholder = 'Ingrese un monto';
        montoIngresado.classList.add('error-monto');
        return false;
    } else {
        montoIngresado.classList.remove('error-monto');
    }
    return true;
}


// Guardar el código en el localStorage
function agregarGiftCardAlCarritoDesdeForm(event) {
    event.preventDefault();
    //Valido el formulario
    if(!validarFormGiftCard()) return;
  //creo la gift card y la guardo
    const nuevaGiftCard = crearNuevaGiftCard();
    //Agregar al carrito
    agregarGiftCardAlCarrito(nuevaGiftCard.codigo);
    nodoModalContenidoGiftCard.textContent = `El código de tu GiftCard es: ${nuevaGiftCard.codigo}.`;
    nodoModalGiftCard.showModal();
}

nodoFormGiftCard.addEventListener('submit', agregarGiftCardAlCarritoDesdeForm);
