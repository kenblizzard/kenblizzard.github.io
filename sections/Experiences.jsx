import SkillsColorMapping from "../util/SkillsColorMapping";

const Experiences = ({ profile }) => (
  <section className=" min-h-screen h-full w-full flex flex-col items-center px-3 text-default">
    <div className="py-5 border-t-2 border-b-2 border-dotted border-default w-full text-center mt-10 mb-12">
      <h2 className="uppercase tracking-wider text-5xl">Experiences</h2>
    </div>
    <div className="flex flex-col w-full md:w-2/3 space-y-8">
      {profile.experiences.map((experience, i) => (
        <div className="flex flex-row w-full" key={`experience-${i}`}>
          <div className="w-1/4 py-2 text-center">
            <h4>{experience.duration}</h4>
          </div>
          <div className="w-3/4 space-y-3">
            <h3>{experience.role}</h3>
            <strong>{experience.company}</strong>
            {experience.projects.map((project, i) => (
              <a
                href={project.url ? project.url : ""}
                target="_blank"
                className={`flex flex-row space-x-2 w-max`}
                key={`project-${i}`}
              >
                {project.url && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                )}

                <strong>{project.name}</strong>
                {project.url && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </a>
            ))}

            <div className="flex flex-row flex-wrap">
              {experience.skills.map((skill) => (
                <div className={`${SkillsColorMapping[skill]} p-1 px-3 rounded-full text-white m-1`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experiences;
