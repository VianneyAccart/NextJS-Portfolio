import { IconType } from "react-icons";
import { BsDatabase, BsCodeSlash } from "react-icons/bs";
import SectionIntroduction from "./SectionIntroduction";
import { t } from "i18next";

const Skill = ({
  icon: Icon,
  title,
  languages,
  frameworks,
  tools,
}: {
  icon: IconType;
  title: string;
  languages: string[];
  frameworks: string[];
  tools: string[];
}) => {
  return (
    <div className="rounded-xl p-8 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
      <Icon className="text-5xl mb-4" />
      <h3>{title}</h3>
      <p className="skill-title">{t("skills.language")}</p>
      <p className="text-center font-light">{languages.join(", ")}</p>
      <p className="skill-title">{t("skills.frameworkAndLibraries")}</p>
      <p className="text-center font-light">{frameworks.join(", ")}</p>
      <p className="skill-title">{t("skills.tools")}</p>
      <p className="text-center font-light">{tools.join(", ")}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section>
      <SectionIntroduction
        title={t("skills.title")}
        introduction={t("skills.introduction")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 margin-x">
        <Skill
          icon={BsCodeSlash}
          title="Front-End"
          languages={["HTML", "CSS", "JavaScript", "TypeScript"]}
          frameworks={[
            "React",
            "React Native",
            "NextJS",
            "Apollo Client",
            "Jest",
            "Angular",
            "Tailwind",
            "CSS",
            "Bootstrap",
          ]}
          tools={["GitHub", "GitLab", "Figma"]}
        />
        <Skill
          icon={BsDatabase}
          title="Back-End & Ops"
          languages={["JavaScript", "TypeScript", "Python", "Java"]}
          frameworks={[
            "NodeJS",
            "GraphQL",
            "Apollo Server",
            "Prisma",
            "TypeORM",
            "Spring",
            "Hibernate",
            "Django",
            "DRF",
            "Flask",
          ]}
          tools={[
            "MySQL",
            "PostgreSQL",
            "Oracle",
            "SQLite",
            "Docker",
            "RabbitMQ",
            "CI/CD",
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
