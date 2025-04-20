"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save } from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    nama: "Fauzan Asrori",
    email: "fauzan@example.com",
    telepon: "081234567890",
    alamat: "Jl. Contoh No. 123, Kota Bandung",
    tanggalLahir: "01 Januari 1990",
    jabatan: "Staff Inspektorat",
    unitKerja: "Inspektorat Kota Bandung",
  });

  const handleSave = () => {
    // Here you would typically make an API call to save the changes
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        {/* <h1 className="text-2xl font-semibold text-gray-800">Profil Saya</h1> */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          {isEditing ? (
            <>
              <Save size={16} />
              Simpan Perubahan
            </>
          ) : (
            <>
              <Edit2 size={16} />
              Edit Profil
            </>
          )}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="size-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
            FA
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {profile.nama}
            </h2>
            <p className="text-gray-500">{profile.jabatan}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <User size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Nama Lengkap</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.nama}
                    onChange={(e) =>
                      setProfile({ ...profile, nama: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800">{profile.nama}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Mail size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800">{profile.email}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Phone size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Nomor Telepon</p>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.telepon}
                    onChange={(e) =>
                      setProfile({ ...profile, telepon: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800">{profile.telepon}</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <MapPin size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Alamat</p>
                {isEditing ? (
                  <textarea
                    value={profile.alamat}
                    onChange={(e) =>
                      setProfile({ ...profile, alamat: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                ) : (
                  <p className="text-gray-800">{profile.alamat}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Calendar size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Tanggal Lahir</p>
                {isEditing ? (
                  <input
                    type="date"
                    value={profile.tanggalLahir}
                    onChange={(e) =>
                      setProfile({ ...profile, tanggalLahir: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800">{profile.tanggalLahir}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Informasi Pekerjaan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <User size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Jabatan</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.jabatan}
                    onChange={(e) =>
                      setProfile({ ...profile, jabatan: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800">{profile.jabatan}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <User size={20} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Unit Kerja</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.unitKerja}
                    onChange={(e) =>
                      setProfile({ ...profile, unitKerja: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800">{profile.unitKerja}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
