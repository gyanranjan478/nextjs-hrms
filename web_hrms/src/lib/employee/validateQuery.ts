import { z } from "zod";

export const querySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  search: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
  department: z.string().optional(),
});

export type QueryParams = z.infer<typeof querySchema>;
