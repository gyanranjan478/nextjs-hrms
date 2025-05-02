export interface IEmployee {
  id: number;
  name: string;
  email: string;
  department: string;
}

export interface IEmployeePageProps {
  columns: EmployeeColumns;
  employees: IEmployee[];
  total: number;
  page: string;
  limit: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
  filters: {
    name: string;
    department: string;
  };
}

export type EmployeeColumns = {
  id: string;
  name: string;
  department: string;
};

export type EmployeeFilters = {
  name: string;
  department: string;
};
