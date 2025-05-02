// lib/api.ts
import axios from "axios";
import { IEmployee } from "@/types/employee";

export interface FetchEmployeesParams {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  filterByRole?: string;
}
export interface AddEmployeesParams {
  name: string;
  email: string;
  department: string;
}

export interface EmployeeResponseById {
  data: IEmployee;
  success: boolean;
  message: string;
}
export interface EmployeeResponseDelete {
  success: boolean;
  message: string;
}
export interface FetchAllEmployee {
  current_page: number;
  total: number;
  data: IEmployee[];
}
const API_URL = process.env.NEXT_PUBLIC_API_URL + "/employees";

export const fetchEmployees = async (params: FetchEmployeesParams) => {
  const response = await axios.get<FetchAllEmployee>(`${API_URL}/all`, {
    params,
  });
  return response.data;
};

export const addEmployee = async (data: IEmployee) => {
  // const response = await apiCall.post<IEmployee>(`${API_URL}/add`, data);
  // return response.data;

  axios
    .post(`${API_URL}/add`, data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => console.error(error));
};

export const getEmployee = async (id: string) => {
  const response = await axios.get<EmployeeResponseById>(
    `${API_URL}/find/${id}`
  );
  return response.data;
};

export const updateEmployee = async (id: string, data: Partial<IEmployee>) => {
  const response = await axios.put<IEmployee>(`${API_URL}/update/${id}`, data);
  return response.data;
};

export const deleteEmployee = async (id: string) => {
  const response = await axios.delete<EmployeeResponseDelete>(
    `${API_URL}/delete/${id}`
  );
  return response.data;
};
