import EmployeeDetail from "@/components/employee/EmployeeDetail";
import React from "react";

const EmployeeDetails = () => {
  return (
    <div className="max-w-[1180px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Detail</h1>
      <EmployeeDetail />
    </div>
  );
};

export default EmployeeDetails;
