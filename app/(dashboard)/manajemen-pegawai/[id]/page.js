"use client";

import { employees as data } from "@/constants";
import { ArrowLeft, User, Briefcase, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const employee = data.find((emp) => emp.id === parseInt(params.id));

  if (!employee) {
    return (
      <div className="p-8 rounded-xl shadow-md bg-white">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/manajemen-pegawai"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Kembali</span>
          </Link>
        </div>
        <div className="text-center text-gray-500 py-12">
          Data pegawai tidak ditemukan
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-xl shadow-md bg-white">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/manajemen-pegawai"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Kembali</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <User className="text-blue-600" size={24} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Informasi Pribadi
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nama Lengkap
                </label>
                <p className="text-gray-900 font-medium">{employee.nama}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  NIP
                </label>
                <p className="text-gray-900 font-medium">{employee.nip}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Status
                </label>
                <p>
                  <span
                    className={`${
                      employee.status === "Aktif"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    } px-4 py-1.5 rounded-lg font-medium`}
                  >
                    {employee.status}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Briefcase className="text-purple-600" size={24} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Informasi Jabatan
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Jabatan
                </label>
                <p className="text-gray-900 font-medium">{employee.jabatan}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Unit Kerja
                </label>
                <p className="text-gray-900 font-medium">
                  {employee.unitKerja}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Award className="text-emerald-600" size={24} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Kompetensi & Keterampilan
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Kompetensi
                </label>
                <p className="text-gray-900 font-medium">
                  {employee.kompetensi}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 rounded-lg">
                <BookOpen className="text-amber-600" size={24} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Riwayat Pelatihan
              </h2>
            </div>
            <div className="space-y-6">
              <div className="text-gray-500 text-sm">
                Belum ada riwayat pelatihan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
