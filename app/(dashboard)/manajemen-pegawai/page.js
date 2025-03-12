"use client";

import { employees as data } from "@/constants";
import { Search } from "lucide-react";
import { Trash2, ExternalLink, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [employees, setEmployees] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  // Styling satus berdasarkan aktif
  const getStatusStyle = (status) => {
    return status === "Aktif"
      ? "bg-green-100 text-green-700 px-2 py-1 rounded-md"
      : "bg-red-100 text-red-700 px-2 py-1 rounded-md";
  };

  // Filter data pegawai berdasarkan input pencarian
  const filteredEmployee = employees.filter((employee) =>
    `${employee.nama} ${employee.nip} ${employee.jabatan} ${employee.unitKerja} ${employee.status}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="space-y-4">
      <div className="p-6 rounded-xl shadow-md bg-white">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl tracking-tight">Pegawai</h1>
          <div className="flex gap-4 items-center">
            <div className="px-4 py-2.5 w-xs border border-gray-300 rounded-md flex items-center gap-2">
              <Search size={22} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search nama, nip ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=" text-sm text-gray-700 outline-none "
              />
            </div>
            <button className="text-white text-sm font-medium bg-blue-500 px-4 py-2.5 rounded-md flex items-center gap-2">
              <PlusCircle /> Tambah Pegawai
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="table-header">Nama Pegawai</th>
              <th className="table-header">NIP</th>
              <th className="table-header">Jabatan</th>
              <th className="table-header">Unit Kerja</th>
              <th className="table-header">Kompetensi</th>
              <th className="table-header">Status</th>
              <th className="table-header w-[100px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployee.length > 0 ? (
              filteredEmployee.map((employee) => (
                <tr key={employee.nip}>
                  <td className="table-item">{employee.nama}</td>
                  <td className="table-item">{employee.nip}</td>
                  <td className="table-item">{employee.jabatan}</td>
                  <td className="table-item">{employee.unitKerja}</td>
                  <td className="table-item">{employee.kompetensi}</td>
                  <td className="table-item">
                    <span className={`${getStatusStyle(employee.status)}`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="text-end flex justify-center gap-2 pt-4">
                    <Pencil
                      size={18}
                      className="text-orange-500 cursor-pointer"
                    />
                    <Trash2
                      size={18}
                      className="text-red-500 cursor-pointer"
                      onClick={() => {
                        handleDelete(employee.id);
                      }}
                    />
                    <ExternalLink
                      size={18}
                      className="text-emerald-500 cursor-pointer"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 pt-6">
                  Tidak ada pegawai ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2 items-center text-gray-700 text-xs rounded-xl bg-white shadow-md p-2">
          <button className="px-4 py-2.5">Prev</button>
          <span>Page 1 of 5</span>
          <button className="px-4 py-2.5">Next</button>
        </div>
      </div>
      <ul>
        <li>Data Pegawai (Tambah, Edit, Hapus, Lihat Detail)</li>
        <li>
          Riwayat Pelatihan Pegawai (Melihat pelatihan yang pernah diikuti
          pegawai)
        </li>
        <li>
          Kompetensi & Keterampilan (Daftar kompetensi pegawai berdasarkan
          jabatan)
        </li>
      </ul>
    </div>
  );
}
