import { GITHUB_URL } from "@/links";
import Button, { ButtonType } from "./Button";
import Image from "next/image";
import { t } from "i18next";
import SectionIntroduction from "./SectionIntroduction";

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
    <figure className="rounded-xl sm:h-56 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center relative">
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
          className="h-12"
          label={t("projects.buttonLabel")}
          newTab={true}
          url={url}
          type={ButtonType.SECONDARY}
        />
      </figcaption>
    </figure>
  );
};

const Projects = () => {
  return (
    <section>
      <SectionIntroduction
        title={t("projects.title")}
        introduction={t("projects.introduction")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 margin-x">
        <Project
          src="/guillaume-astruc-photography.webp"
          alt={t("projects.guillaumeAstrucPhotography.imageAlt")}
          description={t("projects.guillaumeAstrucPhotography.description")}
          url="https://www.guillaumeastrucphotography.com/"
        />
          <Project
              src="/eventify.webp"
              alt={t("projects.eventify.imageAlt")}
              description={t("projects.eventify.description")}
              url="https://eventify.space/"
          />
          <Project
              src="/maison_potentiel.webp"
              alt={t("projects.maisonPotentiel.imageAlt")}
              description={t("projects.maisonPotentiel.description")}
              url="https://maisonpotentiel.fr/"
          />
          <Project
              src="/tim_toque.webp"
              alt={t("projects.timToque.imageAlt")}
              description={t("projects.timToque.description")}
              url="https://timtoque.fr/"
          />
        <Project
          src="/chop-ton-job.webp"
          alt={t("projects.chopTonJob.imageAlt")}
          description={t("projects.chopTonJob.description")}
          url="https://chop-ton-job.web.app/"
        />
        <Project
          src="/rock-quest.webp"
          alt={t("projects.rockQuest.imageAlt")}
          description={t("projects.rockQuest.description")}
          url="https://rockquest.netlify.app/"
        />
        <Project
          src="/esprit-body.webp"
          alt={t("projects.espritBody.imageAlt")}
          description={t("projects.espritBody.description")}
          url="https://espritbody.fr/"
        />
        <Project
          src="/prune-manciet-osteopathe.webp"
          alt={t("projects.pruneManciet.imageAlt")}
          description={t("projects.pruneManciet.description")}
          url="https://prunemanciet-osteopathe.fr/"
        />
        <Project
          src="/blog-enbasdemarue.webp"
          alt={t("projects.enbasdemarue.imageAlt")}
          description={t("projects.enbasdemarue.description")}
          url="https://www.blog.enbasdemarue.fr/"
        />
      </div>

      <div className="flex justify-center mt-16">
        <Button
          url={GITHUB_URL}
          newTab={true}
          label={t("projects.githubButtonLabel")}
          type={ButtonType.SECONDARY}
        />
      </div>
    </section>
  );
};

export default Projects;
