const listaDeCursos = JSON.parse(sessionStorage.getItem('ListaDeCursos')) || cursosInformacion;
if (!sessionStorage.getItem('ListaDeCursos')) {
  sessionStorage.setItem('ListaDeCursos', JSON.stringify(listaDeCursos));
}

document.addEventListener("DOMContentLoaded", () => {
  displayCurso();
  actualizarContadorDeCarrito();
  getCursosEnElCarrito();
});




const carritoSidebar = document.querySelector(".carrito-sidebar");
const botonAbrirCarrito = document.querySelector(".navprimario__menu-items-carrito-link");
const botonCerrarCarrito = document.querySelector(".carrito-sidebar__salir");

function carrito(event) {
  event.preventDefault();
  carritoSidebar.classList.toggle("abierto");
}

botonAbrirCarrito.addEventListener("click", carrito);
botonCerrarCarrito.addEventListener("click", carrito);



function getCursosEnElCarrito() {
  let cursoCarrito = JSON.parse(sessionStorage.getItem('cursoCarrito'));

  if (!cursoCarrito) {
    cursoCarrito = { curso: [], precioTotalDelCarrito: 0, giftCard: [] };
    sessionStorage.setItem('cursoCarrito', JSON.stringify(cursoCarrito));
  }

  return cursoCarrito;
}

function agregarCursoAlCarrito(id) {


  let cursoInformacion = getCursosEnElCarrito();

  const cursoSeleccionado = listaDeCursos.find(curso => curso.id === id);

  const cursoEnCarrito = cursoInformacion.curso.find(curso => curso.id === id);

  if (cursoEnCarrito) {
    cursoEnCarrito.cantidad += 1;
    cursoEnCarrito.precioTotal = cursoEnCarrito.cantidad * cursoEnCarrito.precio;
  } else {
    cursoInformacion.curso.push({
      id: cursoSeleccionado.id,
      titulo: cursoSeleccionado.nombre,
      imagen: cursoSeleccionado.imagen,
      modalidad: cursoSeleccionado.modalidad,
      precio: cursoSeleccionado.precio,
      cantidad: 1
    });
  }

  calcularPrecioTotalDelCarrito(cursoInformacion);
  guardarCursoEnElCarrito(cursoInformacion);
  actualizarContadorDeCarrito();
  displayCurso();
}

function actualizarContadorDeCarrito() {
  const cursoInformacion = getCursosEnElCarrito();
  const contadorElemento = document.querySelector(".navprimario__menu-items-carrito-numero");
  const contadorDeCursosSidebar = document.querySelector(".js-carrito-sidebar__header__titulo__contador");


  const totalCursos = cursoInformacion.curso.reduce((contador, curso) => contador + curso.cantidad, 0);
  const totalGiftCards = cursoInformacion.giftCard.length;

  const totalItems = totalCursos + totalGiftCards;
  contadorElemento.innerText = totalItems;
  contadorDeCursosSidebar.innerText = totalItems;

  const mensajeCarritoVacio = document.querySelector(".carrito-sidebar__contenedor-carrito-vacio");
  mensajeCarritoVacio.classList.toggle("oculto", totalItems > 0);

  sessionStorage.setItem("contador-carrito", totalItems);
}

function guardarCursoEnElCarrito(cursoInformacion) {
  sessionStorage.setItem("cursoCarrito", JSON.stringify(cursoInformacion));
}

