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
    title: "Zusammenfassung",
    description: [
      "Ich biete seit über 7 Jahren meine Dienste als Frontend-Entwickler an und habe umfangreiche Erfahrungen in der Entwicklung komplexer und skalierbarer Projekte gesammelt.",
      "Mit der Fähigkeit, unterschiedliche Aufgaben anzugehen und außergewöhnliche Ergebnisse zu liefern, widme ich mich der Bereitstellung hochwertiger Software-Lösungen.",
    ],
  },
  responsibilities: {
    title: "Verantwortlichkeiten",
    pre: "Verantwortlichkeiten, an denen ich beteiligt bin:",
    items: [
      "Verständnis für das geschäftliche Problem",
      "Umsetzung des Problems in eine Architektur",
      "Transformation der Architektur in eine Lösung",
      "Testen der Lösung, Bereitstellen und Präsentieren.",
    ],
  },
  technologyExpertise: {
    title: "Technische Kompetenz",
    pre: "Ich habe Fachkenntnisse in folgenden Bereichen:",
    items: ["REST-API, Websockets", "GraphQl", "Closures", "Hooks"],
  },
  skills: {
    title: "Fähigkeiten",
    items: [
      { name: "React", time: "7 Jahre" },
      { name: "Redux", time: "7 Jahre" },
      { name: "Typescript", time: "5 Jahre" },
      // { name: "REST API", time: "8 Jahre" },
      { name: "GraphQL", time: "4 Jahre" },
    ],
  },
  experiences: {
    title: "Erfahrungen",
    items: [
      {
        title: "Senior Frontend",
        date: "Oktober 2022 - März 2023",
        company: "Opentalk",
        description: `Mein Hauptaugenmerk lag auf der Entwicklung von benutzerorientierten Webanwendungen und wiederverwendbaren Komponenten. Ich habe diese Komponenten unter Verwendung bewährter Methoden und Workflows mit dem React-Framework implementiert. Ich habe darauf geachtet, robusten, sicheren, modularen und wartbaren Code zu produzieren. Ich habe mit interdisziplinären Teams zusammengearbeitet, darunter Backend-Entwickler und Produktgestalter. Mein Engagement für Teamarbeit, klare Kommunikation und ein qualitativ hochwertiges Produkt waren für diese Rolle entscheidend.`,
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
        title: "Senior Frontend / Lead",
        date: "Februar 2021 - März 2022",
        company: "Dev Base",
        description: `
          Eng arbeitete eng mit Designern und Entwicklern zusammen, um zur Entwicklung des Designs beizutragen und umfangreiche Frontend-Entwicklungsverantwortung zu übernehmen.
          Nahm aktiv an Meetings teil, um Aufgaben zuzuweisen, die Ausrichtung auf Projektziele sicherzustellen und mit QA bei Testbemühungen zusammenzuarbeiten.
          Zeigte Innovation durch die Einführung neuer Technologie-Stacks wie Next.js und unterstützte das DevOps-Team eng bei CI/CD-Prozessen.`,

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
        title: "Front-End / UI/UX Designer",
        date: "September 2020 - Februar 2021",
        company: "Making Sense",
        description: `Meine Aufgabe bestand darin, eine Verbindung zwischen Designern und Entwicklern herzustellen.
  Eines meiner Aufgaben bestand darin, mein Wissen über die Software, das Design und die Benutzererfahrung zu vermitteln. Hierzu habe ich an Diskussionen teilgenommen, um den einfachsten und besten Ansatz für den Umgang mit dem Technologie-Stack und das beste Architekturmodell zu vereinbaren.`,
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
        title: "Frontend-Engineer",
        date: "März 2019 - September 2020",
        company: "Wenance",
        description: `Lösungsdenker und -anbieter. Mit meinen technischen Fähigkeiten werden komplexe Projekte in der Finanzbranche zum Leben erweckt. In internen Projekten werden Kundendaten verarbeitet. Um die Anforderungen dieser Projekte zu erfüllen, werden Anwendungen und mehrere Sprachen verwendet, wie zum Beispiel:
  
  React, Redux, Node, JS, Styles CSS // Sass mit styled components, API REST.`,
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
        title: "Frontend-Entwickler",
        date: "Februar 2016 - Februar 2019",
        company: "Eulas S.A.",
        description: `Aufrechterhaltung des Designs und der Funktionalität von E-Commerce-Websites. Das Unternehmen befand sich in den Vereinigten Staaten von Amerika. Die Projekte wurden mit folgenden Unternehmen realisiert: Ascena Group, Stadium Goods, Children Place.
          Projekte, an denen ich bei Eulas gearbeitet habe:
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
    title: "Bildung",
    items: [
      {
        institute: "Colombian Industrial Careers School",
        title: "Ingenieurwesen, Systemtechnik",
        description:
          "4 Semester Studium, um den Ingenieurabschluss zu erreichen. Der Lehrinhalt umfasste Programmieralgorithmen, Funktionen, Algebra, Physik, Grundlagen des Ingenieurwesens.",
        date: "2012 - 2014",
      },
      {
        institute: "Coder House",
        title: "Webentwicklung, Frontend Webentwickler",
        description:
          "Erstellung und Design von Webseiten mit HTML5, JS, CSS, Bootstrap, jQuery, APIs, Animationen. Als Autodidakt konnte ich meine beruflichen Fähigkeiten verbessern.",
        date: "2015 - 2016",
      },
    ],
  },
  projects: {
    title: "Projekte",
    items: [
      {
        title: "CV-Website",
        url: "https:resume.rev.earth",
        description:
          "Verbessern Sie Ihre Erfahrung, indem Sie meinen Lebenslauf online durchsuchen und ihn bei Bedarf drucken können. Alles, was Sie brauchen, ist nur einen Klick entfernt!",
      },
      {
        title: "Rev Earth",
        url: "https:rev.earth",
        description:
          "Im Rahmen ihrer Sensibilisierungsmission erleichtert Rev Earth die Verbindung zwischen Menschen.",
      },
      {
        title: "Tic-Tac-Toe KI",
        url: "https:tic-tac-toe.rev.earth",
        description:
          "Du! Besiege es! \n Das unbesiegbare Tic-Tac-Toe-Spiel mit KI wird versuchen, dich zu schlagen! Technologien: React und Minimax-Algorithmus und Alpha Beta.",
      },
      {
        title: "CRM-Verkäufer",
        url: "https:crm-seller-front.vercel.app/login",
        description:
          "Mit diesem System können Unternehmen ihre Verkäufer hinzufügen, löschen und verwalten. Die Verkäufer können wiederum die Produkte des Unternehmens und die Kunden hinzufügen, löschen und verwalten.",
      },
    ],
  },
  social,
};
