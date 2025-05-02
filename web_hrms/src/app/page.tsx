// import Employees from "./employee/employeeList/page";

// export default function Home() {
//   return (
//     <main>
//       <Employees />
//     </main>
//   );
// }


import EmployeeList from "@/components/employee/EmployeeList";

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  return <EmployeeList initialSearchParams={searchParams} />;
}