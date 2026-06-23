import { z } from "zod";

export const featureFlagSchema = z.object({
  featureKey: z
    .string()
    .trim()
    .min(3, "Feature key must be at least 3 characters"),

  enabled: z.boolean(),
});
