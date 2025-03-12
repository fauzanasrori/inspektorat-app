import { dataPelatihan } from "@/constants";

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="border-b border-gray-300"></div>
      <div className="grid grid-cols-3 gap-4">
        {dataPelatihan.map((pelatihan) => (
          <div
            key={pelatihan.id}
            className="p-6 rounded-xl shadow-md bg-white flex flex-col justify-between gap-4"
          >
            <div>
              <h2 className="text-xl font-medium">{pelatihan.nama}</h2>
              <p className="text-gray-700 text-sm">
                Selama: {pelatihan.durasi}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 border-b border-gray-300 pb-2">
              <span className="text-sm text-gray-500">{pelatihan.tanggal}</span>
              <span className="text-sm text-gray-500">{pelatihan.lokasi}</span>
            </div>
            <p className="text-gray-700 text-sm">
              Status:{" "}
              <span className={`${getStatusStyle(pelatihan.status)}`}>
                {pelatihan.status}
              </span>
            </p>
            <button className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-md w-full">
              Detail Pelatihan
            </button>
          </div>
        ))}
      </div>
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

const getStatusStyle = (status) => {
  switch (status) {
    case "Selesai":
      return "text-green-500";
    case "Sedang Berlangsung":
      return "text-blue-500";
    case "Akan Datang":
      return "text-yellow-500";
    default:
      return "text-gray-500";
  }
};
