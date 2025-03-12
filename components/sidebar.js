"use client";

import { menuItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="px-4 py-6 bg-white border-r border-gray-200">
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px-px)]">
        <div className="space-y-1">
          <span className="text-xs text-gray-500 font-semibold block mb-4">
            Menu
          </span>
          {menuItems.map(({ label, Icon, href }) => {
            const isActive = pathname.startsWith(href);

            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center justify-start font-medium gap-4 w-full rounded-md p-3 text-sm transition-[bos-shadow,_background-color,_color] ${
                  isActive
                    ? "bg-blue-500 text-white shadow"
                    : "hover:bg-gray-200 text-gray-700 shadow-none"
                }`}
              >
                {Icon && (
                  <Icon size={18} className={isActive ? "text-white" : ""} />
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
