import { t } from "i18next";
import Image from "next/image";
import Button from "./Button";
import { useTranslationWithBrowserLanguageDetection } from "@/i18n/i18n";

export default function About() {
  const { i18n } = useTranslationWithBrowserLanguageDetection();

  return (
    <section className="mt-20 md:px-5">
      <h1 className="text-center text-4xl md:text-7xl pt-20 mb-2 font-bold text-neutral-800 dark:text-gray-200">
        Vianney Accart
      </h1>
      <h2 className="text-center px-5 text-2xl md:text-3xl mb-12 font-thin">
        {t("title")}
      </h2>
      <div className="flex justify-center pt-12">
        <Image
          src="/profile_picture.png"
          alt="Picture of Vianney Accart" // TODO : Translate
          width={200}
          height={200}
          className="border border-solid border-4 border-white rounded-full"
        />
      </div>

      <div className="-mt-24 text-xl lg:mx-52 p-6 md:p-16 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
        <p className="text-center mt-24 md:mt-16 mb-12 md:mb-10 md:text-xl font-light">
          {t("about")}
        </p>
      </div>

      {/* TODO : upload english cv */}
      <div className="flex justify-center">
        <div className="-mt-8">
          <Button
            url={
              i18n.language === "fr"
                ? "/cv_vianney_accart_developpeur_full_stack_ingenieur_logiciel.pdf"
                : "/logo.png"
            }
            label="Curriculum Vitae"
            newTab={true}
          />
        </div>
      </div>
    </section>
  );
}
