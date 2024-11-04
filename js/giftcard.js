/* 
// Selecciona el contenedor de la giftcard y el título
const giftcardContainer = document.querySelector(".giftcard-preview"); // Ajusta la clase si es diferente
const giftcardTitle = document.querySelector(".giftcard-preview h2");  // Ajusta el selector para el título

// Cambia el color de fondo según la opción seleccionada
document.querySelectorAll("input[name='color']").forEach(input => {
    input.addEventListener("change", function () {
        if (this.id === "color-rojo") {
            giftcardContainer.style.backgroundColor = "red";
        } else if (this.id === "color-azul") {
            giftcardContainer.style.backgroundColor = "blue";
        } else if (this.id === "color-verde") {
            giftcardContainer.style.backgroundColor = "green";
        } else if (this.id === "color-amarillo") {
            giftcardContainer.style.backgroundColor = "yellow";
        } else if (this.id === "color-rosa") {
            giftcardContainer.style.backgroundColor = "pink";
        }
    });
});

// Cambia el tamaño de la fuente según la opción seleccionada
document.querySelectorAll("input[name='tamaño']").forEach(input => {
    input.addEventListener("change", function () {
        if (this.id === "size-20px") {
            giftcardTitle.style.fontSize = "20px";
        } else if (this.id === "size-28px") {
            giftcardTitle.style.fontSize = "28px";
        } else if (this.id === "size-32px") {
            giftcardTitle.style.fontSize = "32px";
        } else if (this.id === "size-48px") {
            giftcardTitle.style.fontSize = "48px";
        } else if (this.id === "size-60px") {
            giftcardTitle.style.fontSize = "60px";
        }
    });
});

*/ 