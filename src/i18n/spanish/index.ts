const languages = {
  es: "español",
  en: "english",
  de: "deutsch",
};

const head = {
  name: "Oliver Ramirez Garcia",
  carrier: "Senior Frontend",
  email: "oliiv@outlook.com",
};

const social = {
  title: "Social",
  items: [
    {
      title: "linkedin",
      description: "linkedin.com/in/oliiv",
      link: "https://www.linkedin.com/in/oliiv/",
      srcImg:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHJlY3QgeT0iMTYwIiBzdHlsZT0iZmlsbDojMTk3NkQyOyIgd2lkdGg9IjExNC40OTYiIGhlaWdodD0iMzUyIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00MjYuMzY4LDE2NC4xMjhjLTEuMjE2LTAuMzg0LTIuMzY4LTAuOC0zLjY0OC0xLjE1MmMtMS41MzYtMC4zNTItMy4wNzItMC42NC00LjY0LTAuODk2DQoJCWMtNi4wOC0xLjIxNi0xMi43MzYtMi4wOC0yMC41NDQtMi4wOGwwLDBsMCwwYy02Ni43NTIsMC0xMDkuMDg4LDQ4LjU0NC0xMjMuMDQsNjcuMjk2VjE2MEgxNjB2MzUyaDExNC40OTZWMzIwDQoJCWMwLDAsODYuNTI4LTEyMC41MTIsMTIzLjA0LTMyYzAsNzkuMDA4LDAsMjI0LDAsMjI0SDUxMlYyNzQuNDY0QzUxMiwyMjEuMjgsNDc1LjU1MiwxNzYuOTYsNDI2LjM2OCwxNjQuMTI4eiIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGN4PSI1NiIgY3k9IjU2IiByPSI1NiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
    },
    {
      title: "email",
      description: "oliiv@outlook.com",
      link: "mailto:oliiv@outlook.com",
      srcImg:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxRTg4RTU7IiBkPSJNNDk5LjYyOCw0MDcuNDY4Yy0xMC4xMjgsMTIuMTYtMjUuMTM0LDE5LjE5NC00MC45NiwxOS4ySDUzLjMzNA0KCWMtMTUuODI2LTAuMDA2LTMwLjgzMi03LjA0LTQwLjk2LTE5LjJsMTk1LjYyNy0xNjIuOTg3bDIwLjI2NywxMy44NjdjMTYuNjk1LDExLjUyLDM4Ljc3MiwxMS41Miw1NS40NjcsMGwyMC4yNjctMTMuODY3DQoJTDQ5OS42MjgsNDA3LjQ2OHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM2NEI1RjY7IiBkPSJNNTAyLjYxNCwxMDguNTg4TDMwNC4wMDEsMjQ0LjQ4MWwtMjAuMjY3LDEzLjg2N2MtMTYuNjk1LDExLjUyLTM4Ljc3MiwxMS41Mi01NS40NjcsMA0KCWwtMjAuMjY3LTEzLjg2N0w5LjM4OCwxMDguMzc0YzkuOTk0LTE0LjQxMSwyNi40MDktMjMuMDE3LDQzLjk0Ny0yMy4wNGg0MDUuMzMzQzQ3Ni4yODUsODUuMjQxLDQ5Mi43ODEsOTMuOTY5LDUwMi42MTQsMTA4LjU4OHoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMyMTk2RjM7IiBkPSJNMjA4LjAwMSwyNDQuNDgxTDEyLjM3NCw0MDcuNDY4Yy04LjAwNy05LjU3LTEyLjM4OC0yMS42NTUtMTIuMzczLTM0LjEzM1YxMzguNjY4DQoJCWMtMC4wNjUtMTAuODIzLDMuMjE0LTIxLjQwMyw5LjM4Ny0zMC4yOTNMMjA4LjAwMSwyNDQuNDgxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMyMTk2RjM7IiBkPSJNNTEyLjAwMSwxMzguNjY4djIzNC42NjdjMC4wMTQsMTIuNDc4LTQuMzY2LDI0LjU2My0xMi4zNzMsMzQuMTMzTDMwNC4wMDEsMjQ0LjQ4MWwxOTguNjEzLTEzNS44OTMNCgkJQzUwOC43NTYsMTE3LjQxNCw1MTIuMDMzLDEyNy45MTUsNTEyLjAwMSwxMzguNjY4eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
    },
    {
      title: "git",
      description: "github.com/revione",
      link: "https://github.com/revione",
      srcImg:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVDNkJDMDsiIGQ9Ik0yNTUuOTY4LDUuMzI5QzExNC42MjQsNS4zMjksMCwxMjAuNDAxLDAsMjYyLjM1M2MwLDExMy41MzYsNzMuMzQ0LDIwOS44NTYsMTc1LjEwNCwyNDMuODcyDQoJYzEyLjgsMi4zNjgsMTcuNDcyLTUuNTY4LDE3LjQ3Mi0xMi4zODRjMC02LjExMi0wLjIyNC0yMi4yNzItMC4zNTItNDMuNzEyYy03MS4yLDE1LjUyLTg2LjI0LTM0LjQ2NC04Ni4yNC0zNC40NjQNCgljLTExLjYxNi0yOS42OTYtMjguNDE2LTM3LjYtMjguNDE2LTM3LjZjLTIzLjI2NC0xNS45MzYsMS43MjgtMTUuNjE2LDEuNzI4LTE1LjYxNmMyNS42OTYsMS44MjQsMzkuMiwyNi40OTYsMzkuMiwyNi40OTYNCgljMjIuODQ4LDM5LjI2NCw1OS45MzYsMjcuOTM2LDc0LjUyOCwyMS4zNDRjMi4zMDQtMTYuNjA4LDguOTI4LTI3LjkzNiwxNi4yNTYtMzQuMzY4Yy01Ni44MzItNi40OTYtMTE2LjYwOC0yOC41NDQtMTE2LjYwOC0xMjcuMDA4DQoJYzAtMjguMDY0LDkuOTg0LTUxLjAwOCwyNi4zNjgtNjguOTkyYy0yLjY1Ni02LjQ5Ni0xMS40MjQtMzIuNjQsMi40OTYtNjhjMCwwLDIxLjUwNC02LjkxMiw3MC40LDI2LjMzNg0KCWMyMC40MTYtNS42OTYsNDIuMzA0LTguNTQ0LDY0LjA5Ni04LjY0YzIxLjcyOCwwLjEyOCw0My42NDgsMi45NDQsNjQuMDk2LDguNjcyYzQ4Ljg2NC0zMy4yNDgsNzAuMzM2LTI2LjMzNiw3MC4zMzYtMjYuMzM2DQoJYzEzLjk1MiwzNS4zOTIsNS4xODQsNjEuNTA0LDIuNTYsNjhjMTYuNDE2LDE3Ljk4NCwyNi4zMDQsNDAuOTI4LDI2LjMwNCw2OC45OTJjMCw5OC43Mi01OS44NCwxMjAuNDQ4LTExNi44NjQsMTI2LjgxNg0KCWM5LjE4NCw3LjkzNiwxNy4zNzYsMjMuNjE2LDE3LjM3Niw0Ny41ODRjMCwzNC4zNjgtMC4zMiw2Mi4wOC0wLjMyLDcwLjQ5NmMwLDYuODgsNC42MDgsMTQuODgsMTcuNiwxMi4zNTINCglDNDM4LjcyLDQ3Mi4xNDUsNTEyLDM3NS44NTcsNTEyLDI2Mi4zNTNDNTEyLDEyMC40MDEsMzk3LjM3Niw1LjMyOSwyNTUuOTY4LDUuMzI5eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
    },
  ],
};

