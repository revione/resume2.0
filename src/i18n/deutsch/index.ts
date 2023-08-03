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
  title: "Berufserfahrung",
  items: [
    {
      title: "Senior Frontend",
      date: "Oktober 2022 - März 2023",
      company: "Opentalk",
      description:
        "Bei Opentalk, einem deutschen Unternehmen, das sich auf Videokonferenzen spezialisiert hat, habe ich eng mit modernen Technologien wie React, Redux, JavaScript, TypeScript, Streaming, WebSockets und Jest gearbeitet. Ich habe mit mehreren Entwicklungsteams zusammengearbeitet und dabei SCRUM als unsere agile Methodik genutzt.",
      technologies: [
        "Node.js",
        "React",
        "Redux",
        "JavaScript",
        "TypeScript",
        "GitLab",
        "SCRUM",
      ],
    },
    {
      title: "Senior Frontend / Teamleiter",
      date: "Februar 2021 - März 2022",
      company: "Dev Base",
      description:
        "Bei Dev Base habe ich an der Entwicklung verschiedener Webseiten und Anwendungen mitgewirkt, darunter eine Informations- und Marketingseite für ein bedeutendes Bauunternehmen in Europa sowie das herausragende Projekt Tandym, eine Online-Zahlungsmethode für E-Commerce in den Vereinigten Staaten. Wir haben mit modernen Technologien wie NEXT.js, React, JavaScript, TypeScript, Redux, Node.js und Jest gearbeitet. Unser Frontend-Team bestand aus 5 Mitgliedern, die eng mit einem Backend-Team aus 4 Mitgliedern zusammenarbeiteten. Zudem hatten wir spezialisierte Teams für Design und DevOps. Unser agiler Ansatz basierte auf SCRUM.",
      technologies: [
        "Node.js",
        "Nestjs",
        "Next.js",
        "React",
        "Redux",
        "JavaScript",
        "TypeScript",
        "AWS",
        "Docker",
        "Github",
        "CI/CD",
        "MySQL",
        "Prisma",
        "SCRUM",
        "Styled Components",
      ],
    },
    {
      title: "Frontend / UI/UX Designer",
      date: "September 2020 - Februar 2021",
      company: "Making Sense",
      description:
        "Bei Making Sense, einem benutzerorientierten Unternehmen, habe ich mich auf die Verbesserung von Schnittstellen und Interaktionen spezialisiert, um die Benutzererfahrung in unseren Anwendungen zu verbessern. Ich hatte die Möglichkeit, an verschiedenen Projekten teilzunehmen, darunter eine Anwendung für das Einlösen von Punkten für ein bedeutendes Unternehmen für Tankstellen in den Vereinigten Staaten. Für dieses Projekt haben wir Technologien wie React Native mit Styled Components verwendet und Ionic für die Entwicklung eingesetzt. Zudem haben wir Einheiten- und e2e-Tests mit Jest implementiert, um die Qualität des Endprodukts zu gewährleisten. Unsere agile Methodik der Wahl war SCRUM.",
      technologies: [
        "Node.js",
        "React",
        "React Native",
        "Redux",
        "JavaScript",
        "TypeScript",
        "Styled Components",
        "AWS",
        "Docker",
        "Github",
        "CI/CD",
        "Figma",
        "Sketch",
        "Jira",
        "SCRUM",
      ],
    },
    {
      title: "Frontend-Entwickler",
      date: "März 2019 - September 2020",
      company: "Wenance",
      description:
        "Wenance, ein renommiertes Fintech-Unternehmen, war der Ort, an dem wir eine Webanwendung entwickelt haben, die eine technologische Aufrüstung erforderte. Wir haben die Anwendung von Grund auf mit modernen Technologien wie React, Redux, Node.js, Axios, Sass und Jest erstellt und umgestaltet. Das Projekt war ambitioniert, und wir hatten mehrere Entwicklungsteams, die sich auf Bereiche wie Frontend, Backend, Design, Marketing und Geschäft spezialisierten, wobei jedes Team aus 6 bis 10 Mitgliedern bestand. Unsere gewählte agile Methodik war SCRUM mit Jira.",
      technologies: [
        "Node.js",
        "Nestjs",
        "Next.js",
        "React",
        "Redux",
        "JavaScript",
        "TypeScript",
        "AWS",
        "Docker",
        "Github",
        "CI/CD",
        "Figma",
        "Sketch",
        "Jira",
        "SCRUM",
        "CSS",
        "Sass",
      ],
    },
    {
      title: "Frontend-Entwickler",
      date: "Februar 2016 - Februar 2019",
      company: "Eulas S.A. / Minutentag",
      description:
        "Bei Eulas S.A. / Minutentag habe ich mit verschiedenen Technologien wie JavaScript, jQuery und etwas PHP gearbeitet. Wir haben Jira für das effiziente Ticketmanagement und Sass für das Styling verwendet. Für das Frontend haben wir HTML eingesetzt und die Interaktion der Vorlagen mit Handlebars.js verbessert. Unsere Arbeitsmethodik umfasste sowohl Kanban als auch SCRUM.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "AJAX",
        "jQuery",
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
        "TypeScript",
        "AWS",
        "Docker",
        "Github",
        "CI/CD",
        "Figma",
        "Sketch",
        "Jira",
        "SCRUM",
        "CSS",
      ],
    },
  ],
};

