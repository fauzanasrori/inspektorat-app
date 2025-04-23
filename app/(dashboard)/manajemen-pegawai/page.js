"use client";

import { employees as data } from "@/constants";
import { useState } from "react";
import EmployeeDrawer from "./components/employee-drawer";
import EmployeeTable from "./components/employee-table";

export default function Page() {
  const [employees, setEmployees] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const handleEditEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  const handleEditClick = (employee) => {
    setEmployeeToEdit(employee);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setEmployeeToEdit(null);
  };

  return (
    <div className="space-y-6">
      <EmployeeTable
        employees={employees}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onDelete={handleDelete}
        onEditClick={handleEditClick}
      />

      <EmployeeDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onAddEmployee={handleAddEmployee}
        onEditEmployee={handleEditEmployee}
        employeeToEdit={employeeToEdit}
      />
    </div>
  );
}
