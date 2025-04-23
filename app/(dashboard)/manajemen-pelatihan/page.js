"use client";

import { dataPelatihan as data } from "@/constants";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import TrainingData from "./components/training-data";
import TrainingForm from "./components/training-form";

export default function Page() {
  const [pelatihan, setPelatihan] = useState(data);
  const [kategori, setKategori] = useState("Semua");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [trainingToEdit, setTrainingToEdit] = useState(null);

  const handleDelete = (id) => {
    const updatedData = pelatihan.filter((item) => item.id !== id);
    setPelatihan(updatedData);
  };

  const handleAddTraining = (newTraining) => {
    setPelatihan([...pelatihan, newTraining]);
  };

  const handleEditTraining = (updatedTraining) => {
    const updatedData = pelatihan.map((item) =>
      item.id === updatedTraining.id ? updatedTraining : item
    );
    setPelatihan(updatedData);
  };

  const handleEditClick = (training) => {
    setTrainingToEdit(training);
    setIsFormOpen(true);
  };

  const filteredData =
    kategori === "Semua"
      ? pelatihan
      : pelatihan.filter((item) => item.kategori === kategori);

  return (
    <div className="space-y-4">
      <div className="border-b border-gray-300 flex justify-between items-end">
        <CategoryTabs selected={kategori} onSelect={setKategori} />
        <button
          onClick={() => {
            setTrainingToEdit(null);
            setIsFormOpen(true);
          }}
          className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-md flex items-center gap-2 mb-2"
        >
          <PlusCircle size={18} /> Tambah Pelatihan
        </button>
      </div>

      <TrainingData
        handleDelete={handleDelete}
        handleEdit={handleEditClick}
        filteredData={filteredData}
      />

      <TrainingForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setTrainingToEdit(null);
        }}
        onAddTraining={handleAddTraining}
        onEditTraining={handleEditTraining}
        trainingToEdit={trainingToEdit}
      />
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
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          } text-sm px-4 py-2.5 transition`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
