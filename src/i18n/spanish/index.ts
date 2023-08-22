const languages = {
  es: "español",
  en: "inglés",
  de: "alemán",
};

const head = {
  name: "Oliver Ramirez Garcia",
  carrier: "Senior Frontend",
  email: "oliver.rg@rev.earth",
};

const summary = {
  title: "Resumen",
  description: [
    "Soy un desarrollador de software comprometido con soluciones empresariales y de productos. Puede esperar de mí responsabilidad, toma de decisiones de liderazgo, además de comunicación efectiva y gestión de resoluciones.",
  ],
};

const skills = {
  title: "Habilidades",
  items: [
    { name: "JavaScript", time: "7 años" },
    { name: "TypeScript", time: "7 años" },
    { name: "React", time: "7 años" },
    { name: "Redux", time: "7 años" },
  ],
};

const social = {
  title: "Redes Sociales",
  items: [
    {
      title: "LinkedIn",
      description: "linkedin.com/in/oliiv",
      link: "https://www.linkedin.com/in/oliiv/",
      srcImg:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHJlY3QgeT0iMTYwIiBzdHlsZT0iZmlsbDojMTk3NkQyOyIgd2lkdGg9IjExNC40OTYiIGhlaWdodD0iMzUyIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00MjYuMzY4LDE2NC4xMjhjLTEuMjE2LTAuMzg0LTIuMzY4LTAuOC0zLjY0OC0xLjE1MmMtMS41MzYtMC4zNTItMy4wNzItMC42NC00LjY0LTAuODk2DQoJCWMtNi4wOC0xLjIxNi0xMi43MzYtMi4wOC0yMC41NDQtMi4wOGwwLDBsMCwwYy02Ni43NTIsMC0xMDkuMDg4LDQ4LjU0NC0xMjMuMDQsNjcuMjk2VjE2MEgxNjB2MzUyaDExNC40OTZWMzIwDQoJCWMwLDAsODYuNTI4LTEyMC41MTIsMTIzLjA0LTMyYzAsNzkuMDA4LDAsMjI0LDAsMjI0SDUxMlYyNzQuNDY0QzUxMiwyMjEuMjgsNDc1LjU1MiwxNzYuOTYsNDI2LjM2OCwxNjQuMTI4eiIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGN4PSI1NiIgY3k9IjU2IiByPSI1NiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
    },
    {
      title: "Correo Electrónico",
      description: "oliiv@outlook.com",
      link: "mailto:oliiv@outlook.com",
      srcImg:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxRTg4RTU7IiBkPSJNNDk5LjYyOCw0MDcuNDY4Yy0xMC4xMjgsMTIuMTYtMjUuMTM0LDE5LjE5NC00MC45NiwxOS4ySDUzLjMzNA0KCWMtMTUuODI2LTAuMDA2LTMwLjgzMi03LjA0LTQwLjk2LTE5LjJsMTk1LjYyNy0xNjIuOTg3bDIwLjI2NywxMy44NjdjMTYuNjk1LDExLjUyLDM4Ljc3MiwxMS41Miw1NS40NjcsMGwyMC4yNjctMTMuODY3DQoJTDQ5OS42MjgsNDA3LjQ2OHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM2NEI1RjY7IiBkPSJNNTAyLjYxNCwxMDguNTg4TDMwNC4wMDEsMjQ0LjQ4MWwtMjAuMjY3LDEzLjg2N2MtMTYuNjk1LDExLjUyLTM4Ljc3MiwxMS41Mi01NS40NjcsMA0KCWwtMjAuMjY3LTEzLjg2N0w5LjM4OCwxMDguMzc0YzkuOTk0LTE0LjQxMSwyNi40MDktMjMuMDE3LDQzLjk0Ny0yMy4wNGg0MDUuMzMzQzQ3Ni4yODUsODUuMjQxLDQ5Mi43ODEsOTMuOTY5LDUwMi42MTQsMTA4LjU4OHoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMyMTk2RjM7IiBkPSJNMjA4LjAwMSwyNDQuNDgxTDEyLjM3NCw0MDcuNDY4Yy04LjAwNy05LjU3LTEyLjM4OC0yMS42NTUtMTIuMzczLTM0LjEzM1YxMzguNjY4DQoJCWMtMC4wNjUtMTAuODIzLDMuMjE0LTIxLjQwMyw5LjM4Ny0zMC4yOTNMMjA4LjAwMSwyNDQuNDgxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMyMTk2RjM7IiBkPSJNNTEyLjAwMSwxMzguNjY4djIzNC42NjdjMC4wMTQsMTIuNDc4LTQuMzY2LDI0LjU2My0xMi4zNzMsMzQuMTMzTDMwNC4wMDEsMjQ0LjQ4MWwxOTguNjEzLTEzNS44OTMNCgkJQzUwOC43NTYsMTE3LjQxNCw1MTIuMDMzLDEyNy45MTUsNTEyLjAwMSwxMzguNjY4eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
    },
    {
      title: "GitHub",
      description: "github.com/revione",
      link: "https://github.com/revione",
      srcImg:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVDNkJDMDsiIGQ9Ik0yNTUuOTY4LDUuMzI5QzExNC42MjQsNS4zMjksMCwxMjAuNDAxLDAsMjYyLjM1M2MwLDExMy41MzYsNzMuMzQ0LDIwOS44NTYsMTc1LjEwNCwyNDMuODcyDQoJYzEyLjgsMi4zNjgsMTcuNDcyLTUuNTY4LDE3LjQ3Mi0xMi4zODRjMC02LjExMi0wLjIyNC0yMi4yNzItMC4zNTItNDMuNzEyYy03MS4yLDE1LjUyLTg2LjI0LTM0LjQ2NC04Ni4yNC0zNC40NjQNCgljLTExLjYxNi0yOS42OTYtMjguNDE2LTM3LjYtMjguNDE2LTM3LjZjLTIzLjI2NC0xNS45MzYsMS43MjgtMTUuNjE2LDEuNzI4LTE1LjYxNmMyNS42OTYsMS44MjQsMzkuMiwyNi40OTYsMzkuMiwyNi40OTYNCgljMjIuODQ4LDM5LjI2NCw1OS45MzYsMjcuOTM2LDc0LjUyOCwyMS4zNDRjMi4zMDQtMTYuNjA4LDguOTI4LTI3LjkzNiwxNi4yNTYtMzQuMzY4Yy01Ni44MzItNi40OTYtMTE2LjYwOC0yOC41NDQtMTE2LjYwOC0xMjcuMDA4DQoJYzAtMjguMDY0LDkuOTg0LTUxLjAwOCwyNi4zNjgtNjguOTkyYy0yLjY1Ni02LjQ5Ni0xMS40MjQtMzIuNjQsMi40OTYtNjhjMCwwLDIxLjUwNC02LjkxMiw3MC40LDI2LjMzNg0KCWMyMC40MTYtNS42OTYsNDIuMzA0LTguNTQ0LDY0LjA5Ni04LjY0YzIxLjcyOCwwLjEyOCw0My42NDgsMi45NDQsNjQuMDk2LDguNjcyYzQ4Ljg2NC0zMy4yNDgsNzAuMzM2LTI2LjMzNiw3MC4zMzYtMjYuMzM2DQoJYzEzLjk1MiwzNS4zOTIsNS4xODQsNjEuNTA0LDIuNTYsNjhjMTYuNDE2LDE3Ljk4NCwyNi4zMDQsNDAuOTI4LDI2LjMwNCw2OC45OTJjMCw5OC43Mi01OS44NCwxMjAuNDQ4LTExNi44NjQsMTI2LjgxNg0KCWM5LjE4NCw3LjkzNiwxNy4zNzYsMjMuNjE2LDE3LjM3Niw0Ny41ODRjMCwzNC4zNjgtMC4zMiw2Mi4wOC0wLjMyLDcwLjQ5NmMwLDYuODgsNC42MDgsMTQuODgsMTcuNiwxMi4zNTINCglDNDM4LjcyLDQ3Mi4xNDUsNTEyLDM3NS44NTcsNTEyLDI2Mi4zNTNDNTEyLDEyMC40MDEsMzk3LjM3Niw1LjMyOSwyNTUuOTY4LDUuMzI5eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
    },
  ],
};

