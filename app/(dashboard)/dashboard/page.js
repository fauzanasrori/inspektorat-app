import { ringkasan } from "@/constants";

export default function Page() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="mb-4">Dshboard</h1>
        <ul>
          <li>
            Ringkasan data pegawai (total pegawai, jumlah yang sudah mengikuti
            pelatihan, dsb.)
          </li>
          <li>Grafik/statistik kompetensi dan status pelatihan</li>
          <li>Notifikasi terkait pelatihan terbaru</li>
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-4 gap-4">
          {ringkasan.map((item) => (
            <div
              key={item.label}
              className="px-6 py-4 rounded-xl shadow-md bg-white"
            >
              <p className="text-3xl font-bold mb-2">{item.value}</p>
              <p className="text-sm text-gray-600 capitalize">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}
