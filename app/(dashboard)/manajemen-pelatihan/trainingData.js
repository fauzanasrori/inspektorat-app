"use-client";

import Image from "next/image";
import { useState } from "react";
import { MapPin } from "lucide-react";

export default function TrainingData({ filteredData, handleDelete }) {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const toggleMenu = (id) => {
    setIsMenuOpen(isMenuOpen === id ? null : id);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Selesai":
        return "text-green-500";
      case "Sedang Berlangsung":
        return "text-blue-500";
      case "Akan Datang":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <>
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {filteredData.map((pelatihan) => (
            <div
              key={pelatihan.id}
              className="relative p-6 rounded-xl shadow-md bg-white flex flex-col justify-between gap-4"
            >
              <button
                onClick={() => toggleMenu(pelatihan.id)}
                className="absolute top-8 right-4"
              >
                <Image
                  src="/icons/menu.svg"
                  alt={pelatihan.nama}
                  width={14}
                  height={14}
                />
              </button>

              {isMenuOpen === pelatihan.id && (
                <DropdownMenu handleDelete={handleDelete} id={pelatihan.id} />
              )}

              <div>
                <h2 className="text-xl font-medium max-w-[90%]">
                  {pelatihan.nama}
                </h2>
                <p className="text-gray-700 text-sm inline-block mt-2">
                  Selama: {pelatihan.durasi}
                </p>
              </div>
              <div className="flex items-center justify-between gap-2 border-b border-gray-300 pb-2">
                <span className="text-sm text-gray-500">
                  {pelatihan.tanggal}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin size={16} className="text-blue-500 bg-transparent" />
                  {pelatihan.lokasi}
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Status:{" "}
                <span className={`${getStatusStyle(pelatihan.status)}`}>
                  {pelatihan.status}
                </span>
              </p>
              <button className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-md w-full">
                Detail Pelatihan
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700 text-sm">
          Tidak ada data pelatihan
        </p>
      )}
    </>
  );
}

function DropdownMenu({ handleDelete, id }) {
  return (
    <div className="absolute top-14 right-4 ring ring-gray-200 flex flex-col gap-2 items-center text-gray-700 text-xs rounded-md bg-white shadow-md p-1 w-[100px]">
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className="px-2 py-1.5 hover:bg-gray-200 rounded w-full text-start"
      >
        Hapus
      </button>
      <button className="px-2 py-1.5 hover:bg-gray-200 rounded w-full text-start">
        Edit
      </button>
    </div>
  );
}
