"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PelatihanBerlangsung({ filteredTraining }) {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const toggleMenu = (id) => {
    setIsMenuOpen(isMenuOpen === id ? null : id);
  };

  return (
    <div className="col-span-2 p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-start justify-between">
        <h1 className="text-xl tracking-tight mb-4">Pelatihan Berlangsung</h1>
        <Link
          href="/manajemen-pelatihan"
          className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-md flex items-center gap-2"
        >
          Halaman Pelatihan
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="table-header">No.</th>
            <th className="table-header">Nama Pelatihan</th>
            <th className="table-header">Kategori</th>
            <th className="table-header">Tanggal</th>
            <th className="table-header">Durasi</th>
            <th className="table-header">Lokasi</th>
          </tr>
        </thead>
        <tbody>
          {filteredTraining.slice(0, 4).map((training, i) => (
            <tr key={training.id}>
              <td className="table-item">{i + 1}</td>
              <td className="table-item">{training.nama}</td>
              <td className="table-item">{training.kategori}</td>
              <td className="table-item">{training.tanggal}</td>
              <td className="table-item">{training.durasi}</td>
              <td className="table-item">{training.lokasi}</td>
              <td className="relative">
                <button className="" onClick={() => toggleMenu(training.id)}>
                  <Image
                    src="/icons/menu.svg"
                    alt="icon"
                    width={14}
                    height={14}
                  />
                </button>
                {isMenuOpen === training.id && (
                  <div className="absolute -top-3 -right-3 bg-white z-20">
                    <DropdownMenu id={training.id} />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="absolute top-14 right-4 ring ring-gray-200 flex flex-col gap-2 items-center text-gray-700 text-xs rounded-md bg-white shadow-md p-1 w-[100px]">
      <button
        onClick={() => {}}
        className="px-2 py-1.5 hover:bg-gray-200 rounded w-full text-start"
      >
        Detail
      </button>
    </div>
  );
}
