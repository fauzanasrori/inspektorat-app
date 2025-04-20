"use client";

import { Award } from "lucide-react";

export default function CompetencyReport({ competencyGroups }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-amber-100 rounded-lg">
          <Award className="text-amber-600" size={24} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          Rekap Kompetensi Pegawai
        </h2>
        <span className="ml-auto text-sm text-gray-500">
          {Object.keys(competencyGroups).length} Kompetensi
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(competencyGroups).map(([kompetensi, employees]) => (
          <div
            key={kompetensi}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="font-medium text-gray-800 mb-2">{kompetensi}</h3>
            <p className="text-sm text-gray-500 mb-4">
              Jumlah Pegawai: {employees.length}
            </p>
            <div className="space-y-2">
              {employees.map((employee) => (
                <div
                  key={employee.nip}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-600">{employee.nama}</span>
                  <span
                    className={`${
                      employee.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    } px-2 py-1 rounded-md text-xs`}
                  >
                    {employee.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
