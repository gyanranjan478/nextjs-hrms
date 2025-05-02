"use client";
import { IEmployee } from "@/types/employee";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { EmployeeColumns } from "@/lib/employee/columns";
import { useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";

interface IEmployeeListProps {
  columns: ColumnDef<EmployeeColumns>[];
  employeeData: IEmployee[];
  total: number;
  currentPage: number;
  query: unknown;
}

const EmployeeList = ({ employeeData, columns }: IEmployeeListProps) => {
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");

  return (
    <div className="w-full">
      <div className="max-w-[1180px] mx-auto py-6 flex items-center justify-between">
        <Input
          placeholder="Filter by name or department..."
          value={globalFilterValue}
          onChange={(e) => setGlobalFilterValue(e.target.value || "")}
          className="max-w-xs"
        />
        <Link href="/employee/employeeCreate">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            aria-label="New employee"
            title="New employee"
          >
            New Employee
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            data={employeeData.map((employee) => ({
              ...employee,
              id: employee.id.toString(),
            }))}
            columns={columns}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeList;
