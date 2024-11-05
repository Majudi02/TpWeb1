
const cursosInformacion = [
    {
        id: 1,
        nombre: "MySQL para principiantes",
        imagen: "../assets/mysql.png",
        precio: 40,
        duracion: 20,
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
        duracion: 90,
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
        duracion: 60,
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
        duracion: 85,
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
        duracion: 50,
        descripcion: `Este curso te introduce a la programación en C++, cubriendo desde los fundamentos del lenguaje hasta conceptos intermedios.
                      Aprende a trabajar con variables, estructuras de control, funciones y punteros para desarrollar programas eficientes.`,
        requisitos: `Conocimientos básicos de programación y lógica. No es necesario haber trabajado previamente con C++.`,
        modalidad: "Virtual",
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
        duracion: 20,
        descripcion: `Explora el lenguaje de programación R y su entorno R-Studio para el análisis y la visualización de datos. 
                      Aprende a trabajar con datos, crear gráficos y aplicar técnicas estadísticas básicas.`,
        requisitos: `Conocimientos básicos de estadística y análisis de datos. No se requiere experiencia previa en programación.`,
        modalidad: "Presencial",
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
        docenteId: 4
    },
    {
        id: 7,
        nombre: "Fundamentos de Programación",
        imagen: "../assets/fundamentos-progra.png",
        precio: 25,
        duracion: 30,
        descripcion: `Este curso está diseñado para quienes desean iniciarse en el mundo de la programación. Aprenderás conceptos clave como tipos de datos, estructuras de control y la lógica básica de programación, utilizando un lenguaje de programación fácil de entender.`,
        requisitos: `No se requieren conocimientos previos. Solo necesitas interés en aprender y un ordenador para realizar las prácticas.`,
        modalidad: "Virtual",
        contenido: [
            {
                nombre: "Introducción",
                temas: [
                    { tema: "Conceptos básicos de programación", icono: "../assets/play.png" },
                    { tema: "Tipos de datos y variables", icono: "../assets/reloj.png" },
                    { tema: "Estructuras de control: condicionales y bucles", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 1",
                temas: [
                    { tema: "Funciones y procedimientos", icono: "../assets/play.png" },
                    { tema: "Arreglos y estructuras de datos", icono: "../assets/play.png" },
                    { tema: "Algoritmos básicos y su aplicación", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 2",
                temas: [
                    { tema: "Programación modular y buenas prácticas", icono: "../assets/play.png" },
                    { tema: "Proyecto final", icono: "../assets/reloj.png" },
                    { tema: "Evaluación final del curso", icono: "../assets/examen.png" }
                ]
            }
        ],
        docenteId: 1
    },
    {
        id: 8,
        nombre: "Bases de Datos - Nivel Avanzado",
        imagen: "../assets/bases-de-datos.png",
        precio: 70,
        duracion: 50,
        descripcion: `Este curso avanzado de bases de datos te proporcionará conocimientos en diseño avanzado, optimización de consultas y administración de bases de datos, ideal para aquellos que desean mejorar su manejo de grandes volúmenes de datos y sistemas complejos.`,
        requisitos: `Conocimientos intermedios de bases de datos y experiencia en consultas SQL.`,
        modalidad: "Virtual",
        contenido: [
            {
                nombre: "Introducción",
                temas: [
                    { tema: "Repaso de consultas SQL avanzadas", icono: "../assets/play.png" },
                    { tema: "Optimización de bases de datos", icono: "../assets/reloj.png" },
                    { tema: "Indices y su aplicación en bases de datos", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 1",
                temas: [
                    { tema: "Particionamiento y replicación de datos", icono: "../assets/play.png" },
                    { tema: "Administración de bases de datos en sistemas distribuidos", icono: "../assets/play.png" },
                    { tema: "Monitoreo y gestión de bases de datos", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 2",
                temas: [
                    { tema: "Seguridad y encriptación en bases de datos", icono: "../assets/play.png" },
                    { tema: "Bases de datos NoSQL y su integración", icono: "../assets/play.png" },
                    { tema: "Proyecto final y prácticas avanzadas", icono: "../assets/reloj.png" },
                    { tema: "Evaluación final", icono: "../assets/examen.png" }
                ]
            }
        ],
        docenteId: 4
    },
    {
        id: 9,
        nombre: "Diseño Gráfico desde Cero",
        imagen: "../assets/diseño-grafico.png",
        precio: 45,
        duracion: 40,
        descripcion: `Un curso introductorio ideal para quienes desean explorar el diseño gráfico. Aprenderás conceptos de color, tipografía y composición, así como las herramientas esenciales como Adobe Photoshop e Illustrator para la creación de gráficos y elementos visuales atractivos.`,
        requisitos: `No se requiere experiencia previa. Es recomendable contar con una computadora que soporte programas de diseño gráfico.`,
        modalidad: "Presencial",
        contenido: [
            {
                nombre: "Introducción",
                temas: [
                    { tema: "Fundamentos del diseño gráfico", icono: "../assets/play.png" },
                    { tema: "Teoría del color y su aplicación", icono: "../assets/reloj.png" },
                    { tema: "Tipografía y legibilidad", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 1",
                temas: [
                    { tema: "Uso básico de Adobe Photoshop", icono: "../assets/play.png" },
                    { tema: "Creación de composiciones visuales", icono: "../assets/play.png" },
                    { tema: "Herramientas avanzadas de edición", icono: "../assets/reloj.png" },
                    { tema: "Examen", icono: "../assets/examen.png" }
                ]
            },
            {
                nombre: "Unidad 2",
                temas: [
                    { tema: "Diseño vectorial en Adobe Illustrator", icono: "../assets/play.png" },
                    { tema: "Creación de logotipos y branding", icono: "../assets/play.png" },
                    { tema: "Proyecto final y entrega de portafolio", icono: "../assets/reloj.png" },
                    { tema: "Evaluación final", icono: "../assets/examen.png" }
                ]
            }
        ],
        docenteId: 2
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



document.addEventListener("DOMContentLoaded",()=>{
    sessionStorage.setItem('ListaDeCursos', JSON.stringify(cursosInformacion));
    sessionStorage.setItem('Docentes', JSON.stringify(docentes));
    mostrarTarjetas(6);
});
