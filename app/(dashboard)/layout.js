import Sidebar from "@/components/sidebar";

export default function Page({ children }) {
  return (
    <div className="bg-gray-100 grid grid-cols-[250px_minmax(900px,_1fr)]">
      <Sidebar />
      <div className="min-h-screen p-6">{children}</div>
    </div>
  );
}