export default {
  languages,
  head,
  summary: {
    title: "Resumen",
    description: [
      "Ofrezco mis servicios como desarrollador Frontend desde hace más de 7 años, adquiriendo una amplia experiencia en el desarrollo de proyectos complejos y escalables.",
      "Con una gran capacidad para abordar diversas tareas y ofrecer resultados excepcionales, me dedico a proporcionar soluciones de Software de alta calidad.",
    ],
  },
  responsibilities: {
    title: "Responsabilidades",
    pre: "Responsabilidades en las que participo:",
    items: [
      "Comprensión del problema comercial",
      "Convertir el problema en una arquitectura",
      "Transformar la arquitectura en una solución",
      "Probar la solución, implementarla y presentarla",
    ],
  },
  technologyExpertise: {
    title: "Experiencia en tecnología",
    pre: "Tengo experiencia en estas áreas:",
    items: ["API REST, Websockets", "GraphQL", "Closures", "Hooks"],
  },
  skills: {
    title: "Habilidades",
    items: [
      { name: "React", time: "7 años" },
      { name: "Redux", time: "7 años" },
      { name: "Typescript", time: "5 años" },
      // { name: "API REST", time: "8 años" },
      { name: "GraphQL", time: "4 años" },
    ],
  },
  experiences: {
    title: "Experiencia laboral",
    items: [
      {
        title: "Senior Frontend",
        date: "Octubre 2022 - Marzo 2023",
        company: "Opentalk",
        description: `
          Colaboré estrechamente con diseñadores y desarrolladores para contribuir al desarrollo del diseño y asumir importantes responsabilidades en el desarrollo frontend.
          Participé activamente en reuniones para asignar tareas, asegurando la alineación con los objetivos del proyecto y colaborando con QA en los esfuerzos de prueba.
          Demostré innovación adoptando nuevas pilas tecnológicas, incluyendo Next.js, y brindé un apoyo cercano al equipo de DevOps en los procesos de CI/CD.`,

        technologies: [
          "Node.js",
          "React",
          "Redux",
          "JavaScript",
          "Typescript",
          "Gitlab",
          "SCRAM",
        ],
      },
      {
        title: "Senior Frontend  / Líder",
        date: "Febrero 2021 - Marzo 2022",
        company: "Dev Base",
        description: `
          Colaboré estrechamente con diseñadores y desarrolladores para contribuir al desarrollo del diseño y asumir importantes responsabilidades en el desarrollo frontend.
          Participé activamente en reuniones para asignar tareas, asegurando la alineación con los objetivos del proyecto y colaborando con QA en los esfuerzos de prueba.
          Demostré innovación adoptando nuevas pilas tecnológicas, incluyendo Next.js, y brindé un apoyo cercano al equipo de DevOps en los procesos de CI/CD.`,

        technologies: [
          "Node.js",
          "Nestjs",
          "Nextjs",
          "React",
          "Redux",
          "JavaScript",
          "Typescript",
          "AWS",
          "Docker",
          "Github",
          "CI/CD",
          "MySql",
          "Prisma",
          "SCRAM",
          "Styled Componets",
        ],
      },
      {
        title: "Frontend / Diseñador UI/UX",
        date: "Septiembre 2020 - Febrero 2021",
        company: "Making Sense",
        description: `Mi responsabilidad era ser un enlace entre los diseñadores y los desarrolladores.
  Una de mis tareas era comunicar mis conocimientos sobre el software, el diseño y la experiencia del usuario. Para ello, participé en discusiones para acordar el enfoque más sencillo y mejor para manejar el stack tecnológico y el modelo de arquitectura.`,

        technologies: [
          "Node.js",
          "React",
          "React Native",
          "Redux",
          "JavaScript",
          "Typescript",
          "StyleComponents",
          "AWS",
          "Docker",
          "Github",
          "CI/CD",
          "Figma",
          "Sketch",
          "Jira",
          "SCRAM",
        ],
      },
      {
        title: "Ingeniero Frontend",
        date: "Marzo 2019 - Septiembre 2020",
        company: "Wenance",
        description: `Pensador y proveedor de soluciones. Con mis habilidades en ingeniería, se llevarán a cabo proyectos complejos en la industria financiera. En los proyectos internos se procesarán datos de identificación de clientes. Para cumplir con los requisitos de estos proyectos, se utilizan aplicaciones y varios lenguajes como:
  
  React, Redux, Node, JS, estilos CSS // Sass con styled components, API REST.`,
        technologies: [
          "Node.js",
          "Nestjs",
          "Next.js",
          "React",
          "Redux",
          "JavaScript",
          "Typescript",
          "AWS",
          "Docker",
          "Github",
          "CI/CD",
          "Figma",
          "Sketch",
          "Jira",
          "SCRAM",
          "CSS",
          "Sass",
        ],
      },
      {
        title: "Desarrollador Frontend",
        date: "Febrero 2016 - Febrero 2019",
        company: "Eulas S.A.",
        description: `Mantenimiento del diseño y la funcionalidad de comercio electrónico. El negocio se ubicaba en Estados Unidos. Se realizaron proyectos con las siguientes empresas: Ascena Group, Stadium Goods, Children Place. Se utilizaron las siguientes tecnologías para los proyectos:
          Proyectos en los que trabajé en Eulas:
          - https://www.louandgrey.com/
          - https://www.anntaylor.com/ `,
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "AJAX",
          "JQuery",
          "SaaS",
          "Node.js",
          "Express",
          "React",
          "Redux",
          "OPP",
          "Functional Programming",
          "CMS",
          "Webpack",
          "Grunt",
          "Node.js",
          "Nest.js",
          "Next.js",
          "React",
          "Redux",
          "JavaScript",
          "Typescript",
          "AWS",
          "Docker",
          "Github",
          "CI/CD",
          "Figma",
          "Sketch",
          "Jira",
          "SCRAM",
          "CSS",
        ],
      },
    ],
  },
  education: {
    title: "Educación",
    items: [
      {
        institute: "Escuela de Carreras Industriales de Colombia",
        title: "Ingeniería, Ingeniería de Sistemas",
        description:
          "4 semestres de estudios para obtener el título de ingeniería. El contenido de los estudios incluía algoritmos de programación, funciones, álgebra, física y fundamentos de ingeniería.",
        date: "2012 - 2014",
      },
      {
        institute: "Coder House",
        title: "Desarrollo web, Desarrollador Frontend",
        description:
          "Creación y diseño de páginas web con HTML5, JS, CSS, Bootstrap, jQuery, APIs, animaciones. Como autodidacta, mejoré mis habilidades profesionales.",
        date: "2015 - 2016",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    items: [
      {
        title: "Sitio web de CV",
        url: "https:resume.rev.earth",
        description:
          "Mejora tu experiencia navegando por mi currículum en línea y ten la opción de imprimirlo cuando lo desees. ¡Todo lo que necesitas está a solo un clic de distancia!",
      },
      {
        title: "Rev Earth",
        url: "https:rev.earth",
        description:
          "Como parte de su misión de concienciación, Rev Earth facilita las conexiones entre las personas.",
      },
      {
        title: "Tic-Tac-Toe IA",
        url: "https:tic-tac-toe.rev.earth",
        description:
          "¡Tú contra la IA! \n Juego de Tic-Tac-Toe imbatible que utiliza IA para intentar vencerte. Tecnologías: React y algoritmo Minimax y Alpha Beta.",
      },
      {
        title: "CRM Vendedor",
        url: "https:crm-seller-front.vercel.app/login",
        description:
          "Este sistema permite a las empresas agregar, eliminar y gestionar a sus vendedores. En cuanto a los vendedores, pueden agregar, eliminar y gestionar los productos de la empresa y los clientes.",
      },
    ],
  },
  social,
};
