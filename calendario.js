const cursosInformacion = [
    {
        id: 1,
        nombre: "MySQL para principiantes",
        imagen: "../assets/mysql.png",
        precio: 40,
        duracion: "20 horas",
        descripcion: `Aprende a gestionar y manipular bases de datos con SQL,
                            el lenguaje estándar de consultas. En este curso, descubrirás cómo realizar consultas básicas y
                            avanzadas, desde seleccionar datos hasta crear y modificar estructuras de bases de datos.
                            Desarrolla habilidades prácticas con ejercicios enfocados en casos reales, ideales para
                            principiantes y profesionales que buscan mejorar sus conocimientos en el manejo de datos.`,
        requisitos: `Conocimientos básicos de informática y navegación por
                            internet. Familiaridad con el concepto de bases de datos y nociones básicas de lógica de
                            programación son recomendables, pero no obligatorios. Disposición para el aprendizaje práctico.`,
        modalidad: "Presencial",
        contenido: [
            {
                nombre: "Introduccion",
                temas: [
                    { tema: "Conceptos básicos de bases de datos", icono: "../assets/play.png" },
                    { tema: "Introducción a las consultas SQL (SELECT, FROM, WHERE)", icono: "../assets/reloj.png" },
                    { tema: "Crear, leer, actualizar y eliminar datos (INSERT, SELECT, UPDATE, DELETE)", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 1",
                temas: [
                    { tema: "Tablas y relaciones en bases de datos relacionales", icono: "../assets/play.png" },
                    { tema: "Claves primarias y foráneas", icono: "../assets/play.png" },
                    { tema: "Normalización de bases de datos", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 2",
                temas: [
                    { tema: "Consultas con múltiples tablas (JOIN)", icono: "../assets/play.png" },
                    { tema: "Funciones agregadas (SUM, COUNT, AVG)", icono: "../assets/play.png" },
                    { tema: "Subconsultas y consultas anidadas", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            }
        ],
        docenteId: 1,
    }
]
const abrirPopup = document.querySelector('.section-recuadro-p-nuevocurso');
const popup = document.querySelector('.popup');
const irAlCurso = document.querySelector('.popup-button');


abrirPopup.addEventListener('click', ()=> {
    popup.classList.add('popup__open');

});

document.addEventListener('DOMContentLoaded', ()=>{
    const tituloCurso = document.querySelector('.popup_titulo');
    const imagenCurso = document.querySelector('.popup_imagen');
    const descripcionCurso = document.querySelector('.popup_descripcion');
    tituloCurso.textContent = cursosInformacion[0].nombre;
    imagenCurso.src = cursosInformacion[0].imagen;
    descripcionCurso.textContent = cursosInformacion[0].descripcion;
});

irAlCurso.addEventListener('click', ()=>{
    irAlCurso.href =  

});


const cerrarPopup = document.querySelector('.popup-cerrar');
cerrarPopup.addEventListener('click', ()=>{
popup.classList.remove('popup__open');

});