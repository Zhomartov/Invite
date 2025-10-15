import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./ru/translation.json";
import kz from "./kz/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      kz: { translation: kz },
    },
    lng: "kz",
    fallbackLng: "kz",
    interpolation: { escapeValue: false },
  });

export default i18n;

