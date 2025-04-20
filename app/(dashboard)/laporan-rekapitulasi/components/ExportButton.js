"use client";

import { Download } from "lucide-react";

export default function ExportButton({
  activeTab,
  filteredEmployees,
  filteredTrainings,
  competencyGroups,
  exportToCSV,
}) {
  return (
    <button
      onClick={() => {
        if (activeTab === "pegawai") {
          exportToCSV(filteredEmployees, "laporan-pegawai.csv");
        } else if (activeTab === "pelatihan") {
          exportToCSV(filteredTrainings, "laporan-pelatihan.csv");
        } else {
          const competencyData = Object.entries(competencyGroups).map(
            ([kompetensi, employees]) => ({
              kompetensi,
              jumlah: employees.length,
              pegawai: employees.map((e) => e.nama).join(", "),
            })
          );
          exportToCSV(competencyData, "rekap-kompetensi.csv");
        }
      }}
      className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-md flex items-center gap-2 transition-colors"
    >
      <Download size={16} />
      Export to CSV
    </button>
  );
}
