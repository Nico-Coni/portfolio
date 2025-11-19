import fr from './data/fr.json'
import en from './data/en.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            fr: { translation: fr },
            en: { translation: en }
        },
        fallbackLng: 'fr',
        detection: {
            order: ["localStorage", "navigator", "htmlTag", "cookie"],
            caches: ["localStorage"],
        },
        interpolation: { escapeValue: false }
    })

export default i18n