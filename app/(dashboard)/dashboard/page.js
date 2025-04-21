import { dataPelatihan, employees } from "@/constants";
import {
  Users,
  PlusCircle,
  ClipboardList,
  BarChart3,
  Activity,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import PelatihanBerlangsung from "./components/pelatihanBerlangsung";
import TabelPegawai from "./components/tabelPegawai";
import GrafikPelatihan from "./components/grafikPelatihan";

export default function Page() {
  const filteredTraining = dataPelatihan.filter(
    (item) => item.status === "Sedang Berlangsung"
  );

  const trainingCompleted = dataPelatihan.filter(
    (item) => item.status === "Selesai"
  );

  const totalPeserta = dataPelatihan.reduce(
    (acc, curr) => acc + curr.peserta,
    0
  );
  const pesertaAktif = filteredTraining.reduce(
    (acc, curr) => acc + curr.peserta,
    0
  );

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white py-16 px-8 rounded-xl shadow-lg">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                Sistem Rekapitulasi <br />
                <span className="text-blue-100">Pegawai & Pelatihan</span>
              </h1>
              <p className="text-lg text-blue-100 max-w-2xl mb-8">
                Kelola data pegawai dan proses pelatihan dengan lebih efisien
                dan akurat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/manajemen-pegawai"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 w-full sm:w-[240px] h-16 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 border border-white/20"
                >
                  <div className="text-white font-medium flex items-center gap-2">
                    <Users size={18} />
                    Lihat Data Pegawai
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
                <Link
                  href="/manajemen-pelatihan"
                  className="group bg-white hover:bg-blue-50 w-full sm:w-[240px] h-16 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <div className="text-blue-600 font-medium flex items-center gap-2">
                    <ClipboardList size={18} />
                    Manajemen Pelatihan
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold mb-2">
                    {employees.length}
                  </div>
                  <div className="text-sm text-blue-100">Total Pegawai</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold mb-2">
                    {trainingCompleted.length}
                  </div>
                  <div className="text-sm text-blue-100">Pelatihan Selesai</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold mb-2">{totalPeserta}</div>
                  <div className="text-sm text-blue-100">Total Peserta</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold mb-2">{pesertaAktif}</div>
                  <div className="text-sm text-blue-100">Peserta Aktif</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid - Mobile Only */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        <Ringkasan
          value={employees.length}
          label={"Total Pegawai"}
          Icon={Users}
          className="bg-blue-100 text-blue-700 hover:shadow-lg transition-shadow duration-300"
        />
        <Ringkasan
          value={trainingCompleted.length}
          label={"Pelatihan Selesai"}
          Icon={ClipboardList}
          className="bg-emerald-100 text-emerald-700 hover:shadow-lg transition-shadow duration-300"
        />
        <Ringkasan
          value={totalPeserta}
          label={"Total Peserta"}
          Icon={Activity}
          className="bg-orange-100 text-orange-700 hover:shadow-lg transition-shadow duration-300"
        />
        <Ringkasan
          value={pesertaAktif}
          label={"Peserta Aktif"}
          Icon={BarChart3}
          className="bg-cyan-100 text-cyan-700 hover:shadow-lg transition-shadow duration-300"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-4">
        <PelatihanBerlangsung filteredTraining={filteredTraining} />
        <GrafikPelatihan dataPelatihan={dataPelatihan} />
      </div>

      {/* Employee Table */}
      <TabelPegawai employees={employees} />
    </div>
  );
}

function Ringkasan({ value, label, Icon, className }) {
  return (
    <div
      className={`p-6 rounded-xl shadow-md bg-white flex items-center gap-4 ${className}`}
    >
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full ${className}`}
      >
        {Icon && <Icon size={24} />}
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm text-gray-600 capitalize">{label}</p>
      </div>
    </div>
  );
}
