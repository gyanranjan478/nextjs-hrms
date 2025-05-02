"use client";

import { useState, useEffect } from "react";
import { columns } from "@/lib/employee/columns";
import { fetchEmployees } from "@/app/api/employeeApi";
import EmployeeList from "@/components/employee/EmployeeList";
import { IEmployee } from "@/types/employee";

export default function EmployeeTableClient() {
  const [query, setQuery] = useState({
    name: "",
    department: "",
    page: 1,
    limit: 5,
  });

  const [data, setData] = useState<IEmployee[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const loadEmployees = async () => {
    const response = await fetchEmployees({ ...query });

    setData(response.data);
    setTotal(response.total);
    setCurrentPage(response.current_page);
  };

  useEffect(() => {
    loadEmployees();
  }, [query]);

  const handleFilterChange = (newFilter: string) => {
    setQuery({ ...query, name: newFilter, department: newFilter }); // reset to first page
  };

  const handleDeleteRecord = (isDeleted: boolean) => {
    if (isDeleted) {
      console.log("2");
      loadEmployees();
    }
  };

  return (
    <EmployeeList
      employeeData={data}
      columns={columns}
      total={total}
      currentPage={currentPage}
      query={query}
      onFilterChange={handleFilterChange}
      onDeleteRecord={handleDeleteRecord}
    />
  );
}
