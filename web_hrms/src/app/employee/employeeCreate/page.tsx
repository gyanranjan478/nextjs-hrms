import React from "react";
import EmployeeForm from "@/components/employee/EmployeeForm";

const CreateEmployee = () => {
  return (
    <div className="max-w-[1180px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Employee</h1>
      <EmployeeForm />
    </div>
  );
};

export default CreateEmployee;
