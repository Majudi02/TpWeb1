

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

const cursoCarrito = sessionStorage.getItem('cursoCarrito');
const formularioPago = document.querySelector(".boton_confirmar");

formularioPago.addEventListener('click', (event) => {
    event.preventDefault();

    sessionStorage.removeItem('cursoCarrito');

    formularioPago.closest('form').submit();

});