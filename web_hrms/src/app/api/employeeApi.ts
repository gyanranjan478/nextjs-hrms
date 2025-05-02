// lib/api.ts
import axios from "axios";
import { IEmployee } from "@/types/employee";

export interface EmployeeGetParam {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  filterByRole?: string;
}

export interface EmployeeAddParam {
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

export interface EmployeeResponseGetAll {
  current_page: number;
  total: number;
  data: IEmployee[];
}

export interface EmployeeResponseAdd {
  success: boolean;
  message: string;
  data: IEmployee;
}


const API_URL = process.env.NEXT_PUBLIC_API_URL + "/employees";

export const fetchEmployees = async (params: EmployeeGetParam) => {
  const response = await axios.get<EmployeeResponseGetAll>(`${API_URL}/all`, {
    params,
  });
  return response.data;
};

export const addEmployee = async (data: IEmployee) => {
  const response = await axios.post<EmployeeResponseAdd>(
    `${API_URL}/add`,
    data
  );
  return response.data;
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
