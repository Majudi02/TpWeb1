

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



const formularioPago = document.querySelector(".boton_confirmar");

formularioPago.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío inmediato

    console.log("Antes de eliminar:", sessionStorage.getItem('cursoCarrito')); // Verifica si existe antes

    sessionStorage.removeItem('cursoCarrito'); // Elimina la lista de cursos

    console.log("Después de eliminar:", sessionStorage.getItem('cursoCarrito')); // Verifica si fue eliminado

    formularioPago.submit(); // Envía el formulario después de eliminar los datos
});


