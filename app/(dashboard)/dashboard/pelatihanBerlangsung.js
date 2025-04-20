"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";

export default function PelatihanBerlangsung({ filteredTraining }) {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const toggleMenu = (id) => {
    setIsMenuOpen(isMenuOpen === id ? null : id);
  };

  return (
    <div className="col-span-2 p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Pelatihan Berlangsung
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Daftar pelatihan yang sedang berlangsung
          </p>
        </div>
        <Link
          href="/manajemen-pelatihan"
          className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200"
        >
          Lihat Semua
          <ChevronRight size={16} />
        </Link>
      </div>

      <div className="space-y-4">
        {filteredTraining.slice(0, 4).map((training) => (
          <div
            key={training.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">{training.nama}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{training.tanggal}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{training.durasi}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{training.lokasi}</span>
                  </div>
                </div>
              </div>
              <Link
                href={`/manajemen-pelatihan/${training.nama
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-blue-600 text-sm font-medium hover:text-blue-700 px-3 py-1.5 rounded-md border border-blue-200 hover:bg-blue-50 transition-colors duration-200"
              >
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
