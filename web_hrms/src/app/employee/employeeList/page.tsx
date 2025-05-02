import { columns } from "@/lib/employee/columns";
import EmployeeList from "@/components/employee/EmployeeList";
import { fetchEmployees } from "@/app/api/employeeApi";
import { querySchema } from "@/lib/employee/validateQuery";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  const parsed = querySchema.safeParse(searchParams);
  const query = parsed.success ? parsed.data : { page: 1 };
  const pageSize = 10;

  const { data, total, currentPage } = await fetchEmployees({
    ...query,
    pageSize,
  });

  return (
    <EmployeeList
      employeeData={data}
      columns={columns}
      total={total}
      currentPage={currentPage}
      query={query}
    ></EmployeeList>
  );
}
