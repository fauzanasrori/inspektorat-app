"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants";
import { House } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="px-4 py-6 bg-white border-r border-gray-200">
      <div className="overflow-y-scroll h-[calc(100vh-32px)]">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <House className="text-white" size={20} />
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-800">
                Inspektorat
              </span>
              <p className="text-xs text-gray-500">Sistem Informasi</p>
            </div>
          </div>
          <span className="text-xs text-gray-500 font-semibold block mb-4 px-2">
            Menu Utama
          </span>
          {menuItems.map(({ label, Icon, href }) => {
            const isActive = pathname.startsWith(href);

            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center justify-start font-medium gap-3 w-full rounded-lg p-3 text-sm ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {Icon && (
                  <Icon
                    size={18}
                    className={`${isActive ? "text-white" : "text-gray-500"}`}
                  />
                )}
                <span className="capitalize">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
