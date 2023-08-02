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

const experiences = {
  title: "Experiencia laboral",
  items: [
    {
      title: "Senior Frontend",
      date: "Octubre 2022 - Marzo 2023",
      company: "Opentalk",
      description: `Una empresa alemana enfocada en las videoconferencias, estuvimos estrechamente trabajando con nuevas tecnologías tales como, React, Redux, JavaScript, Typescript, Streaming, Webscokets, Jest con varios equipos de desarrollo, usando como metodología ágil SCRAM.`,

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
      Participe en el desarrollo de diversas páginas y aplicaciones web, abarcando desde una página informativa y de marketing para una importante constructora en Europa hasta el destacado proyecto Tandym, un método de pago online para e-commerce en Estados Unidos.
      En este emocionante recorrido, trabajamos con tecnologías de vanguardia como NEXT.js, React, JavaScript, TypeScript, Redux, Node.js y Jest. Nuestro equipo de Frontend estaba compuesto por 5 personas, y trabajamos en estrecha colaboración con el equipo de desarrolladores Backend, que contaba con 4 personas. También contamos con un equipo dedicado al Diseño y otro equipo enfocado en DevOps.
      Nuestro enfoque de trabajo se basó en la metodología ágil SCRUM.`,

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
      description: `En Making Sense, una empresa centrada en la experiencia del usuario, me especialicé en mejorar interfaces e interacciones para enriquecer la experiencia del usuario en nuestras aplicaciones. Tuve la oportunidad de participar en diversos proyectos, uno de los más destacados fue una aplicación para canjeo de puntos para una importante empresa de gasolineras en Estados Unidos.

      En este proyecto, utilizamos tecnologías como React Native con Styled Components y aprovechamos Ionic para el desarrollo. Además, implementamos pruebas unitarias y pruebas e2e con Jest para garantizar la calidad del producto final. Durante todo el proceso, seguimos una metodología ágil, en concreto, SCRAM.`,

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
      description: `Una reconocida Fintech en la cual estuvimos desarrollando una aplicación web que requería una actualización tecnológica, para crear y transformar una aplicación desde cero, utilizando tecnologías de vanguardia como React, Redux, Node.js, Axios, Sass, Jest. El proyecto fue muy ambicioso y contamos con varios grupos de desarrollo, cada uno con entre 6 a 10 personas especializadas en áreas como Frontend, Backend, Diseño, Marketing y Negocios. Con una metodología SCRUM utilizando Jira.`,
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
      company: "Eulas S.A. / Minutentag",
      description: `Trabajé con diversas tecnologías, como JavaScript, jQuery y un poco de PHP. Además, utilizamos Jira para el eficiente manejo de tickets, y para los estilos, implementamos Sass, empleamos HTML y potenciamos la interacción de los templates mediante Handlebars.js. Nuestro enfoque de trabajo fue el método Kanban y SCRAM.
      Los proyectos estaban relacionados con la industria de e-commerce. Con el paso del tiempo, la empresa adquirió más clientes, lo que llevó mi carrera a centrarse en el desarrollo de aplicaciones con React y Redux, utilizando Node.js como base.
  
        - https://www.louandgrey.com
        - https://www.anntaylor.com `,
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
  skills: {
    title: "Habilidades",
    items: [
      { name: "React", time: "7 años" },
      { name: "Redux", time: "7 años" },
      { name: "Typescript", time: "5 años" },
      { name: "GraphQL", time: "4 años" },
    ],
  },
  experiences,
  education: {
    title: "Educación",
    items: [
      {
        institute: "Coder House",
        title: "Desarrollo web, Desarrollador Frontend",
        description:
          "Creación y diseño de páginas web con HTML5, JS, CSS, Bootstrap, jQuery, APIs, animaciones. Como autodidacta, mejoré mis habilidades profesionales.",
        date: "2015 - 2016",
      },
      {
        institute: "Escuela de Carreras Industriales de Colombia",
        title: "Ingeniería, Ingeniería de Sistemas",
        description:
          "4 semestres de estudios para obtener el título de ingeniería. El contenido de los estudios incluía algoritmos de programación, funciones, álgebra, física y fundamentos de ingeniería.",
        date: "2012 - 2014",
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
