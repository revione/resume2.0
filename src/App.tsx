import Languages from "common/Languages";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { detectAndChangeLanguage } from "i18n/detectLanguage";

const Title = ({ children }: { children: string }) => (
  <h3 className="font-semibold text-2xl mb-2 print:text-xl relative pl-2 -left-2">
    <span className="absolute h-full border-l-2 border-teal-300 left-0 top-0"></span>
    {children}
  </h3>
);

const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`print-bg bg-teal-300 dark:bg-emerald-900 p-10 mb-3 max-w-screen-lg print:m-0 print:mb-0 print:p-5`}
    >
      <h1 className="font-bold text-5xl print:text-3xl">{t("head.name")}</h1>
      <h2 className="font-bold text-5xl print:text-3xl">{t("head.carrier")}</h2>
      <div className="font-semibold text-xl print:text-xl">
        {t("head.email")}
      </div>
      <div className="absolute top-4 right-4 print:hidden">
        <Languages />
      </div>
    </div>
  );
};

const Summary = () => {
  const { t } = useTranslation();

  const description = t("summary.description", {
    returnObjects: true,
  });

  return (
    <div className="mb-8">
      <Title>{t("summary.title")}</Title>
      <p className="flex flex-col">
        {(description as string[]).map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </p>
    </div>
  );
};

const Experiences = () => {
  const { t } = useTranslation();

  const experiencesItems = t("experiences.items", {
    returnObjects: true,
  });

  return (
    <div className="mb-8">
      <Title>{t("experiences.title")}</Title>

      <ul className="mt-4">
        {(
          experiencesItems as {
            company: string;
            date: string;
            title: string;
            description: string;
            technologies: string[];
          }[]
        ).map((experience, i) => (
          <li key={i} className="mb-6">
            <div className="font-semibold flex gap-4">
              <div className="text-xl print:text-lg">
                {t(experience.company)}
              </div>
              <div className="text-base leading-7 print:text-xs print:leading-8">
                {t(experience.date)}
              </div>
            </div>
            <div className="font-semibold text-xl print:text-lg mb-2">
              {t(experience.title)}
            </div>
            <p className="mb-2">{t(experience.description)}</p>
            {/* <p>
              <span className="font-bold">{t("Stack technologies")}: </span>
              {experience.technologies?.join(", ")}
            </p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Education = () => {
  const { t } = useTranslation();

  const educationItems = t("education.items", {
    returnObjects: true,
  });

  return (
    <div className="mb-8">
      <Title>{t("education.title")}</Title>

      <ul className="mt-4">
        {(
          educationItems as {
            institute: string;
            date: string;
            title: string;
            description: string;
          }[]
        ).map((education, i) => (
          <li key={i} className="mb-6">
            <div className="font-semibold text-xl flex gap-4">
              <div className="text-xl print:text-lg">
                {t(education.institute)}
              </div>
              <div className="text-base leading-7 print:text-xs print:leading-8">
                {t(education.date)}
              </div>
            </div>
            <div className="font-bold text-lg flex gap-4 print:text-base">
              {t(education.title)}
            </div>
            {/* <p>{t(education.description)}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const projectsItems = t("projects.items", {
    returnObjects: true,
  });

  return (
    <div className="mb-8">
      <Title>{t("projects.title")}</Title>

      <ul className="mt-4">
        {(
          projectsItems as { title: string; url: string; description: string }[]
        ).map((project, i) => (
          <li key={i} className="mb-6">
            <div className="font-semibold text-xl print:text-lg">
              {t(project.title)}
            </div>
            <a href={project.url} rel="noopener noreferrer" target="_blank">
              {project.url}
            </a>
            <p className="mt-1">{t(project.description)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  const skillsItems = t("skills.items", {
    returnObjects: true,
  });

  return (
    <div className="mb-8">
      <Title>{t("skills.title")}</Title>

      <ul className="flex flex-col gap-2 mt-4">
        {(skillsItems as { name: string; time: string }[]).map((skill, i) => (
          <li key={i} className="flex">
            <div className="w-3/5">{t(skill.name)}</div>
            <div className="w-2/5">{t(skill.time)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Social = () => {
  const { t } = useTranslation();

  const socialItems = t("social.items", {
    returnObjects: true,
  });

  return (
    <div className="mb-8">
      <Title>{t("social.title")}</Title>

      <ul className="flex flex-col gap-2 mt-4">
        {(
          socialItems as {
            link: string;
            srcImg: string;
            title: string;
            description: string;
          }[]
        ).map((item, i) => (
          <li key={i}>
            <a
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2"
            >
              <img
                className="w-10 print:w-8"
                src={item.srcImg}
                alt={item.title}
              />
              <div>{t(item.description)}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    detectAndChangeLanguage();
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 1,
          ease: "easeIn",
        },
      }}
      className="w-full flex justify-center 
      md:p-10 
      print:p-0 
      print:md:p-0"
    >
      <div className="shadow-2xl shadow-cyan-500/50 print:shadow-none">
        <Header />

        {/* Body */}
        <div
          className={`
            grid grid-flow-col-dense
            max-w-screen-lg m-auto p-10
            md:flex-row gap-4 md:gap-16
            print:m-0 print:p-5 print:gap-8
          `}
        >
          {/* Left */}
          <div className="col-span-4">
            <Summary />
            <Experiences />
            <Education />
          </div>
          {/* Right */}
          <div className="col-span-1">
            <Projects />
            <Skills />
            <Social />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default App;
