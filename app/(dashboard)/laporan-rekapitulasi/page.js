"use client";

import { employees, dataPelatihan } from "@/constants";
import { useState, useMemo } from "react";
import SearchAndFilter from "./components/SearchAndFilter";
import ExportButton from "./components/ExportButton";
import EmployeeReport from "./components/EmployeeReport";
import TrainingReport from "./components/TrainingReport";
import CompetencyReport from "./components/CompetencyReport";
import Tabs from "./components/Tabs";

export default function Page() {
  const [activeTab, setActiveTab] = useState("pegawai");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    status: "Semua",
    unitKerja: "Semua",
    kategori: "Semua",
  });

  // Function to export data to CSV
  const exportToCSV = (data, filename) => {
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(","),
      ...data.map((row) => headers.map((header) => row[header]).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Group employees by competency
  const competencyGroups = employees.reduce((acc, employee) => {
    if (!acc[employee.kompetensi]) {
      acc[employee.kompetensi] = [];
    }
    acc[employee.kompetensi].push(employee);
    return acc;
  }, {});

  // Get unique values for filters
  const uniqueUnitKerja = useMemo(() => {
    const units = new Set(employees.map((emp) => emp.unitKerja));
    return Array.from(units);
  }, []);

  const uniqueKategori = useMemo(() => {
    const categories = new Set(dataPelatihan.map((pel) => pel.kategori));
    return Array.from(categories);
  }, []);

  // Filtered data
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        `${employee.nama} ${employee.nip} ${employee.jabatan} ${employee.unitKerja} ${employee.kompetensi}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        filters.status === "Semua" || employee.status === filters.status;
      const matchesUnit =
        filters.unitKerja === "Semua" ||
        employee.unitKerja === filters.unitKerja;

      return matchesSearch && matchesStatus && matchesUnit;
    });
  }, [searchTerm, filters]);

  const filteredTrainings = useMemo(() => {
    return dataPelatihan.filter((training) => {
      const matchesSearch =
        `${training.nama} ${training.kategori} ${training.lokasi}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesKategori =
        filters.kategori === "Semua" || training.kategori === filters.kategori;

      return matchesSearch && matchesKategori;
    });
  }, [searchTerm, filters]);

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          setFilters={setFilters}
          activeTab={activeTab}
          uniqueUnitKerja={uniqueUnitKerja}
          uniqueKategori={uniqueKategori}
        />
        <ExportButton
          activeTab={activeTab}
          filteredEmployees={filteredEmployees}
          filteredTrainings={filteredTrainings}
          competencyGroups={competencyGroups}
          exportToCSV={exportToCSV}
        />
      </div>

      {/* Content */}
      {activeTab === "pegawai" && (
        <EmployeeReport filteredEmployees={filteredEmployees} />
      )}

      {activeTab === "pelatihan" && (
        <TrainingReport filteredTrainings={filteredTrainings} />
      )}

      {activeTab === "kompetensi" && (
        <CompetencyReport competencyGroups={competencyGroups} />
      )}
    </div>
  );
}
