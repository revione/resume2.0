import resume from "data/resume";

const Title = ({ children }: { children: string }) => (
  <h3 className="font-bold text-2xl mb-2 print:text-xl">{children}</h3>
);

export default function App() {
  return (
    <div className="w-full p-10 flex justify-center print:p-0">
      <div className="shadow-2xl shadow-cyan-500/50 print:shadow-none">
        {/* Header */}
        <div className="bg-teal-300 dark:bg-emerald-900 p-5 mb-3 print:m-0 print:mb-0 print:p-5 max-w-screen-lg print-bg">
          <h1 className="font-bold text-6xl print:text-5xl">
            {resume.head.name}
          </h1>
          <h2 className="font-bold text-6xl print:text-5xl">
            {resume.head.carrier}
          </h2>
          <div className="font-semibold text-2xl print:text-xl">
            {resume.head.email}
          </div>
        </div>

        {/* Body */}
        <div className="m-auto p-5 flex gap-16 print:m-0 print:mb-0 print:p-5 max-w-screen-lg">
          {/* Left */}
          <div className="w-3/5">
            {/* Summary */}
            <div className="mb-8">
              <Title>{resume.summary.title}</Title>
              <p className="flex flex-col">
                {resume.summary.description.map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </p>
            </div>

            {/* Responsabilites  */}
            <div className="mb-8">
              <Title>{resume.responsabilities.title}</Title>
              <p>{resume.responsabilities.items.join(", ")}</p>
            </div>

            {/* technologyExpertise  */}
            <div className="mb-8">
              <Title>{resume.technologyExpertise.title}</Title>
              <p>{resume.technologyExpertise.items.join(", ")}</p>
            </div>

            {/* Experiences */}
            <div className="mb-8">
              <Title>{resume.experiences.title}</Title>

              <ul>
                {resume.experiences.items.map((experience, i) => (
                  <li key={i} className="mb-6">
                    <div className="font-bold text-xl flex gap-4 mb-2">
                      <div className="font-bold text-xl print:text-lg">
                        {experience.company}
                      </div>
                      <div className="font-semibold text-base leading-7">
                        {experience.date}
                      </div>
                    </div>
                    <p className="mb-2">{experience.description}</p>
                    <p>
                      <span className="font-bold">Stack Tecnologies:</span>{" "}
                      {experience.tecnologies?.join(", ")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="mb-8">
              <Title>{resume.education.title}</Title>

              <ul>
                {resume.education.items.map((education, i) => (
                  <li key={i} className="mb-6">
                    <div className="font-bold text-xl flex gap-4">
                      <div className="font-bold text-xl print:text-lg">
                        {education.institute}
                      </div>
                      <div className="font-semibold text-base leading-7">
                        {education.date}
                      </div>
                    </div>
                    <div className="font-bold text-lg flex gap-4 print:text-base">
                      {education.title}
                    </div>
                    <p>{education.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="w-2/5">
            {/* Projects */}
            <div className="mb-8">
              <Title>{resume.projects.title}</Title>

              <ul>
                {resume.projects.items.map((project, i) => (
                  <li key={i} className="mb-6">
                    <div className="font-bold text-xl">{project.title}</div>
                    <a
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.url}
                    </a>
                    <p className="mt-1">{project.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <Title>{resume.skills.title}</Title>

              <ul className="flex flex-col gap-2">
                {resume.skills.items.map((skill, i) => (
                  <li key={i} className="flex">
                    <div className="w-1/3">{skill.name}</div>
                    <div className="w-1/3">{skill.time}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="mb-8">
              <Title>{resume.social.title}</Title>

              <ul className="flex flex-col gap-2">
                {resume.social.items.map((item, i) => (
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
                      <div>{item.description}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
