"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import frTranslation from "../locales/fr.json";
import enTranslation from "../locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: frTranslation },
    en: { translation: enTranslation },
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
