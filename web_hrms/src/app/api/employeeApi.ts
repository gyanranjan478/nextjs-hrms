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

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/employees";

export const fetchEmployees = async (params: FetchEmployeesParams) => {
  const response = await axios.get<{
    data: IEmployee[];
    total: number;
    currentPage: number;
  }>(`${API_URL}/all`, { params });
  return response.data;
};

export const getEmployee = async (id: number) => {
  const response = await axios.get<IEmployee>(`${API_URL}/${id}`);
  return response.data;
};

export const updateEmployee = async (id: number, data: Partial<IEmployee>) => {
  const response = await axios.put<IEmployee>(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteEmployee = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
