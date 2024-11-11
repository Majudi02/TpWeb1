function mostrarTarjetas(cantidad) {
    const cursosGuardados = JSON.parse(sessionStorage.getItem('ListaDeCursos'));
    const container = document.querySelector(".contenedor-tarjetas");

    const cursosMostrados = cursosGuardados.slice(0, cantidad);

    cursosMostrados.forEach(item => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta";

        let href = `./descripcion.del-curso.html?id=${item.id}`;
        if (cantidad === 6) {
            href = `/pages/descripcion.del-curso.html?id=${item.id}`;
        }

        let boton = '';



        if (item.modalidad === 'Virtual') {
            boton = `<a class="boton boton--comprar" href="#">Agregar al carrito</a>`;
        } else {
            let hrefInscripcion = `./form-de-inscripcion.html?id=${item.id}`;
            if (cantidad === 6) {
                hrefInscripcion = `/pages/form-de-inscripcion.html?id=${item.id}`;
            }
            boton = `<a class="boton boton--comprar" href="${hrefInscripcion}" >Inscribirse</a>`;
        }

        tarjeta.innerHTML = `
            <div class="tarjeta__img-precio">
                <img src="${item.imagen}" alt="logo-fundamentos-progra" class="tarjeta__imagen" />
                <h3 class="tarjeta__precio">U$D ${item.precio}</h3>
            </div>
            <h2 class="tarjeta__titulo">${item.nombre}</h2>
            <h3 class="tarjeta__horas">${item.duracion} hs</h3>
            <h3 class="tarjeta__modalidad">${item.modalidad}</h3>
            <div class="tarjeta__detalle">
                <a class="boton boton--ver-detalle" href="${href}">Ver detalle</a>
            </div>
            <div class="tarjeta__comprar">
                ${boton}
            </div>`;

        container.appendChild(tarjeta);


        const botonComprar = tarjeta.querySelector(".boton--comprar");
        botonComprar.addEventListener("click", (event) => {
            if (item.modalidad === 'Virtual') {
                event.preventDefault();
                agregarCursoAlCarrito(item.id);
                if (!carritoSidebar.classList.contains("abierto")) {
                    carritoSidebar.classList.add("abierto");
                }
            }
        });
    });


}