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
  title: "Experience",
  items: [
    {
      title: "Senior Frontend",
      date: "October 2022 - March 2023",
      company: "Opentalk",
      description: `My primary focus was developing user-facing web applications and reusable components. I implemented these components with the React framework using best practices and workflows. I ensured that I produced robust, secure, modular, and maintainable code. I worked with cross-functional teams, including backend engineers and product designers. My commitment to team collaboration, clear communication, and a quality product was crucial for that role.`,
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
      date: "February 2021 - March 2022",
      company: "Dev Base",
      description: `
          Collaborated closely with designers and developers to contribute to design development and take on extensive frontend development responsibilities.
          Actively participated in meetings to allocate tasks, ensuring alignment with project goals and collaborating with QA in testing efforts.
          Demonstrated innovation by adopting new technology stacks, including Next.js, and closely supported the DevOps team in CI/CD processes.`,
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
        "MySQL",
        "Prisma",
        "SCRAM",
        "Styled Components",
      ],
    },
    {
      title: "Front End / UI/UX Designer",
      date: "September 2020 - February 2021",
      company: "Making Sense",
      description: `My responsibility was to be a connection between Designers and Developers. 
          One of my tasks was to communicate my knowledge about the software, design, and user experience. For this, I participated in discussions to agree upon the easiest and best approach to handle the Technology stack and best architect model.`,
      technologies: [
        "Node.js",
        "React",
        "React Native",
        "Redux",
        "JavaScript",
        "Typescript",
        "Styled Components",
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
      title: "Frontend Engineer",
      date: "March 2019 - September 2020",
      company: "Wenance",
      description: `Solution thinker and provider. With my engineering capabilities, complex projects in the Financial industry will be brought to life. In internal projects, client identifying data will be processed. To fulfill the requirements of these projects, applications and multiple languages are used, such as:
          React, Redux, Node.js, JavaScript, CSS Styles (Sass with styled components), REST API.`,
      technologies: [
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
        "Sass",
      ],
    },
    {
      title: "Frontend Developer",
      date: "February 2016 - February 2019",
      company: "Eulas S.A.",
      description: `Maintained the design and functionality of e-commerce. The business was located in the United States of America. Projects were realized with the following companies: Ascena Group, Stadium Goods, Children Place.  
          Projects worked on in Eulas:
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
};

export default {
  languages,
  head,
  summary: {
    title: "Summary",
    description: [
      "I have been offering my services as a Frontend developer for over 7 years, gaining extensive experience in developing complex and scalable projects.",
      "With a strong ability to tackle diverse tasks and deliver exceptional results, I am dedicated to delivering high-quality Software solutions.",
    ],
  },
  skills: {
    title: "Skills",
    items: [
      { name: "React", time: "7 years" },
      { name: "Redux", time: "7 years" },
      { name: "Typescript", time: "5 years" },
      { name: "GraphQL", time: "4 years" },
    ],
  },
  experiences,
  education: {
    title: "Education",
    items: [
      {
        institute: "Coder House",
        title: "Web Development, Frontend Web Developer",
        description:
          "Creation and design of web pages with HTML5, JS, CSS, Bootstrap, jQuery, APIs, animations. As a self-educated person, I improved my professional skills.",
        date: "2015 - 2016",
      },
      {
        institute: "Colombian Industrial Careers School",
        title: "Engineering, System Engineering",
        description:
          "4 semesters of studies to reach the engineering degree. The content of the studies included programming algorithms, functions, algebra, physics, and fundamentals of engineering.",
        date: "2012 - 2014",
      },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "CV website",
        url: "https:resume.rev.earth",
        description:
          "Enhance your experience by browsing my resume online and having the option to print it whenever you desire. Everything you need is just one click away!",
      },
      {
        title: "Rev Earth",
        url: "https:rev.earth",
        description:
          "As part of its awareness-raising mission, Rev Earth facilitates connections between people.",
      },
      {
        title: "Tic-Tac-Toe AI",
        url: "https:tic-tac-toe.rev.earth",
        description:
          "You! Beat it! \n Unbeatable Tic-Tac-Toe game using AI will try to beat you! Technologies: React and Minimax Algorithm and Alpha Beta.",
      },
      {
        title: "CRM Seller",
        url: "https:crm-seller-front.vercel.app/login",
        description:
          "This system allows companies to add, delete, and manage their sellers. As for the sellers, they can add, delete, and manage the products of the company and the customers.",
      },
    ],
  },
  social,
};
