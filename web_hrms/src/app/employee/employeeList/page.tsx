// import { columns } from "@/lib/employee/columns";
// import EmployeeList from "@/components/employee/EmployeeList";
// import { fetchEmployees } from "@/app/api/employeeApi";
// import { querySchema } from "@/lib/employee/validateQuery";

// export default async function Page({
//   searchParams,
// }: {
//   searchParams: Record<string, string | string[]>;
// }) {
//   const parsed = querySchema.safeParse(searchParams);
//   const query = parsed.success ? parsed.data : { page: 1 };
//   const pageSize = 10;

//   const { current_page, total, data } = await fetchEmployees({
//     ...query,
//     pageSize,
//   });

//   const handleFilterChange = (filter: string) => {
//     console.log("Filter changed" + filter);
//   };

//   return (
//     <EmployeeList
//       employeeData={data}
//       columns={columns}
//       total={total}
//       currentPage={current_page}
//       query={query}
//       onFilterChange={(e) => handleFilterChange(e)}
//     ></EmployeeList>
//   );
// }
import EmployeeTableClient from "@/components/employee/EmployeeTableClient";

export default function Page() {
  return <EmployeeTableClient />;
}