function displayCurso() {
  const cursoInformacion = getCursosEnElCarrito();
  const cartItemsContainer = document.querySelector(".js-carrito-sidebar__cursos");
  cartItemsContainer.innerHTML = "";

  cursoInformacion.curso.forEach(item => {
    const cartItemElement = document.createElement("article");
    cartItemElement.classList.add("carrito-sidebar__cursos__item");

    const precioTotal = item.precio * item.cantidad;

    cartItemElement.innerHTML = `  
          <img class="carrito-sidebar__cursos__item__imagen" src="${item.imagen}" alt="">
          <div class="carrito-sidebar__cursos__item__descripcion">
              <p class="carrito-sidebar__cursos__item__titulo">${item.titulo}</p>
              <p class="carrito-sidebar__cursos__item__modalidad">Modalidad: ${item.modalidad}</p>
              <p class="carrito-sidebar__cursos__item__precio">U$D ${precioTotal}</p>
              <div class="carrito-sidebar__cursos__item__contenedor-cantidad">
                  <span class="carrito-sidebar__cursos__item__contenedor-cantidad__eliminar" 
          onclick="disminuirCantidadDeCursos('${item.titulo}')">-</span>
                  <p class="carrito-sidebar__cursos__item__contenedor-cantidad__numero">${item.cantidad}</p>
                  <span class="carrito-sidebar__cursos__item__contenedor-cantidad__agregar" onclick="aumentarCantidadDeCursos('${item.titulo}')">+</span>
              </div>
          </div>`;
    cartItemsContainer.appendChild(cartItemElement);
  });


  cursoInformacion.giftCard.forEach(giftCard => {
    const cartItemElement = document.createElement("article");
    cartItemElement.classList.add("carrito-sidebar__cursos__item");

    cartItemElement.innerHTML = `  
          <img class="carrito-sidebar__cursos__item__imagen" src="${giftCard.imagen}" alt="">
          <div class="carrito-sidebar__cursos__item__descripcion">
          <div class="carrito-sidebar__cursos__item__contenedor"
           <p class="carrito-sidebar__cursos__item__titulo">${giftCard.titulo}</p>
           <span class="carrito-sidebar__cursos__item__eliminar-giftcard" onclick="eliminarGiftcard('${giftCard.codigo}')">X</span>
          </div>
              <p class="carrito-sidebar__cursos__item__modalidad">Código: ${giftCard.codigo}</p>
              <p class="carrito-sidebar__cursos__item__precio">U$D ${giftCard.monto}</p>
          </div>`;
    cartItemsContainer.appendChild(cartItemElement);
  });

  const mensajeCarritoVacio = document.querySelector(".carrito-sidebar__contenedor-carrito-vacio");
  mensajeCarritoVacio.classList.toggle("oculto", cursoInformacion.curso.length + cursoInformacion.giftCard.length > 0);

  document.querySelector(".js-carrito-sidebar_botones__subtotal__precioTotalCarrito").textContent = `U$D ${cursoInformacion.precioTotalDelCarrito}`;
}



function eliminarGiftcard(codigo) {
  const carrito = getCursosEnElCarrito();

  
  carrito.giftCard = carrito.giftCard.filter(giftCard => giftCard.codigo !== codigo);
  
  
  calcularPrecioTotalDelCarrito(carrito);
  guardarCursoEnElCarrito(carrito);
  displayCurso();
  actualizarContadorDeCarrito();
}

function aumentarCantidadDeCursos(titulo) {
  const cursoInformacion = getCursosEnElCarrito();
  const curso = cursoInformacion.curso.find(curso => curso.titulo === titulo);

  if (curso) {
    curso.cantidad += 1;
    calcularPrecioTotalDelCarrito(cursoInformacion);
    guardarCursoEnElCarrito(cursoInformacion);
    displayCurso();
    actualizarContadorDeCarrito();
  }
}

function disminuirCantidadDeCursos(titulo) {
  const cursoInformacion = getCursosEnElCarrito();
  const curso = cursoInformacion.curso.find(curso => curso.titulo === titulo);

  if (curso && curso.cantidad > 1) {
    curso.cantidad -= 1;
  } else {
    cursoInformacion.curso = cursoInformacion.curso.filter(curso => curso.titulo !== titulo);
  }

  calcularPrecioTotalDelCarrito(cursoInformacion);
  guardarCursoEnElCarrito(cursoInformacion);
  actualizarContadorDeCarrito();
  displayCurso();
}

function calcularPrecioTotalDelCarrito(cursoInformacion) {
  const totalCursos = cursoInformacion.curso.reduce(
    (suma, curso) => suma + (curso.cantidad * curso.precio), 0
  );

  const totalGiftCards = cursoInformacion.giftCard.reduce(
    (suma, giftCard) => suma + giftCard.monto, 0
  );

  cursoInformacion.precioTotalDelCarrito = totalCursos + totalGiftCards;

}






const arrayGiftCards = JSON.parse(localStorage.getItem('giftCards'));

function agregarGiftCardAlCarrito(codigo) {

  let cursoInformacion = getCursosEnElCarrito();

  const giftCardEnLocalStorage = JSON.parse(localStorage.getItem('giftCards')).find(gift => gift.codigo === codigo);


  cursoInformacion.giftCard.push({
    codigo: giftCardEnLocalStorage.codigo,
    titulo: giftCardEnLocalStorage.nombre,
    monto: parseFloat(giftCardEnLocalStorage.monto),
    imagen: giftCardEnLocalStorage.imagen
  });


  calcularPrecioTotalDelCarrito(cursoInformacion);
  guardarCursoEnElCarrito(cursoInformacion);
  actualizarContadorDeCarrito();
  displayCurso();
}