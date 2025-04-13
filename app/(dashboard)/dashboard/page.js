import { dataPelatihan, employees } from "@/constants";
import { Users, PlusCircle, ClipboardList } from "lucide-react";
import Link from "next/link";
import PelatihanBerlangsung from "./pelatihanBerlangsung";
import TabelPegawai from "./tabelPegawai";

export default function Page() {
  const filteredTraining = dataPelatihan.filter(
    (item) => item.status === "Sedang Berlangsung"
  );

  const trainingCompleted = dataPelatihan.filter(
    (item) => item.status === "Selesai"
  );

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
            className="bg-white w-[240px] h-16 rounded-lg hover:bg-gray-200 shadow-xl flex items-center justify-center"
          >
            <div className="text-base text-blue-600 font-medium flex items-center gap-2">
              <Users size={18} />
              Lihat Data Pegawai
            </div>
          </Link>
          <Link
            href=""
            className="bg-blue-900/50 w-[240px] h-16 rounded-lg hover:bg-blue-900 flex items-center justify-center shadow-xl"
          >
            <div className="text-white font-medium flex items-center gap-2">
              <PlusCircle size={18} />
              Tambah Pegawai
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Ringkasan
          value={employees.length}
          label={"Total Pegawai"}
          Icon={Users}
          className="bg-blue-100 text-blue-700"
        />
        <Ringkasan
          value={trainingCompleted.length}
          label={"Pelatihan Selesai"}
          Icon={ClipboardList}
          className="bg-emerald-100 text-emerald-700"
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
      <div className="grid grid-cols-3 gap-4">
        <PelatihanBerlangsung filteredTraining={filteredTraining} />
        <div className="p-6 bg-white rounded-xl shadow-md">
          Grafik Pelatihan
        </div>
      </div>
      <TabelPegawai employees={employees} />
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
    <div className="p-6 rounded-xl shadow-md bg-white flex items-center gap-4">
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full ${className}`}
      >
        {Icon && <Icon />}
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm text-gray-600 capitalize">{label}</p>
      </div>
    </div>
  );
}
