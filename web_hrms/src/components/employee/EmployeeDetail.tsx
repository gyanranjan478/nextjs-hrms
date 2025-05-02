"use client";
import {z} from "zod";
import {Input} from "@/components/ui/input";
import { zodResolver} from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {useForm} from "react-hook-form";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {ArrowLeft,PencilLine} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const formSchema = z.object({
    name:z.string().min(3, {message:"Name must be at least 2 characters."}),
    email:z.string().email({message:"Email is required."}),
    department:z.enum(["IT", "Sales", "HR"], { errorMap: () => ({message: "Please select a department"})})
});

const EmployeeDetail = () =>{
    const [employee,setEmployee] = useState({
        name:"Alice",
        email:"black@example.com",
        department:"HR"
    });
    const [isEditing, setIsEditing] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:"",
            email:"",
            department:"HR",
        }
    });
    useEffect(() =>{
        const storedData = localStorage.getItem("selectedEmployee");
        if(storedData) {
            setEmployee(JSON.parse(storedData))
        }
    },[]);

    const handleUpdate = () => {
        console.log("Updated Employee", employee);
        setIsEditing(false)
    }
    return (
      <div className="w-full py-6">
        <div className="max-w-lg h-auto rounded-sm mx-auto bg-white shadow p-4">
          <Form {...form}>
            <form className="space-y-8">
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={() => (
                    <FormItem>
                      <div className="mb-3">
                        <FormLabel className="text-base pb-1">Name</FormLabel>
                        <FormControl>
                          <Input
                            value={employee.name}
                            onChange={(e) =>
                              setEmployee({ ...employee, name: e.target.value })
                            }
                            disabled={!isEditing}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={() => (
                    <FormItem>
                      <div className="mb-3">
                        <FormLabel className="text-base pb-1">Email</FormLabel>
                        <FormControl>
                          <Input
                            value={employee.email}
                            onChange={(e) =>
                              setEmployee({
                                ...employee,
                                email: e.target.value,
                              })
                            }
                            disabled={!isEditing}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="department"
                  render={() => (
                    <FormItem>
                      <div className="mb-3">
                        <FormLabel className="text-base pb-1">
                          Department
                        </FormLabel>
                        <FormControl>
                          <Input
                            value={employee.department}
                            onChange={(e) =>
                              setEmployee({
                                ...employee,
                                department: e.target.value,
                              })
                            }
                            disabled={!isEditing}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {!isEditing ? (
                <div className="flex gap-2 items-center">
                  <Button
                    aria-label="Edit employee"
                    title="Edit employee"
                    type="button"
                    className="w-fit bg-black text-white"
                    onClick={() => setIsEditing(true)}
                  >
                    <PencilLine className="h-3 w-3" />
                  </Button>
                  <Link href="/">
                    <Button aria-label="Back" title="Back" type="button">
                      <ArrowLeft className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Button
                    aria-label="Update employee"
                    title="Update employee"
                    type="button"
                    className="w-fit bg-green-500 text-white"
                    onClick={handleUpdate}
                  >
                    Update
                  </Button>

                  <Link href="/">
                    <Button aria-label="Back" title="Back" type="button">
                      <ArrowLeft className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    );

}

export default EmployeeDetail;