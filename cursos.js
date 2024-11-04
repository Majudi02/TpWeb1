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
    },
    {
        id: 2,
        nombre: "FrontEnd Intensivo",
        imagen: "../assets/css-html-js.png",
        precio: 60,
        duracion: "90 horas",
        descripcion: `Domina el desarrollo de interfaces web interactivas y visualmente atractivas.
                            En este curso intensivo, aprenderás las tecnologías fundamentales del Front End como HTML, CSS, y JavaScript,
                            así como frameworks populares como React para crear aplicaciones web dinámicas y responsivas.`,
        requisitos: `Conocimientos básicos de HTML y CSS. Conocimiento previo en JavaScript es útil,
                            pero no esencial. Disposición para la práctica intensiva de conceptos.`,
        modalidad: "Virtual",
        contenido: [
            {
                nombre: "Introducción",
                temas: [
                    { tema: "Estructura básica de HTML", icono: "../assets/play.png" },
                    { tema: "Fundamentos de CSS", icono: "../assets/play.png" },
                    { tema: "Introducción a JavaScript", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 1",
                temas: [
                    { tema: "Diseño responsivo con CSS Flexbox y Grid", icono: "../assets/play.png" },
                    { tema: "Manipulación del DOM con JavaScript", icono: "../assets/play.png" },
                    { tema: "Eventos en JavaScript", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 2",
                temas: [
                    { tema: "Introducción a React", icono: "../assets/play.png" },
                    { tema: "Componentes y propiedades en React", icono: "../assets/play.png" },
                    { tema: "Manejo de estado en React", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            }
        ],
        docenteId: 2
    },
    {
        id: 3,
        nombre: "Python para principiantes",
        imagen: "../assets/python.png",
        precio: 20,
        duracion: "60 horas",
        descripcion: `Aprende a programar en Python, uno de los lenguajes de programación más populares y versátiles del mundo. Este curso está diseñado para principiantes y te enseñará desde los fundamentos de la programación hasta conceptos más avanzados, utilizando ejercicios prácticos y proyectos reales.`,
        requisitos: `No se requieren conocimientos previos en programación. Se recomienda tener un ordenador y una conexión a internet para las prácticas en línea. La disposición para aprender y experimentar es esencial.`,
        modalidad: "Virtual",
        contenido: [
            {
                nombre: "Introducción",
                temas: [
                    { tema: "Introducción a Python y configuración del entorno", icono: "../assets/play.png" },
                    { tema: "Tipos de datos y variables", icono: "../assets/play.png" },
                    { tema: "Estructuras de control", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 1",
                temas: [
                    { tema: "Funciones y módulos", icono: "../assets/play.png" },
                    { tema: "Manejo de errores y excepciones", icono: "../assets/play.png" },
                    { tema: "Manipulación de archivos", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 2",
                temas: [
                    { tema: "Introducción a la programación orientada a objetos", icono: "../assets/play.png" },
                    { tema: "Librerías y frameworks populares", icono: "../assets/play.png" },
                    { tema: "Proyectos finales y buenas prácticas", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            }
        ],
        docenteId: 3
    }, {
        id: 4,
        nombre: "Java - Nivel intermedio",
        imagen: "../assets/java.png",
        precio: 50,
        duracion: "85 horas",
        descripcion: `Este curso intermedio de Java te ayudará a profundizar en conceptos avanzados del lenguaje, 
                      como la programación orientada a objetos, el manejo de excepciones, y las estructuras de datos. 
                      Ideal para aquellos que ya tienen conocimientos básicos de Java y desean llevar sus habilidades al siguiente nivel.`,
        requisitos: `Conocimientos básicos de Java y programación orientada a objetos. 
                      Se recomienda tener experiencia previa en la creación de programas básicos.`,
        modalidad: "Virtual",
        contenido: [
            {
                nombre: "Introducción",
                temas: [
                    { tema: "Repaso de conceptos básicos de Java", icono: "../assets/play.png" },
                    { tema: "Programación orientada a objetos avanzada", icono: "../assets/play.png" },
                    { tema: "Excepciones y manejo de errores", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 1",
                temas: [
                    { tema: "Colecciones en Java (List, Set, Map)", icono: "../assets/play.png" },
                    { tema: "Streams y manejo de datos", icono: "../assets/play.png" },
                    { tema: "Programación funcional en Java", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 2",
                temas: [
                    { tema: "Interfaz gráfica con JavaFX", icono: "../assets/play.png" },
                    { tema: "Creación de aplicaciones con bases de datos", icono: "../assets/play.png" },
                    { tema: "Proyecto final y buenas prácticas", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            }
        ],
        docenteId: 1
    },
    {
        id: 5,
        nombre: "Programación en C++",
        imagen: "../assets/c++.png",
        precio: 30,
        duracion: "50 horas",
        descripcion: `Este curso te introduce a la programación en C++, cubriendo desde los fundamentos del lenguaje hasta conceptos intermedios.
                      Aprende a trabajar con variables, estructuras de control, funciones y punteros para desarrollar programas eficientes.`,
        requisitos: `Conocimientos básicos de programación y lógica. No es necesario haber trabajado previamente con C++.`,
        modalidad: "Presencial",
        contenido: [
            {
                nombre: "Introducción",
                temas: [
                    { tema: "Sintaxis básica y estructuras de control", icono: "../assets/play.png" },
                    { tema: "Variables y tipos de datos en C++", icono: "../assets/play.png" },
                    { tema: "Control de flujo: condicionales y bucles", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 1",
                temas: [
                    { tema: "Funciones y modularización de código", icono: "../assets/play.png" },
                    { tema: "Arreglos y vectores", icono: "../assets/play.png" },
                    { tema: "Manejo de memoria y punteros", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 2",
                temas: [
                    { tema: "Programación orientada a objetos en C++", icono: "../assets/play.png" },
                    { tema: "Herencia y polimorfismo", icono: "../assets/play.png" },
                    { tema: "Proyecto final", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            }
        ],
        docenteId: 2
    },

    {
        id: 6,
        nombre: "Aterrizando en R-Studio",
        imagen: "../assets/r-studio.png",
        precio: 28,
        duracion: "20 horas",
        descripcion: `Explora el lenguaje de programación R y su entorno R-Studio para el análisis y la visualización de datos. 
                      Aprende a trabajar con datos, crear gráficos y aplicar técnicas estadísticas básicas.`,
        requisitos: `Conocimientos básicos de estadística y análisis de datos. No se requiere experiencia previa en programación.`,
        modalidad: "Virtual",
        contenido: [
            {
                nombre: "Introducción",
                temas: [
                    { tema: "Instalación y configuración de R y R-Studio", icono: "../assets/play.png" },
                    { tema: "Fundamentos de R", icono: "../assets/play.png" },
                    { tema: "Manipulación de datos con dplyr", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 1",
                temas: [
                    { tema: "Visualización de datos con ggplot2", icono: "../assets/play.png" },
                    { tema: "Análisis estadístico básico", icono: "../assets/play.png" },
                    { tema: "Series de tiempo y gráficos avanzados", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 2",
                temas: [
                    { tema: "Proyectos de análisis de datos", icono: "../assets/play.png" },
                    { tema: "Reportes y documentación en R", icono: "../assets/play.png" },
                    { tema: "Proyecto final", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            }
        ],
        docenteId: 3
    }
];

const docentes = [
    {
        id: 1,
        nombre: "Laura Sánchez",
        imagen: "../assets/docente-laura-sanchez.jpeg",
        descripcion: `Laura Sánchez es una desarrolladora frontend con más de 8 años de experiencia en la industria
                      tecnológica. Especializada en la creación de interfaces web dinámicas y responsivas, ha
                      trabajado en proyectos para empresas internacionales y startups. Laura es apasionada por
                      compartir su conocimiento, y en sus clases se enfoca en brindar una formación práctica y
                      orientada a la resolución de problemas reales.`
    },
    {
        id: 2,
        nombre: "Claudio Perez",
        imagen: "../assets/docente-claudio-perez.jpeg",
        descripcion: `Claudio Perez" es un desarrollador full-stack con más de 10 años de experiencia en diversas áreas del desarrollo web. 
                      Ha trabajado en proyectos de gran escala y cuenta con amplios conocimientos en backend y frontend. 
                      Pedro es conocido por su enfoque en la eficiencia del código y la optimización de aplicaciones.`
    },
    {
        id: 3,
        nombre: "Ana Rodríguez",
        imagen: "../assets/docente-ana-rodriguez.jpg",
        descripcion: `Ana Rodríguez es una ingeniera de software especializada en inteligencia artificial y análisis de datos. 
                      Con más de 7 años de experiencia, ha trabajado en proyectos innovadores y es apasionada por la enseñanza de 
                      Python y sus aplicaciones en ciencia de datos. Sus clases están orientadas a la resolución de problemas 
                      y a la aplicación práctica de conocimientos en proyectos reales.`
    },
    {
        id: 4,
        nombre: "José Martínez",
        imagen: "../assets/docente-jose-martinez.jpg",
        descripcion: `José Martínez es un experto en bases de datos con más de 12 años de experiencia en la administración y optimización de sistemas de datos empresariales. 
                      Ha colaborado en proyectos para grandes corporaciones y es un entusiasta de la enseñanza de SQL y técnicas avanzadas de gestión de datos. 
                      En sus clases, José se enfoca en el aprendizaje práctico y en la resolución de desafíos complejos.`
    }
];

localStorage.setItem('ListaDeCursos', JSON.stringify(cursosInformacion));

const url = new URL(location.href);
const idCurso = parseInt(url.searchParams.get('id'));


const cursos = JSON.parse(localStorage.getItem('ListaDeCursos'));

const cursoSeleccionado = cursos.find(cursos => cursos.id === idCurso);

console.log(cursoSeleccionado);
console.log(cursoSeleccionado.docenteId);

/*
document.addEventListener("DOMContentLoaded", () => {
    const imagen = document.querySelector(".curso_imagen");
    if (imagen) {
        imagen.src = `${cursoSeleccionado.imagen}`;
    }
});
*/

const imagen = document.querySelector(".curso_imagen");
imagen.src = `${cursoSeleccionado.imagen}`;


const titulo = document.querySelector(".curso_informacion__titulo");
titulo.textContent = cursoSeleccionado.nombre;

const valor = document.querySelector(".curso_informacion__valor");
valor.textContent = `Precio: USD $${cursoSeleccionado.precio} `;

const duracion = document.querySelector(".curso_informacion__duracion");
duracion.textContent = `Tiempo de dedicación necesario: ${cursoSeleccionado.duracion} `;

const descripcion = document.querySelector(".curso_informacion__descripcion");
descripcion.textContent = `Descripcion del curso: ${cursoSeleccionado.descripcion} `;

const requisitos = document.querySelector(".curso_informacion__requisitos");
requisitos.textContent = `Requisitos previos: ${cursoSeleccionado.requisitos} `;


document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".curso_informacion__button");
    if (cursoSeleccionado.modalidad === "Virtual") {
        boton.textContent = `Pagar`;
        boton.href = `./pagar-con-tarjeta.html`;
    } else {
        boton.textContent = "Inscribirse";
        boton.href = `./form-de-inscripcion.html`;
    }
});

/*
const boton = document.querySelector(".curso_informacion__boton");
if (cursoSeleccionado.modalidad === "Virtual") {
    boton.textContent = `Pagar`;
    boton.href = ""
} else {
    boton.textContent = "Inscribirse";
}
    */
document.addEventListener("DOMContentLoaded", () => {
    const unidades = document.querySelectorAll(".curso_summary");

    cursoSeleccionado.contenido.forEach((unidad, unidadesIndex) => {
        unidades[unidadesIndex].textContent = unidad.nombre;

        const contenedorTemas = unidades[unidadesIndex].parentElement.querySelectorAll(".curso_summary__tema");
        const contenedorImagenes = unidades[unidadesIndex].parentElement.querySelectorAll(".curso_summary__tema__imagen");

        unidad.temas.forEach((contenido, indice) => {
            if (contenedorTemas[indice]) {
                contenedorTemas[indice].innerHTML = ` <p class="curso_summary__tema">
                                    <img class="curso_summary__tema__imagen" src="${contenido.icono}" alt="icono">
                                    ${contenido.tema}
                                    <input class="curso_summary__tema__checkbox" type="checkbox" class="checkbox">
                                </p>`;
            }
        });
    });
});






const idDocente = cursoSeleccionado.docenteId;
const docente = docentes.find(docente => docente.id === idDocente);



const imagenDocente = document.querySelector(".docente_imagen");
imagenDocente.src = docente.imagen;


const imagenDocenteCelular = document.querySelector(".docente_info_imagen_celular");
imagenDocenteCelular.src = docente.imagen;



const nombreDocente = document.querySelector(".docente_info_nombre");
nombreDocente.textContent = docente.nombre;

const nombreDocenteCelular = document.querySelector(".docente_info_nombre_celular");
nombreDocenteCelular.textContent = docente.nombre;


const descripcionDelDocente = document.querySelector(".docente_info_descripcion");
descripcionDelDocente.textContent = docente.descripcion;