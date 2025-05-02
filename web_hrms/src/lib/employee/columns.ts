"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type EmployeeColumns = {
  id: string;
  name: string;
  email: string;
  department: string;
};

export const columns: ColumnDef<EmployeeColumns>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];
