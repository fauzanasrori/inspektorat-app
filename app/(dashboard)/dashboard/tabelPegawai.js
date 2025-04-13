import Image from "next/image";
import Link from "next/link";

export default function TabelPegawai({ employees }) {
  const getStatusStyle = (status) => {
    return status === "Aktif"
      ? "bg-green-100 text-green-700 px-2 py-1 rounded-md"
      : "bg-red-100 text-red-700 px-2 py-1 rounded-md";
  };
  return (
    <div className="col-span-2 p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-start justify-between">
        <h1 className="text-xl tracking-tight mb-4">Tabel Pegawai</h1>
        <Link
          href="/manajemen-pegawai"
          className="text-white text-sm font-medium bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-md flex items-center gap-2"
        >
          Halaman Pegawai
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="table-header">Nama Pegawai</th>
            <th className="table-header">NIP</th>
            <th className="table-header">Jabatan</th>
            <th className="table-header">Unit Kerja</th>
            <th className="table-header">Kompetensi</th>
            <th className="table-header">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.slice(0, 4).map((employee, i) => (
            <tr key={employee.nip}>
              <td className="table-item">{employee.nama}</td>
              <td className="table-item">{employee.nip}</td>
              <td className="table-item">{employee.jabatan}</td>
              <td className="table-item">{employee.unitKerja}</td>
              <td className="table-item">{employee.kompetensi}</td>
              <td className="table-item">
                <span className={`${getStatusStyle(employee.status)}`}>
                  {employee.status}
                </span>
              </td>
              <td>
                <button>
                  <Image
                    src="/icons/menu.svg"
                    alt="icon"
                    width={14}
                    height={14}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
