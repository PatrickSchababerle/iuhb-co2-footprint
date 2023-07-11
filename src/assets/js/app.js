import 'bootstrap/dist/js/bootstrap'
import './../scss/base.scss';

/**
 * Import dependencies for table
 */
import createDataTable from "./modules/datatable";
import translator from "./modules/translator";
import emissionData from "./../../data/emissions.json"

/**
 * Translate emission data from json
 * to array for datatable
 */
const translatedEmissionData = translator(emissionData);

/**
 * Initialize datatable
 */
createDataTable('footprint-table', translatedEmissionData);