import {
  House,
  ClipboardList,
  Users,
  GraduationCap,
  Settings,
  FileText,
} from "lucide-react";

export const menuItems = [
  {
    label: "dashboard",
    href: "/dashboard",
    Icon: House,
  },
  {
    label: "manajemen pegawai",
    href: "/manajemen-pegawai",
    Icon: Users,
  },
  {
    label: "manajemen pelatihan",
    href: "/manajemen-pelatihan",
    Icon: ClipboardList,
  },
  {
    label: "rekomendasi pelatihan",
    href: "/rekomendasi-pelatihan",
    Icon: GraduationCap,
  },
  {
    label: "laporan & rekapitulasi",
    href: "/laporan-rekapitulasi",
    Icon: FileText,
  },
  {
    label: "pengaturan & hak akses",
    href: "/pengaturan",
    Icon: Settings,
  },
];

export const employees = [
  {
    id: 1,
    nama: "Andi Saputra",
    nip: "1987654321",
    jabatan: "Auditor",
    unitKerja: "Inspektorat Wilayah I",
    kompetensi: "Audit Keuangan",
    pelatihanTerakhir: "Pelatihan Audit Investigatif",
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Budi Santoso",
    nip: "1987543210",
    jabatan: "Pengawas",
    unitKerja: "Inspektorat Wilayah II",
    kompetensi: "Manajemen Risiko",
    pelatihanTerakhir: "Pelatihan Manajemen Risiko",
    status: "Aktif",
  },
  {
    id: 3,
    nama: "Citra Dewi",
    nip: "1987432109",
    jabatan: "Analis",
    unitKerja: "Inspektorat Wilayah III",
    kompetensi: "Analisis Data",
    pelatihanTerakhir: "Pelatihan Data Governance",
    status: "Aktif",
  },
  {
    id: 4,
    nama: "Dedi Kurniawan",
    nip: "1987321098",
    jabatan: "Auditor",
    unitKerja: "Inspektorat Wilayah I",
    kompetensi: "Forensik Keuangan",
    pelatihanTerakhir: "Pelatihan Forensik Keuangan",
    status: "Nonaktif",
  },
  {
    id: 5,
    nama: "Eka Putri",
    nip: "1987210987",
    jabatan: "Pengawas",
    unitKerja: "Inspektorat Wilayah II",
    kompetensi: "Kepemimpinan",
    pelatihanTerakhir: "Pelatihan Kepemimpinan ASN",
    status: "Aktif",
  },
];
