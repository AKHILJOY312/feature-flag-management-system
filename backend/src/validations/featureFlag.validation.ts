import { z } from "zod";

export const createFeatureFlagSchema = z.object({
  body: z.object({
    featureKey: z.string().trim().min(2).max(100),

    enabled: z.boolean(),
  }),
});

export const updateFeatureFlagSchema = z.object({
  body: z.object({
    featureKey: z.string().trim().min(2).max(100).optional(),

    enabled: z.boolean().optional(),
  }),
});

export const checkFeatureSchema = z.object({
  body: z.object({
    organizationId: z.string(),

    featureKey: z.string().trim().min(2),
  }),
});
