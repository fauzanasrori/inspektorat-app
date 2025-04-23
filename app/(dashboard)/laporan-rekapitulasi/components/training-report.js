"use client";

import { BookOpen } from "lucide-react";

export default function TrainingReport({ filteredTrainings }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-emerald-100 rounded-lg">
          <BookOpen className="text-emerald-600" size={24} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          Laporan Pelatihan
        </h2>
        <span className="ml-auto text-sm text-gray-500">
          {filteredTrainings.length} Pelatihan
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Nama Pelatihan
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Kategori
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Tanggal
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Durasi
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Lokasi
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Jumlah Peserta
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTrainings.map((pelatihan) => (
              <tr
                key={pelatihan.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-4 px-4 text-sm text-gray-900">
                  {pelatihan.nama}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {pelatihan.kategori}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {pelatihan.tanggal}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {pelatihan.durasi}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {pelatihan.lokasi}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {pelatihan.peserta}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`${
                      pelatihan.status === "Selesai"
                        ? "bg-green-100 text-green-700"
                        : pelatihan.status === "Sedang Berlangsung"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    } px-2 py-1 rounded-md text-xs`}
                  >
                    {pelatihan.status}
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
