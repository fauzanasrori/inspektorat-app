"use client";

import { Users } from "lucide-react";

export default function EmployeeReport({ filteredEmployees }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Users className="text-blue-600" size={24} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Laporan Pegawai</h2>
        <span className="ml-auto text-sm text-gray-500">
          {filteredEmployees.length} Pegawai
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Nama Pegawai
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                NIP
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Jabatan
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Unit Kerja
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Kompetensi
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredEmployees.map((employee) => (
              <tr
                key={employee.nip}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-4 px-4 text-sm text-gray-900">
                  {employee.nama}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {employee.nip}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {employee.jabatan}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {employee.unitKerja}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {employee.kompetensi}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`${
                      employee.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    } px-2 py-1 rounded-md text-sm`}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
