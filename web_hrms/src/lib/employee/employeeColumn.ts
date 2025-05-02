"use client";
import { IEmployee } from "@/types/employee";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IEmployee>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
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
    header: "department",
  },
];
