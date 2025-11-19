import { useTranslation } from "react-i18next";
import '../i18n.js'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
    };

    const currentLang = i18n.language;

    return (
        <div>
            {currentLang === "fr" ? (
                <button onClick={() => changeLanguage("en")}>EN</button>
            ) : (
                <button onClick={() => changeLanguage("fr")}>FR</button>
            )}
        </div>
    );
};

export default LanguageSwitcher;
