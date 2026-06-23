import { z } from "zod";

export const featureCheckSchema = z.object({
  organizationId: z.string().min(1, "Organization ID is required"),

  featureKey: z.string().trim().min(3, "Feature key is required"),
});
