import { z } from "zod";

export const createOrganizationSchema = z.object({
  body: z.object({
    name: z.string().trim().min(2).max(100),
  }),
});
