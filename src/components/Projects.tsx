import { GITHUB_URL } from "@/links";
import Button from "./Button";
import Image from "next/image";
import { t } from "i18next";

const Project = ({
  src,
  alt,
  description,
  url,
}: {
  src: string;
  alt: string;
  description: string;
  url: string;
}) => {
  return (
    <figure className="rounded-xl sm:h-56 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center relative ">
      <div className="w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300">
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <figcaption className="rounded-xl absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 hover:opacity-100 transition-all ease-linear duration-300 bg-gray-100 dark:bg-gray-700 flex flex-col justify-center items-center p-6">
        <p className="text-center text-lg font-light mb-5">{description}</p>
        <Button
          className="h-12 bg-transparent text-blue-500 hover:text-white border border-solid border-1 border-blue-500 hover:border-blue-600"
          label={t("visit")}
          newTab={true}
          url={url}
        />
      </figcaption>
    </figure>
  );
};

const Projects = () => {
  return (
    <section className="px-5 mt-40">
      <div className="flex flex-col items-center my-12">
        <h2 className="z-10 text-6xl font-bold">Mes réalisations</h2>
        <p className="my-4 font-light text-xl">
          Je vous propose une sélection de quelques projets sur lesquels j'ai
          travaillé.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 md:mx-10 lg:mx-32 xl:mx-52">
        <Project
          src="/guillaume-astruc-photography.webp"
          alt="Site web Guillaume Astruc Photography"
          description="Plateforme de vente de photographies en ligne pour Guillaume Astruc Photography"
          url="https://www.guillaumeastrucphotography.com/"
        />
        <Project
          src="/chop-ton-job.webp"
          alt="Chop'Ton Job"
          description="Chop'Ton Job permet de chercher des entreprises ayant des besoins en recrutement"
          url="https://chop-ton-job.web.app/"
        />
        <Project
          src="/rock-quest.webp"
          alt="Rock'Quest"
          description="Rock'Quest est un Guitar Hero like réalisé en Vanilla JS. Jouable principalement sur desktop"
          url="https://rockquest.netlify.app/"
        />
        <Project
          src="/esprit-body.webp"
          alt="Site web Esprit Body"
          description="Site vitrine qui présente les services de l'entreprise de coaching sportif Esprit Body"
          url="https://www.guillaumeastrucphotography.com/"
        />
        <Project
          src="/prune-manciet-osteopathe.webp"
          alt="Site web Prune Manciet"
          description="Site vitrine qui présente les services de Prune Manciet, ostéopathe à Bourgoin-Jallieu"
          url="https://prunemanciet-osteopathe.fr/"
        />
        <Project
          src="/blog-enbasdemarue.webp"
          alt="Blog de la marketplace Enbasdemarue"
          description="Blog qui présente les services proposés par la marketplace Enbasdemarue"
          url="https://www.blog.enbasdemarue.fr/"
        />
      </div>

      <div className="flex justify-center mt-16">
        <Button url={GITHUB_URL} newTab={true} label="See more on GitHub" />
      </div>
    </section>
  );
};

export default Projects;
