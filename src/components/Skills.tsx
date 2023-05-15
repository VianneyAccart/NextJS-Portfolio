import { BsDatabase, BsCodeSlash } from "react-icons/bs";

export default function Skills() {
  return (
    <section className="px-5 mt-40">
      <div className="flex flex-col items-center my-12">
        <h2 className="z-10 text-6xl font-bold">Mon kit de survie</h2>
        <p className="my-4 font-light text-xl">
          Ce sont les langages, frameworks, librairies et outils que j'utilise
          régulièrement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:mx-10 lg:mx-32 xl:mx-52">
        <div className="rounded-xl p-8 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
          <BsCodeSlash className="nav-icon text-5xl mb-4" role="button" />
          <h3 className="text-center md:text-2xl font-bold">Front-End</h3>
          <p className="mt-12  text-xl mb-1">Languages</p>
          <p className="text-center font-light">
            HTML, CSS, JavaScript, TypeScript
          </p>
          <p className="mt-12  text-xl mb-1">Frameworks/Libraries</p>
          <p className="text-center font-light">
            React, React Native, NextJS, Apollo Client, Jest, Angular, Tailwind
            CSS, Bootstrap
          </p>
          <p className="mt-12  text-xl mb-1">Tools</p>
          <p className="text-center font-light">GitHub, GitLab, Figma</p>
        </div>
        <div className="rounded-xl pt-6 p-8 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
          <BsDatabase className="nav-icon text-5xl mb-4" role="button" />
          <h3 className="text-center md:text-2xl font-bold">Back-End & Ops</h3>
          <p className="mt-12  text-xl mb-1">Languages</p>
          <p className="text-center font-light">
            JavaScript, TypeScript, Python, Java
          </p>
          <p className="mt-12  text-xl mb-1">Frameworks/Libraries</p>
          <p className="text-center font-light">
            NodeJS, GraphQL, Apollo Server, Prisma, TypeORM, Spring, Hibernate,
            Django, DRF, Flask
          </p>
          <p className="mt-12  text-xl mb-1">Databases & Tools</p>
          <p className="text-center font-light">
            MySQL, PostgreSQL, Oracle, SQLite, Docker, RabbitMQ, CI/CD
          </p>
        </div>
      </div>
    </section>
  );
}
