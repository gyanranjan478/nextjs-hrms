"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "First name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  department: z.enum(["IT", "Sales", "HR"], {
    errorMap: () => ({ message: "Position is required." }),
  }),
});

const EmployeeForm = () => {
  // Create a form instance from shadcn componennt function
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      department: "IT",
    },
  });

  // Handle submit event of the form
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="w-full py-6">
      <div className="max-w-[580px] space-y-8 mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mb-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-3">
                      <FormLabel className="pb-1 text-base">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-3">
                      <FormLabel className="pb-1 text-base">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-3">
                      <FormLabel className="pb-1 text-base">
                        Department
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="department" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-between">
              <Button
                aria-label="Submit"
                title="Submit"
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit
              </Button>

              <Link href="/">
                <Button aria-label="Back" title="Back" type="button">
                  <ArrowLeft className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EmployeeForm;
