document.addEventListener("DOMContentLoaded",()=>{
    mostrarTarjetas((JSON.parse(sessionStorage.getItem('ListaDeCursos'))).length);
});
