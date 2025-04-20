"use-client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import { createSlug } from "@/utils/slug";

export default function TrainingData({
  filteredData,
  handleDelete,
  handleEdit,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const toggleMenu = (id) => {
    setIsMenuOpen(isMenuOpen === id ? null : id);
  };

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
    <>
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((pelatihan) => (
            <div
              key={pelatihan.id}
              className="relative p-6 rounded-xl shadow-md bg-white flex flex-col justify-between gap-4 hover:shadow-lg transition-shadow duration-200"
            >
              <button
                onClick={() => toggleMenu(pelatihan.id)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Image
                  src="/icons/menu.svg"
                  alt={pelatihan.nama}
                  width={16}
                  height={16}
                />
              </button>

              {isMenuOpen === pelatihan.id && (
                <DropdownMenu
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  training={pelatihan}
                />
              )}

              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-medium text-gray-900">
                    {pelatihan.nama}
                  </h2>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${getStatusStyle(
                      pelatihan.status
                    )}`}
                  >
                    {pelatihan.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} className="text-blue-500" />
                    <span>{pelatihan.tanggal}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} className="text-blue-500" />
                    <span>{pelatihan.durasi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-blue-500" />
                    <span>{pelatihan.lokasi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} className="text-blue-500" />
                    <span>{pelatihan.peserta} Peserta</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/manajemen-pelatihan/${createSlug(pelatihan.nama)}`}
                className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-md w-full transition-colors text-center"
              >
                Detail Pelatihan
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm">
            Tidak ada data pelatihan yang ditemukan
          </p>
        </div>
      )}
    </>
  );
}

function DropdownMenu({ handleDelete, handleEdit, training }) {
  return (
    <div className="absolute top-12 right-4 bg-white rounded-lg shadow-lg border border-gray-200 py-1 w-32 z-10">
      <button
        onClick={() => {
          handleEdit(training);
        }}
        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
      >
        Edit
      </button>
      <button
        onClick={() => {
          handleDelete(training.id);
        }}
        className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
      >
        Hapus
      </button>
    </div>
  );
}
