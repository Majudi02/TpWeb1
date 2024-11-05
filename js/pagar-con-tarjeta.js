

const cursosAPagar = getCursosEnElCarrito().curso;
console.log(cursosAPagar);


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
                                 <p class="curso_seleccionado_contenedor-del-precio_cantidad">Cantidad:${item.cantidad}</p>
                                <p class="curso_seleccionado_contenedor-del-precio_precio"> U$D ${item.precio}</p>
                            </div>
                            <p class="curso_seleccionado_modalidad">Modalidad: ${item.modalidad}</p>
                        </div>
                    </article>`;


    containerCursos.appendChild(article);
});





const containerPrecio = document.createElement("article");
containerPrecio.className = "precio-total";

containerPrecio.innerHTML = `<p class="total">Total: </p>
                        <p>U$D ${precioTotalCarrito}</p>`;


containerCursos.appendChild(containerPrecio)
