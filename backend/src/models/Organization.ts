import { Schema, model, InferSchemaType } from "mongoose";

const organizationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export type OrganizationDocument = InferSchemaType<typeof organizationSchema>;

export default model("Organization", organizationSchema);
