import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useEffect } from "react";
import enTranslations from "./en.json";
import frTranslations from "./fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "fr",
    fallbackLng: "en",
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
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
