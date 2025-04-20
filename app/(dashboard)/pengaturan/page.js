"use client";

import { useState } from "react";
import {
  Settings,
  Users,
  Bell,
  Sun,
  Moon,
  Mail,
  Globe,
  Crown,
  User,
  Monitor,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [selectedTheme, setSelectedTheme] = useState("light");

  const tabs = [
    { id: "general", label: "Pengaturan Umum", icon: Settings },
    { id: "users", label: "Manajemen Pengguna", icon: Users },
    { id: "notifications", label: "Notifikasi", icon: Bell },
  ];

  return (
    <div className="min-h-screen p-4">
      <div className="w-full">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <Settings className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-600 text-xl">
              Kelola pengaturan aplikasi Anda
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <nav className="flex space-x-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "bg-blue-50 text-blue-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  } flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-sm`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "general" && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`border-2 rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                    selectedTheme === "light"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setSelectedTheme("light")}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center shadow-sm">
                      <Sun className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Tema Terang</h3>
                      <p className="text-sm text-gray-500">
                        Tampilan terang yang nyaman di siang hari
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`border-2 rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                    selectedTheme === "dark"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setSelectedTheme("dark")}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                      <Moon className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Tema Gelap</h3>
                      <p className="text-sm text-gray-500">
                        Tampilan gelap yang nyaman di malam hari
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-4">
                {[
                  {
                    role: "Admin",
                    description: "Akses penuh ke semua fitur",
                    color: "bg-blue-100",
                    icon: Crown,
                  },
                  {
                    role: "Pegawai",
                    description: "Akses terbatas sesuai peran",
                    color: "bg-green-100",
                    icon: User,
                  },
                  {
                    role: "Supervisor",
                    description: "Akses monitoring dan evaluasi",
                    color: "bg-purple-100",
                    icon: Monitor,
                  },
                ].map((user) => {
                  const Icon = user.icon;
                  return (
                    <div
                      key={user.role}
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`${user.color} w-12 h-12 rounded-lg flex items-center justify-center shadow-sm`}
                        >
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {user.role}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {user.description}
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 hover:shadow-md">
                        Kelola
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Email Notifikasi",
                    description: "Terima notifikasi melalui email",
                    icon: Mail,
                  },
                  {
                    title: "Notifikasi Browser",
                    description: "Terima notifikasi di browser",
                    icon: Globe,
                  },
                ].map((notif) => {
                  const Icon = notif.icon;
                  return (
                    <div
                      key={notif.title}
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {notif.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {notif.description}
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 hover:shadow-sm"></div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
