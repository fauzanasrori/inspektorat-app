"use client";

import { dataPelatihan } from "@/constants";
import { createSlug } from "@/utils/slug";
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const training = dataPelatihan.find(
    (item) => createSlug(item.nama) === params.slug
  );

  if (!training) {
    return (
      <div className="p-8 rounded-xl shadow-md bg-white">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/manajemen-pelatihan"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Kembali</span>
          </Link>
        </div>
        <div className="text-center text-gray-500 py-12">
          Pelatihan tidak ditemukan
        </div>
      </div>
    );
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-800";
      case "Sedang Berlangsung":
        return "bg-blue-100 text-blue-800";
      case "Akan Datang":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/manajemen-pelatihan"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span>Kembali</span>
          </Link>
          <h1 className="text-2xl font-semibold text-gray-800">
            {training.nama}
          </h1>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusStyle(
              training.status
            )}`}
          >
            {training.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Informasi Pelatihan
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Calendar className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tanggal</p>
                  <p className="text-gray-800 font-medium">
                    {training.tanggal}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Clock className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Durasi</p>
                  <p className="text-gray-800 font-medium">{training.durasi}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <MapPin className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lokasi</p>
                  <p className="text-gray-800 font-medium">{training.lokasi}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Users className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Jumlah Peserta</p>
                  <p className="text-gray-800 font-medium">
                    {training.peserta} Peserta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Deskripsi Pelatihan
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Daftar Peserta
        </h2>
        <div className="text-gray-500 text-sm">
          Daftar peserta akan ditampilkan di sini
        </div>
      </div>
    </div>
  );
}
