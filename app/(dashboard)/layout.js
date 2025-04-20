import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topBar";

export default function Page({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-[250px_minmax(900px,_1fr)]">
        <Sidebar />
        <div className="h-screen overflow-hidden flex flex-col">
          <TopBar />
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
