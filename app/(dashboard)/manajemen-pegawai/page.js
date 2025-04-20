"use client";

import { employees as data } from "@/constants";
import { Search, Trash2, Pencil, PlusCircle, Eye } from "lucide-react";
import { useState } from "react";
import EmployeeDrawer from "@/components/employeeDrawer";
import Link from "next/link";

const ITEMS_PER_PAGE = 7;

export default function Page() {
  const [employees, setEmployees] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  // Filter data pegawai berdasarkan input pencarian
  const filteredEmployee = employees.filter((employee) =>
    `${employee.nama} ${employee.nip} ${employee.jabatan} ${employee.unitKerja} ${employee.status} ${employee.kompetensi}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Hitung total halaman
  const totalPages = Math.ceil(filteredEmployee.length / ITEMS_PER_PAGE);

  // Ambil data sesuai halaman yang dipilih
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEmployees = filteredEmployee.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Styling status berdasarkan aktif
  const getStatusStyle = (status) => {
    return status === "Aktif"
      ? "bg-green-100 text-green-700 px-2 py-1 rounded-md"
      : "bg-red-100 text-red-700 px-2 py-1 rounded-md";
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const handleEditEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  const handleEditClick = (employee) => {
    setEmployeeToEdit(employee);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setEmployeeToEdit(null);
  };

  return (
    <div className="space-y-6">
      <div className="p-8 rounded-xl shadow-md bg-white">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Pegawai</h1>
          <div className="flex gap-4 items-center">
            <div className="px-4 py-2.5 w-xs border border-gray-300 rounded-md flex items-center gap-2 bg-gray-50">
              <Search size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search nama, nip ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-sm text-gray-700 outline-none w-full bg-transparent"
              />
            </div>
            <button
              onClick={() => {
                setEmployeeToEdit(null);
                setIsDrawerOpen(true);
              }}
              className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-md flex items-center gap-2 transition-colors"
            >
              <PlusCircle size={18} /> Tambah Pegawai
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="table-header py-4">Nama Pegawai</th>
                <th className="table-header py-4">NIP</th>
                <th className="table-header py-4">Jabatan</th>
                <th className="table-header py-4">Unit Kerja</th>
                <th className="table-header py-4">Kompetensi</th>
                <th className="table-header py-4">Status</th>
                <th className="table-header py-4 w-[120px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.length > 0 ? (
                currentEmployees.map((employee) => (
                  <tr
                    key={employee.nip}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="table-item py-4">{employee.nama}</td>
                    <td className="table-item py-4">{employee.nip}</td>
                    <td className="table-item py-4">{employee.jabatan}</td>
                    <td className="table-item py-4">{employee.unitKerja}</td>
                    <td className="table-item py-4">{employee.kompetensi}</td>
                    <td className="table-item py-4">
                      <span className={`${getStatusStyle(employee.status)}`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEditClick(employee)}
                          className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                          title="Hapus"
                        >
                          <Trash2 size={16} />
                        </button>
                        <Link
                          href={`/manajemen-pegawai/${employee.id}`}
                          className="p-2 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                          title="Lihat Detail"
                        >
                          <Eye size={16} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500 py-8">
                    Tidak ada pegawai ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex gap-2 items-center text-gray-700 text-sm rounded-xl bg-white shadow-md p-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2.5 hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <span className="px-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2.5 hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      <EmployeeDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onAddEmployee={handleAddEmployee}
        onEditEmployee={handleEditEmployee}
        employeeToEdit={employeeToEdit}
      />
    </div>
  );
}
