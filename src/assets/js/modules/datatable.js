import DataTable from 'datatables.net-bs5'

export default function createDataTable(elementId, data) {

    new DataTable(`#${elementId}`, {
        columns: data.columns,
        data: data.rows
    });

}