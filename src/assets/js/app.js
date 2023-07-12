import 'bootstrap/dist/js/bootstrap';
import './../scss/base.scss';

/**
 * Import dependencies for table
 */
import createDataTable from "./modules/datatable";
import translator from "./modules/translator";
import emissionData from "./../../data/emissions.json";

/**
 * Import dependencies multiple language support
 */
import { getTranslationEngine, setLocale, getLocale } from "./modules/languageswitch";
import { setDirection } from "./modules/directionswitch";

const i18nEngine = getTranslationEngine();

/**
 * Set the ltr/rtl direction
 */
setDirection();

/**
 * Get the language switch element
 */
const languageSwitchElement = document.querySelector('#language-switch');

/**
 * Set the current language in language switch
 */
languageSwitchElement.value = getLocale() || "en";

/**
 * Add translation functionality
 */
languageSwitchElement.addEventListener('change', (event) => {

    /**
     * Get the language code from the select element
     */
    const languageCode = event.target.value;

    /**
     * Set the new locale to localStorage
     */
    setLocale(languageCode);

    /**
     * Reload Page
     */
    window.location.reload();

});

/**
 * Translate emission data from json
 * to array for datatable
 */
const translatedEmissionData = translator(emissionData);

/**
 * Initialize datatable
 */
createDataTable('footprint-table', translatedEmissionData);