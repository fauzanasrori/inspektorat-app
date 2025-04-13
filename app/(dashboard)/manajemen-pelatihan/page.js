"use client";

import { dataPelatihan as data } from "@/constants";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import TrainingData from "./trainingData";

export default function Page() {
  const [pelatihan, setPelatihan] = useState(data);
  const [kategori, setKategori] = useState("Semua");

  const handleDelete = (id) => {
    const updatedData = pelatihan.filter((item) => item.id !== id);
    setPelatihan(updatedData);
  };

  const filteredData =
    kategori === "Semua"
      ? pelatihan
      : pelatihan.filter((item) => item.kategori === kategori);

  return (
    <div className="space-y-4">
      <div className="border-b border-gray-300 flex justify-between items-end">
        <CategoryTabs selected={kategori} onSelect={setKategori} />
        <button className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-md flex items-center gap-2 mb-2">
          <PlusCircle size={18} /> Tambah Pelatihan
        </button>
      </div>

      <TrainingData handleDelete={handleDelete} filteredData={filteredData} />

      <ul>
        <li>Daftar Pelatihan (Tambah, Edit, Hapus, Lihat Detail)</li>
        <li>Kategori Pelatihan (Teknis, Manajerial, Kepemimpinan, dll.)</li>
        <li>Jadwal Pelatihan (Tanggal, tempat, instruktur, dll.)</li>
        <li>
          Pendaftaran Pelatihan (Pegawai dapat mendaftar untuk pelatihan
          tertentu)
        </li>
      </ul>
    </div>
  );
}

function CategoryTabs({ selected, onSelect }) {
  const categories = ["Semua", "Teknis", "Manajerial", "Kepemimpinan"];

  return (
    <div className="">
      {categories.map((category) => (
        <button
          key={category}
          className={`${
            selected === category
              ? "text-blue-600"
              : "text-gray-600 hover:text-gray-900"
          } text-sm px-4 py-2.5 rounded-md transition`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
