export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "pegawai", label: "Laporan Pegawai" },
    { id: "pelatihan", label: "Laporan Pelatihan" },
    { id: "kompetensi", label: "Rekap Kompetensi" },
  ];

  return (
    <div className="border-b border-gray-300">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            } text-sm px-4 py-2.5 transition`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
