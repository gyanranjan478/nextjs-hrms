import api from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

/***
Get all employees list from api endpoint
***/
export const GET = async () => {
  try {
    const response = await api.get("/employees");

    if (!response) {
      return NextResponse.json({
        error: "Failed to fetch employees",
        status: 500,
      });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({
      error: `Internal server error: ${error}`,
      status: 500,
    });
  }
};

/***
Add new employees list from api endpoint
***/
export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const response = await api.post("/employees", data);

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      error: `Internal server error: ${error}`,
      status: 500,
    });
  }
};

/***
Update existing employees list from api endpoint
***/
export const PUT = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const { id, ...rest } = data;

    if (!id) {
      return NextResponse.json({
        error: "Employee id is required",
        status: 400,
      });
    }

    const response = await api.put(`/employees/${id}`, rest);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({
      error: `Internal server error: ${error}`,
      status: 500,
    });
  }
};

/***
Delete existing employees list from api endpoint
***/
export const DELETE = async (req: NextRequest) => {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({
        error: "Employee id is required",
        status: 400,
      });
    }

    await api.delete(`/employees/${id}`);
    return NextResponse.json({ message: "Employee deleted successfully" });
  } catch (error) {
    return NextResponse.json({
      error: `Internal server error: ${error}`,
      status: 500,
    });
  }
};