export default {
  languages,
  head,
  summary: {
    title: "Zusammenfassung",
    description: [
      "Ich bin ein Webentwickler mit über 7 Jahren Erfahrung und biete digitale Lösungen für Großprojekte an",
    ],
  },
  skills: {
    title: "Fähigkeiten",
    items: [
      { name: "React", time: "7 Jahre" },
      { name: "Redux", time: "7 Jahre" },
      { name: "Typescript", time: "5 Jahre" },

      { name: "GraphQL", time: "4 Jahre" },
    ],
  },
  experiences,
  education: {
    title: "Bildung",
    items: [
      {
        institute: "Coder House",
        title: "Webentwicklung, Frontend Webentwickler",
        description:
          "Erstellung und Design von Webseiten mit HTML5, JS, CSS, Bootstrap, jQuery, APIs, Animationen. Als Autodidakt konnte ich meine beruflichen Fähigkeiten verbessern.",
        date: "2015 - 2016",
      },
      {
        institute: "Colombian Industrial Careers School",
        title: "Ingenieurwesen, Systemtechnik",
        description:
          "4 Semester Studium, um den Ingenieurabschluss zu erreichen. Der Lehrinhalt umfasste Programmieralgorithmen, Funktionen, Algebra, Physik, Grundlagen des Ingenieurwesens.",
        date: "2012 - 2014",
      },
    ],
  },
  projects: {
    title: "Meine Projekte",
    items: [
      {
        title: "CV-Website",
        url: "https://resume.rev.earth",
        description:
          "Verbessern Sie Ihre Erfahrung, indem Sie meinen Lebenslauf online durchsuchen und ihn bei Bedarf drucken können. Alles, was Sie brauchen, ist nur einen Klick entfernt!",
      },
      {
        title: "Rev Earth",
        url: "https://rev.earth",
        description:
          "Im Rahmen ihrer Sensibilisierungsmission erleichtert Rev Earth die Verbindung zwischen Menschen.",
      },
      {
        title: "Tic-Tac-Toe KI",
        url: "https://tic-tac-toe.rev.earth",
        description:
          "Du! Besiege es! \n Das unbesiegbare Tic-Tac-Toe-Spiel mit KI wird versuchen, dich zu schlagen! Technologien: React und Minimax-Algorithmus und Alpha Beta.",
      },
      {
        title: "CRM-Verkäufer",
        url: "https://crm-seller-front.vercel.app/login",
        description:
          "Mit diesem System können Unternehmen ihre Verkäufer hinzufügen, löschen und verwalten. Die Verkäufer können wiederum die Produkte des Unternehmens und die Kunden hinzufügen, löschen und verwalten.",
      },
    ],
  },
  social,
};
