import { Schema, model, InferSchemaType } from "mongoose";

const featureFlagSchema = new Schema(
  {
    featureKey: {
      type: String,
      required: true,
      trim: true,
    },

    enabled: {
      type: Boolean,
      default: false,
    },

    organizationId: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * Prevent duplicate feature keys
 * within the same organization.
 */
featureFlagSchema.index(
  {
    featureKey: 1,
    organizationId: 1,
  },
  {
    unique: true,
  },
);

export type FeatureFlagDocument = InferSchemaType<typeof featureFlagSchema>;

export default model("FeatureFlag", featureFlagSchema);
