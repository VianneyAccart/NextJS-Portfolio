import { VscGithubAlt } from "react-icons/vsc";

export default function Testimonials() {
  return (
    <section className="px-5 mt-40">
      <div className="flex flex-col items-center my-12">
        <h2 className="z-10 text-6xl font-bold">Témoignages</h2>
        <p className="my-4 font-light text-xl">
          Ils m'ont fait confiance en me confiant la réalisation de leur projet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:mx-52">
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
    </section>
  );
}