const experiences = {
  title: "Experiencia Laboral",
  items: [
    {
      title: "Senior Frontend",
      date: "Julio 2022 - Julio 2023",
      company: "Opentalk",
      description:
        "En Opentalk, una empresa alemana especializada en videoconferencias, trabajé estrechamente con tecnologías modernas como React, Redux, JavaScript, TypeScript, Streaming, WebSockets y Jest. Fui parte de varios equipos de desarrollo ágil y utilicé SCRUM como nuestra metodología.",
    },
    {
      title: "Senior Frontend / Líder de Equipo",
      date: "Febrero 2021 - Junio 2023",
      company: "Dev Base",
      description:
        "En Dev Base, contribuí al desarrollo de varios sitios web y aplicaciones. Esto incluyó la creación de un sitio web informativo y de marketing para una destacada empresa de construcción en Europa, así como el notable proyecto Tandym, un método de pago en línea para comercio electrónico en los Estados Unidos. Trabajando estrechamente con un equipo de 5 desarrolladores frontend y un equipo de backend de 4 miembros, utilicé tecnologías de vanguardia como NEXT.js, React, JavaScript, TypeScript, Redux, Node.js y Jest. Además, equipos especializados de diseño y DevOps colaboraron en los proyectos. Nuestro enfoque ágil se basó en SCRUM.",
    },
    {
      title: "Ingeniero Frontend",
      date: "Septiembre 2019 - Enero 2021",
      company: "Wenance",
      description:
        "En Wenance, una reconocida empresa Fintech, trabajé en el desarrollo de una sofisticada aplicación web. Esta aplicación requería una revisión tecnológica integral. Construí y renové la aplicación desde cero utilizando tecnologías modernas como React, Redux, Node.js, Axios, Sass y Jest. El proyecto involucró a múltiples equipos de desarrollo especializados en áreas como frontend, backend, diseño, marketing y negocios. Nuestra metodología ágil elegida fue SCRUM, respaldada por Jira.",
    },
    {
      title: "Desarrollador Frontend",
      date: "Febrero 2016 - Febrero 2019",
      company: "Eulas S.A. / Minutentag",
      description:
        "En Eulas S.A. / Minutentag, trabajé con diversas tecnologías, incluyendo JavaScript, jQuery y PHP. Utilizamos Jira para una gestión eficiente de tickets y Sass para el estilo. El frontend se optimizó utilizando HTML y Handlebars.js. Nuestra metodología de trabajo abarcó tanto Kanban como SCRUM.",
    },
  ],
};

