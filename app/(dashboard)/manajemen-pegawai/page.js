"use client";

import { employees as data } from "@/constants";
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
    <div>
      <div className="mb-10">
        <h1 className="mb-4">Manajemen Pegawai</h1>
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

      <div className="p-6 rounded-xl shadow-md bg-white">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl tracking-tight">Pegawai</h1>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search nama, nip ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-xs py-2 px-4 text-sm text-gray-700 border border-gray-300 rounded-md outline-none "
            />
            <button className="text-white font-medium bg-blue-500 px-4 py-1.5 rounded-md">
              + Tambah Pegawai
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
              <th className="table-header w-[178px]">Action</th>
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
                  <td className="text-end">
                    <button className="px-2 py-1 text-sm text-gray-700 rounded-md border border-gray-300 hover:border-gray-400">
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(employee.id);
                      }}
                      className="px-2 py-1 ml-2 text-sm text-gray-700 rounded-md border border-gray-300 hover:border-gray-400"
                    >
                      Hapus
                    </button>
                    <button className="px-2 py-1 ml-2 text-sm text-gray-700 rounded-md border border-gray-300 hover:border-gray-400">
                      Detail
                    </button>
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

        <div className="flex justify-end">
          <div className="flex gap-4 items-center text-gray-700 text-xs mt-4">
            <button className="p-2 rounded-md border border-gray-300">
              Prev
            </button>
            <span>Page 1 of 5</span>
            <button className="p-2 rounded-md border border-gray-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
