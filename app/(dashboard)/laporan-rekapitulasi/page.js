"use client";

import { employees, dataPelatihan } from "@/constants";
import { useState, useMemo } from "react";
import SearchAndFilter from "./components/search-and-filter";
import ExportButton from "./components/export-button";
import EmployeeReport from "./components/employee-report";
import TrainingReport from "./components/training-report";
import CompetencyReport from "./components/competency-report";
import Tabs from "./components/tabs";
import { exportToCSV } from "@/utils/export-to-csv";

export default function Page() {
  const [activeTab, setActiveTab] = useState("pegawai");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    status: "Semua",
    unitKerja: "Semua",
    kategori: "Semua",
  });

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
