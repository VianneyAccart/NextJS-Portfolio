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
          visit: "Visit",
          title: "Full Stack Developer & Software Engineer",
          about:
            "I chose the development world because it allows me to develop my curiosity, learning capacity, and creativity on a daily basis. I enjoy creating applications with modern design, high performance, and user-friendliness. My experience enables me to integrate into projects of all types, ranging from a simple showcase website to a complex industrial project. I currently hold the position of software engineer at In-Core Systèmes.",
        },
      },
      fr: {
        translation: {
          visit: "Visiter",
          title: "Développeur Full Stack & Ingénieur Logiciel",
          about:
            "J'ai choisi le monde du développement car il me permet de développer quotidiennement ma curiosité, ma capacité d'apprentissage et ma créativité. J'aime créer des applications aux design modernes, performantes et agréables à utiliser. Mon expérience me permet de m'intégrer sur des projets de tous types, allant d'un simple site vitrine à un projet industriel complexe. J'occupe actuellement le poste d'ingénieur logiciel chez In-Core Systèmes.",
        },
      },
    },
  });

export function useTranslationWithBrowserLanguageDetection() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.on("initialized", () => {
      i18n.changeLanguage(navigator.language);
    });
  }, []);

  return useTranslation();
}
