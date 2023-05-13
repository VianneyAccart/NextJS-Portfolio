import { VscGithubAlt } from "react-icons/vsc";

export default function Projects() {
  return (
    <section className="px-5 mt-40">
      <div className="flex flex-col items-center my-12">
        <h2 className="z-10 text-6xl font-bold">Mes réalisations</h2>
        <p className="my-4 font-light text-xl">
          Je vous propose une sélection de quelques projets sur lesquels j'ai
          travaillé.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 lg:mx-52">
        <div className="rounded-xl p-8 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
          <h3 className="text-center md:text-2xl font-bold">Projet 1</h3>
        </div>
        <div className="rounded-xl p-8 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
          <h3 className="text-center md:text-2xl font-bold">Projet 2</h3>
        </div>
        <div className="rounded-xl p-8 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
          <h3 className="text-center md:text-2xl font-bold">Projet 3</h3>
        </div>
        <div className="rounded-xl p-8 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
          <h3 className="text-center md:text-2xl font-bold">Projet 4</h3>
        </div>
        <div className="rounded-xl p-8 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
          <h3 className="text-center md:text-2xl font-bold">Projet 5</h3>
        </div>
        <div className="rounded-xl p-8 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
          <h3 className="text-center md:text-2xl font-bold">Projet 6</h3>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <a
          href="https://github.com/VianneyAccart"
          rel="noreferrer noopener"
          target="_blank"
        >
          <button className="flex gap-2 items-center">
            <VscGithubAlt className="text-neutral-800" />
            See more on GitHub
          </button>
        </a>
      </div>
    </section>
  );
}
