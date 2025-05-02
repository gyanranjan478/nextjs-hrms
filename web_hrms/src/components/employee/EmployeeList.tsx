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
import { useRouter } from "next/navigation";
import { useAlertDialogStore } from "@/lib/confirmDialogStore";
import { deleteEmployee, EmployeeResponseDelete } from "@/app/api/employeeApi";

// interface IEmployeeListProps {
//   columns: ColumnDef<EmployeeColumns>[];
//   employeeData: IEmployee[];
//   total: number;
//   currentPage: number;
//   query: unknown;
// }

// const EmployeeList = ({ employeeData, columns }: IEmployeeListProps) => {
//   const router = useRouter();
//   const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
//   const openDialog = useAlertDialogStore((state) => state.openDialog);

//   const handleRedirectToEdit = (id: string) => {
//     router.push(`/employee/employeeDetails?id=${id}`);
//   };

//   const handleDelete = async (id: string) => {
//     debugger
//      console.log(id);
//       const response: EmployeeResponseDelete = await deleteEmployee(id);
//       if(response.success){
//         console.log(` SuccessFully Delete`);
//          console.log(response);
//       }
     

//     openDialog("Do you really want to delete this item?", async () => {
//       console.log("Confirmed deletion!");
//       const response = await deleteEmployee(id);
//       console.log(response);
//     });
//   };

//   return (
//     <div className="w-full">
//       <div className="max-w-[1180px] mx-auto py-6 flex items-center justify-between">
//         <Input
//           placeholder="Filter by name or department..."
//           value={globalFilterValue}
//           onChange={(e) => setGlobalFilterValue(e.target.value || "")}
//           className="max-w-xs"
//         />
//         <Link href="/employee/employeeCreate">
//           <Button
//             className="bg-blue-600 hover:bg-blue-700 text-white"
//             aria-label="New employee"
//             title="New employee"
//           >
//             New Employee
//           </Button>
//         </Link>
//       </div>
//       <Card>
//         <CardHeader>
//           <CardTitle>Employees</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <DataTable
//             data={employeeData.map((employee) => ({
//               ...employee,
//               id: employee.id!.toString(),
//             }))}
//             columns={columns}
//             onEdit={(row) => handleRedirectToEdit(row.id)}
//             onDelete={(row) => handleDelete(row.id)}
//             onDetails={(row) => console.log("Details:", row)}
//           />
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default EmployeeList;
// components/employee/EmployeeListClient.tsx

// components/employee/EmployeeList.tsx

interface Props {
  employeeData: IEmployee[];
  columns: ColumnDef<EmployeeColumns>[];
  total: number;
  currentPage: number;
  query: Record<string, string>;
  onQueryChange: (newQuery: Record<string, string>) => void;
  onPageChange: (page: number) => void;
  onDataChange:() => void;
}

export default function EmployeeList({
  employeeData,
  columns,
  total,
  currentPage,
  query,
  onQueryChange,
  onPageChange,
  onDataChange,
}: Props) {
  // Example usage:
  // onQueryChange?.({ search: "new name" })
  // onPageChange?.(2)

  const router = useRouter();
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
  const openDialog = useAlertDialogStore((state) => state.openDialog);

  const handleRedirectToEdit = (id: string) => {
    router.push(`/employee/employeeDetails?id=${id}`);
  };

  const handleDelete = async (id: string) => {
    debugger;
    console.log(id);
    const response: EmployeeResponseDelete = await deleteEmployee(id);
    if (response.success) {
      console.log(` SuccessFully Delete`);
      console.log(response);
      onDataChange();
    }

    openDialog("Do you really want to delete this item?", async () => {
      console.log("Confirmed deletion!");
      const response = await deleteEmployee(id);
      console.log(response);
    });
  };

  function handleFilterChange(): void {
    throw new Error("Function not implemented.");
  }

  function handlePageChange(): void {
   onPageChange();
  }

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
              id: employee.id!.toString(),
            }))}
            columns={columns}
            onEdit={(row) => handleRedirectToEdit(row.id)}
            onDelete={(row) => handleDelete(row.id)}
            onDetails={(row) => console.log("Details:", row)}
            onFilterChage={() => handleFilterChange()}
            onPageChange={() => handlePageChange}
          />
        </CardContent>
      </Card>
    </div>
  );
}
