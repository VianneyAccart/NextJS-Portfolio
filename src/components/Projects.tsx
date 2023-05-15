import { GITHUB_URL } from "@/links";
import Button from "./Button";
import Image from "next/image";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10 md:mx-10 lg:mx-32 xl:mx-52">
        <figure className="rounded-xl h-52 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center relative">
          <div className="w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300">
            <Image
              src="/meta-sound-contest.webp"
              alt="Picture of Vianney Accart" // TODO : Translate
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
          <figcaption className="rounded-xl absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 hover:opacity-100 transition-all ease-linear duration-300 bg-red-400 flex flex-col justify-center items-center">
            <h3 className="text-white text-2xl font-bold mb-4">
              Meta Sound Contest
            </h3>
            <p className="text-white text-lg mb-4">Texte</p>
            <p className="text-white text-lg mb-8">Technos</p>
            <a
              href="#"
              className="bg-white text-red-400 rounded-full py-2 px-4 hover:bg-red-400 hover:text-white transition-all duration-300"
            >
              Button
            </a>
          </figcaption>
        </figure>
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
        <Button url={GITHUB_URL} newTab={true} label="See more on GitHub" />
      </div>
    </section>
  );
}
