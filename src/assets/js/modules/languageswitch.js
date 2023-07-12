import { I18n } from "i18n-js";
import translations from "./../../locales/translations.json";
import { getLocalStorage, setLocalStorage } from "./localStorage";

const localStorageLanguageKey = "languageSetting";

/**
 * Get the set locale code from localStorage
 * @return {string}
 */
export function getLocale() {
    return getLocalStorage(localStorageLanguageKey);
}

/**
 * Store a specific language code into the localStorage
 * @param {string} value
 * @return void
 */
export function setLocale(value) {
    return setLocalStorage(localStorageLanguageKey, value);
}

export function getTranslationEngine() {

    const i18n = window.i18n || new I18n(translations);

    /**
     * Try to read stored locale, otherwise use English as fallback
     */
    i18n.locale = getLocale() || "en";

    return window.i18n = i18n;
}

export default {
    "getLocale": getLocale,
    "setLocale": setLocale,
    "getTranslationEngine": getTranslationEngine
}