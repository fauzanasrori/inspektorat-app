import { employees } from "@/constants";
import { Users, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-8 rounded-xl">
        <h1 className="max-w-2xl text-5xl font-bold mb-4 tracking-tight leading-14">
          Sistem Rekapitulasi Pegawai & Pelatihan
        </h1>
        <p className="text-lg text-gray-100 max-w-2xl">
          Kelola data pegawai dan proses pelatihan dengan lebih efisien dan
          akurat.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/manajemen-pegawai"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100"
          >
            <Users size={18} />
            Lihat Data Pegawai
          </Link>
          <Link
            href="/pegawai/tambah"
            className="bg-blue-800 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900"
          >
            <PlusCircle size={18} />
            Tambah Pegawai
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <Ringkasan
            value={employees.length}
            label={"Total Pegawai"}
            Icon={Users}
            className="bg-blue-100 text-blue-700"
          />
          <Ringkasan
            value={100}
            label={"Total Peserta"}
            className="bg-orange-100 text-orange-700"
          />
          <Ringkasan
            value={100}
            label={"Peserta Aktif"}
            className="bg-cyan-100 text-cyan-700"
          />
        </div>
      </div>
      <ul>
        <li>
          Ringkasan data pegawai (total pegawai, jumlah yang sudah mengikuti
          pelatihan, dsb.)
        </li>
        <li>Grafik/statistik kompetensi dan status pelatihan</li>
        <li>Notifikasi terkait pelatihan terbaru</li>
      </ul>
    </div>
  );
}

function Ringkasan({ value, label, Icon, className }) {
  return (
    // Data ringkasan pegawai
    <div className="px-6 py-4 rounded-xl shadow-md bg-white flex items-center gap-4">
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full ${className}`}
      >
        {Icon && <Icon />}
      </div>
      <div>
        <p className="text-3xl font-bold mb-2">{value}</p>
        <p className="text-sm text-gray-600 capitalize">{label}</p>
      </div>
    </div>
  );
}
