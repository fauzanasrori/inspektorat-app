"use client";

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

  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-2xl">{pageTitle}</h1>
      <div className="text-gray-800 text-sm flex items-center gap-3">
        <CalendarDays size={18} />
        {date}
      </div>
    </div>
  );
}
