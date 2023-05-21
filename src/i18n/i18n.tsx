import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useEffect } from "react";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "fr",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          guillaumeTestimonial: `"Je suis photographe professionnel et j'ai fait appel à Vianney pour
          concevoir mon site internet. Il a su faire preuve d'un grand
          professionnalisme pour s'adapter au mieux à mes besoins et me
          proposer quelque chose qui me correspond parfaitement. Il est très
          organisé, disponible et force de proposition"`,
          quentinTestimonial: `"J’ai fait appel à Vianney au lancement de mon activité de coaching
          sportif pour réaliser mon site. Je n'avais que peu d'idées
          concernant le design. Vianney a su me poser les bonnes questions
          afin de me proposer différentes possibilités. Il a su prendre des
          initiatives pour me faire gagner du temps"`,
          visit: "Visit",
          title: "Full Stack Developer & Software Engineer",
          about:
            "I chose the development world because it allows me to develop my curiosity, learning capacity, and creativity on a daily basis. I enjoy creating applications with modern design, high performance, and user-friendliness. My experience enables me to integrate into projects of all types, ranging from a simple showcase website to a complex industrial project. I currently hold the position of software engineer at In-Core Systèmes.",
        },
      },
      fr: {
        translation: {
          guillaumeTestimonial: `"Je suis photographe professionnel et j'ai fait appel à Vianney pour
          concevoir mon site internet. Il a su faire preuve d'un grand
          professionnalisme pour s'adapter au mieux à mes besoins et me
          proposer quelque chose qui me correspond parfaitement. Il est très
          organisé, disponible et force de proposition"`,
          quentinTestimonial: `"J’ai fait appel à Vianney au lancement de mon activité de coaching
          sportif pour réaliser mon site. Je n'avais que peu d'idées
          concernant le design. Vianney a su me poser les bonnes questions
          afin de me proposer différentes possibilités. Il a su prendre des
          initiatives pour me faire gagner du temps"`,
          visit: "Visiter",
          title: "Développeur Full Stack & Ingénieur Logiciel",
          about:
            "J'ai choisi le monde du développement car il me permet de développer quotidiennement ma curiosité, ma capacité d'apprentissage et ma créativité. J'aime créer des applications aux design modernes, performantes et agréables à utiliser. Mon expérience me permet de m'intégrer sur des projets de tous types, allant d'un simple site vitrine à un projet industriel complexe. J'occupe actuellement le poste d'ingénieur logiciel chez In-Core Systèmes.",
        },
      },
    },
  });

export const useTranslationWithBrowserLanguageDetection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.on("initialized", () => {
      i18n.changeLanguage(navigator.language);
    });
  }, [i18n]);

  return useTranslation();
};
