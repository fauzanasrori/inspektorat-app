"use client";

import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function TrainingForm({
  isOpen,
  onClose,
  onAddTraining,
  onEditTraining,
  trainingToEdit,
}) {
  const [formData, setFormData] = useState({
    nama: "",
    kategori: "Teknis",
    tanggal: "",
    durasi: "",
    lokasi: "",
    status: "Akan Datang",
    peserta: 0,
  });

  const drawerRef = useRef(null);

  useEffect(() => {
    if (trainingToEdit) {
      setFormData(trainingToEdit);
    } else {
      setFormData({
        nama: "",
        kategori: "Teknis",
        tanggal: "",
        durasi: "",
        lokasi: "",
        status: "Akan Datang",
        peserta: 0,
      });
    }
  }, [trainingToEdit]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trainingToEdit) {
      onEditTraining({
        ...formData,
        id: trainingToEdit.id,
      });
    } else {
      onAddTraining({
        ...formData,
        id: Date.now(),
      });
    }
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/70 bg-opacity-50 z-50 transition-opacity duration-300">
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-[500px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {trainingToEdit ? "Edit Pelatihan" : "Tambah Pelatihan"}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
            <div className="space-y-6 px-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Pelatihan
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="Teknis">Teknis</option>
                  <option value="Manajerial">Manajerial</option>
                  <option value="Kepemimpinan">Kepemimpinan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal
                </label>
                <input
                  type="date"
                  name="tanggal"
                  value={formData.tanggal}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durasi
                </label>
                <input
                  type="text"
                  name="durasi"
                  value={formData.durasi}
                  onChange={handleChange}
                  placeholder="Contoh: 3 Hari"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lokasi
                </label>
                <input
                  type="text"
                  name="lokasi"
                  value={formData.lokasi}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="Akan Datang">Akan Datang</option>
                  <option value="Sedang Berlangsung">Sedang Berlangsung</option>
                  <option value="Selesai">Selesai</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jumlah Peserta
                </label>
                <input
                  type="number"
                  name="peserta"
                  value={formData.peserta}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2.5 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                {trainingToEdit ? "Simpan Perubahan" : "Tambah Pelatihan"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
