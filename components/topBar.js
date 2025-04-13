"use client";

import { dataPelatihan } from "@/constants";
import { Bell } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();

  const titleMap = {
    "/": "Home",
    "/dashboard": "Selamat Datang Kembali",
    "/manajemen-pegawai": "Manajemen Pegawai",
    "/manajemen-pelatihan": "Manajemen Pelatihan",
    "/rekomendasi-pelatihan": "Rekomendasi Pelatihan",
    "/laporan-rekapitulasi": "Laporan & Rekapitulasi",
    "/pengaturan": "Pengaturan",
    "/logout": "Logout",
  };

  const pageTitle = titleMap[pathname] || "Selamat Datang";

  const date = new Date().toLocaleDateString();

  const upcomingTrainings = dataPelatihan.filter(
    (item) => item.status === "Akan Datang"
  );
  const notificationCount = upcomingTrainings.length;

  return (
    <div className="mb-6">
      <h2 className="text-sm text-gray-700 mb-2">Hi Fauzan Asrori</h2>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">{pageTitle}</h1>
        <div className="text-gray-800 text-sm flex items-center gap-3">
          <CalendarDays size={18} />
          {date}
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold ml-4 cursor-pointer">
            <Bell size={18} fill="currentColor" />
            <div className="size-4 rounded-full bg-orange-500 absolute -top-1 -right-1 flex items-center justify-center text-[10px]">
              {notificationCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
