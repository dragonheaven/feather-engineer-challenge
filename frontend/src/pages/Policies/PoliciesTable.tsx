import Badge, { Status } from "../../Badge";


interface PoliciesTableParams {
    rows: any[];
}
  
const PoliciesTable = ({ rows }: PoliciesTableParams) => {
  return (
    <table className="min-w-full" data-testid="policies-table">
        <thead className="border-b bg-gray-100">
            <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Name
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Provider
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Type
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            {rows && rows.length > 0 && rows.map((row: any, index) => {
            return (
                <tr className="border-b" key={row.id} data-testid="table-row" >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {`${row.customer?.firstName} ${row.customer?.lastName}`}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {row.provider}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {row.insuranceType}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Badge status={row.status as Status} />
                    </td>
                </tr>
            );
            })}
        </tbody>
    </table>
    );
}

export default PoliciesTable;