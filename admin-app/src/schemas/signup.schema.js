import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().trim().min(2, "Name must contain at least 2 characters"),

  email: z.email("Please enter a valid email"),

  password: z.string().min(6, "Password must be at least 6 characters"),

  organizationId: z.string().min(1, "Organization ID is required"),
});
