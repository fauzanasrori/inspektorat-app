"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

export default function GrafikPelatihan({ dataPelatihan }) {
  const [timeRange, setTimeRange] = useState("all");

  // Process data for the chart
  const processChartData = () => {
    const statusCounts = {
      Selesai: 0,
      "Sedang Berlangsung": 0,
      "Akan Datang": 0,
    };

    dataPelatihan.forEach((training) => {
      statusCounts[training.status]++;
    });

    return Object.entries(statusCounts).map(([status, count]) => ({
      status,
      jumlah: count,
    }));
  };

  const chartData = processChartData();

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Statistik Pelatihan</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setTimeRange("all")}
            className={`px-3 py-1 rounded-md text-sm ${
              timeRange === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setTimeRange("month")}
            className={`px-3 py-1 rounded-md text-sm ${
              timeRange === "month"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Bulan Ini
          </button>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="status"
              tick={{ fontSize: 12 }}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar dataKey="jumlah" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