const education = {
  title: "Educación",
  items: [
    {
      institute: "Coder House",
      title: "Desarrollo Web, Desarrollador Frontend",
      description:
        "Formación en desarrollo web, con enfoque en desarrollo frontend.",
      date: "2015 - 2016",
    },
    {
      institute: "Colombian Industrial Careers School",
      title: "Ingeniería, Ingeniería de Sistemas",
      description:
        "Estudié ingeniería con especialización en ingeniería de sistemas.",
      date: "2012 - 2014",
    },
  ],
};

const projects = {
  title: "Proyectos",
  items: [
    {
      title: "Sitio Web de Currículum",
      url: "https://cv.rev.earth",
      description:
        "Navega por mi currículum en línea e imprímelo si es necesario. ¡Todo está a solo un clic de distancia!",
    },
    {
      title: "Rev Earth",
      url: "https://rev.earth",
      description:
        "Como parte de su misión de concienciación, Rev Earth facilita conexiones entre personas.",
    },
    {
      title: "Rev Play",
      url: "https://revplay.rev.earth",
      description:
        "Conexión automatizada de aplicaciones a mercados a través de la API de Deriv.",
    },
    {
      title: "AI Tic Tac Toe",
      url: "https://tic-tac-toe.rev.earth",
      description:
        "¡Desafía al invencible juego de Tic-Tac-Toe con IA! Tecnologías: React, Algoritmo Minimax y Alpha Beta.",
    },
  ],
};

export default {
  languages,
  head,
  summary,
  skills,
  experiences,
  education,
  projects,
  social,
};
