import { z } from "zod";

export const superAdminLoginSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(6),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(6),
  }),
});

export const signupSchema = z.object({
  body: z.object({
    name: z.string().trim().min(2).max(50),

    email: z.email(),

    password: z.string().min(6).max(50),

    organizationId: z.string(),
  }),
});
