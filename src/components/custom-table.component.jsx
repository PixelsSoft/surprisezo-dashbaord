import DataTable from "react-data-table-component"


export default function CustomTable({columns, data, loading, title, perPage}) {
    return (
        <div className="shadow-md rounded-[30px] p-[30px]">
            <DataTable
                title={title}
                columns={columns}
                data={data}
                progressPending={loading}
                pagination={false}
                paginationPerPage={perPage}
            />
        </div>
    )
}