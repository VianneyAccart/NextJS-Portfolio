import { t } from "i18next";
import Image from "next/image";
import Button, { ButtonType } from "./Button";
import { useTranslationWithBrowserLanguageDetection } from "@/i18n/i18n";

const About = () => {
  const { i18n } = useTranslationWithBrowserLanguageDetection();

  return (
    <section className="mt-20">
      <h1>Vianney Accart</h1>
      <h2 className="text-2xl md:text-3xl font-thin">{t("about.title")}</h2>
      <div className="flex justify-center mt-24">
        <Image
          src="/profile_picture.png"
          alt={t("about.profilePictureAlt")}
          width={200}
          height={200}
          className="border-solid border-4 border-white rounded-full"
        />
      </div>

      <div className="-mt-24 text-xl margin-x p-6 md:p-16 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
        <p className="text-center mt-24 md:mt-16 mb-12 md:mb-10 md:text-xl font-light">
          {t("about.introduction")}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="-mt-8">
          <Button
            url={
              i18n.language === "fr"
                ? "/cv_vianney_accart_fr.pdf"
                : "/cv_vianney_accart_en.pdf"
            }
            label="Curriculum Vitae"
            newTab={true}
            type={ButtonType.PRIMARY}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
