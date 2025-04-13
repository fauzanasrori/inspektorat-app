import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mt-16 max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-xl">
        <h1 className="mb-4 text-2xl">Halaman Utama</h1>
        <Link href="/dashboard" className="text-sm text-blue-700 underline">
          masuk ke dashboard
        </Link>
      </div>
    </div>
  );
}
