/**
 * Translates emissions data into datatable readable array
 * @param {object} emissionData
 * @return object
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
            { title: 'Company' },
            { title: 'Country' },
            { title: 'Industry' },
            { title: 'Emissions' },
            { title: 'Unit' }
        ],
        rows: rows
    };

}