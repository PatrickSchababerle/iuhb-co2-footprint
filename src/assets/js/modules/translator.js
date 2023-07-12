/**
 * Translates emissions data into datatable readable array
 * @param {object} emissionData
 * @return {object}
 */
export default function translator(emissionData) {

    /**
     * Initialize a variable containing all transformed rows
     */
    let rows = [];

    /**
     * Iterate through the emission data array
     */
    for(let i = 0; i < emissionData.length; i++) {

        /**
         * Get the current iteration entry
         */
        let company = emissionData[i];

        /**
         * Push the data into the row array with the new form
         */
        rows.push([
            company.name,
            company.country,
            company.industry,
            company.emissions.value,
            company.emissions.unit
        ]);

    }

    return {
        columns: [
            { title: window.i18n.t("table.header.company") },
            { title: window.i18n.t("table.header.country") },
            { title: window.i18n.t("table.header.industry") },
            { title: window.i18n.t("table.header.emissions") },
            { title: window.i18n.t("table.header.unit") }
        ],
        rows: rows
    };

}