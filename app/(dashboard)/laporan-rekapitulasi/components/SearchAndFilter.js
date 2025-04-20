"use client";

import { Search } from "lucide-react";

export default function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  activeTab,
  uniqueUnitKerja,
  uniqueKategori,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {(activeTab === "pegawai" || activeTab === "pelatihan") && (
        <div className="px-4 py-2.5 w-xs border border-gray-300 rounded-md flex items-center gap-2 bg-gray-50">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Cari..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-sm text-gray-700 outline-none w-full bg-transparent"
          />
        </div>
      )}

      {activeTab === "pegawai" && (
        <div className="flex gap-2">
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-600"
          >
            <option value="Semua">Semua Status</option>
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
          <select
            value={filters.unitKerja}
            onChange={(e) =>
              setFilters({ ...filters, unitKerja: e.target.value })
            }
            className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600"
          >
            <option value="Semua">Semua Unit Kerja</option>
            {uniqueUnitKerja.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      )}

      {activeTab === "pelatihan" && (
        <select
          value={filters.kategori}
          onChange={(e) => setFilters({ ...filters, kategori: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600"
        >
          <option value="Semua">Semua Kategori</option>
          {uniqueKategori.map((kategori) => (
            <option key={kategori} value={kategori}>
              {kategori}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
