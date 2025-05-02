
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

//  const { current_page, total, data } = await fetchEmployees({
//    ...query,
//    pageSize,
//  });

//   return (
//     <EmployeeList
//       employeeData={data}
//       columns={columns}
//       total={total}
//       currentPage={current_page}
//       query={query}
//     ></EmployeeList>
//   );
// }

// components/employee/EmployeeListClient.tsx
// components/employee/EmployeeListClient.tsx
"use client"

import { useEffect, useState } from "react"
import { columns } from "@/lib/employee/columns"
import { FetchAllEmployee, fetchEmployees } from "@/app/api/employeeApi"
import { querySchema } from "@/lib/employee/validateQuery"
import EmployeeList from "@/components/employee/EmployeeList"

interface Props {
  initialSearchParams: Record<string, string | string[]>
}

export default function EmployeeListClient({ initialSearchParams }: Props) {
  const parsed = querySchema.safeParse(initialSearchParams)
  const [query, setQuery] = useState(parsed.success ? parsed.data : { page: 1 })
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(query.page || 1)
  const pageSize = 10

  const loadEmployees = async () => {
    const res: FetchAllEmployee = await fetchEmployees({
      ...query,
      pageSize,
    });
    setData(res.data)
    setTotal(res.total)
    setCurrentPage(res.current_page)
  }

  useEffect(() => {
    loadEmployees()
  }, [query])

  const handleQueryChange = (newQuery: typeof query) => {
    setQuery((prev) => ({ ...prev, ...newQuery }))
  }

  const handlePageChange = (page: number) => {
    setQuery((prev) => ({ ...prev, page }))
  }

  const handleDataChange = () => {
    
  };

  return (
    <EmployeeList
      employeeData={data}
      columns={columns}
      total={total}
      currentPage={currentPage}
      query={query}
      onQueryChange={handleQueryChange}
      onPageChange={handlePageChange}
      onDataChange={handleDataChange}
    />
  )
}
