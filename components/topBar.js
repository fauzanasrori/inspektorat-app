"use client";

import { dataPelatihan } from "@/constants";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function TopBar() {
  const pathname = usePathname();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsNotificationOpen(false);
        setIsProfileOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const titleMap = {
    "/": "Home",
    "/dashboard": "Selamat Datang Kembali",
    "/manajemen-pegawai": "Manajemen Pegawai",
    "/manajemen-pelatihan": "Manajemen Pelatihan",
    "/rekomendasi-pelatihan": "Rekomendasi Pelatihan",
    "/laporan-rekapitulasi": "Laporan & Rekapitulasi",
    "/pengaturan": "Pengaturan",
    "/profil-saya": "Profil Saya",
    "/logout": "Logout",
  };

  const pageTitle = titleMap[pathname] || "Selamat Datang";

  const date = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const upcomingTrainings = dataPelatihan.filter(
    (item) => item.status === "Akan Datang"
  );
  const notificationCount = upcomingTrainings.length;

  return (
    <div className="mb-6 bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm text-gray-500 mb-1">Hi Fauzan Asrori</h2>
          <h1 className="text-2xl font-semibold text-gray-800">{pageTitle}</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-600">
            <CalendarDays size={18} className="text-blue-500" />
            <span className="text-sm">{date}</span>
          </div>

          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors duration-200"
            >
              <Bell size={18} />
              {notificationCount > 0 && (
                <div className="absolute -top-1 -right-1 size-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-medium">
                  {notificationCount}
                </div>
              )}
            </button>

            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-medium text-gray-800">Notifikasi</h3>
                </div>
                {upcomingTrainings.length > 0 ? (
                  upcomingTrainings.map((training) => (
                    <div
                      key={training.id}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <p className="text-sm font-medium text-gray-800">
                        {training.nama}
                      </p>
                      <p className="text-xs text-gray-500">
                        {training.tanggal}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    Tidak ada notifikasi baru
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="size-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                FA
              </div>
              <ChevronDown
                size={16}
                className={`text-gray-400 group-hover:text-gray-600 transition-colors ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-800">
                    Fauzan Asrori
                  </p>
                  <p className="text-xs text-gray-500">fauzan@example.com</p>
                </div>
                <div className="py-1">
                  <Link
                    href="/profil-saya"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <User size={16} className="text-gray-500" />
                    Profil Saya
                  </Link>
                  <Link
                    href="/pengaturan"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <Settings size={16} className="text-gray-500" />
                    Pengaturan
                  </Link>
                  <button
                    onClick={() => {
                      // Handle logout logic here
                      console.log("Logout clicked");
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                  >
                    <LogOut size={16} className="text-red-500" />
                    Keluar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
