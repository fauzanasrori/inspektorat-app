"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TabelPegawai({ employees }) {
  const getStatusStyle = (status) => {
    return status === "Aktif"
      ? "bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium"
      : "bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs font-medium";
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Daftar Pegawai
          </h1>
          <p className="text-sm text-gray-500 mt-1">Daftar pegawai terbaru</p>
        </div>
        <Link
          href="/manajemen-pegawai"
          className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200"
        >
          Lihat Semua
          <ChevronRight size={16} />
        </Link>
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
            {employees.slice(0, 5).map((employee) => (
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
                  <span className={getStatusStyle(employee.status)}>
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
