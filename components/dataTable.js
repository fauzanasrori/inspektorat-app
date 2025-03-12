export default function DataTable() {
  return (
    <table className="w-full text-left border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Nama
          </th>
          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
