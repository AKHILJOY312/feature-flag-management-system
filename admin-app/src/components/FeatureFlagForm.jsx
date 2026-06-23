import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import api from "../services/api";

import { featureFlagSchema } from "../schemas/featureFlag.schema";

import Input from "./ui/Input";

export default function FeatureFlagForm({ onCreated }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(featureFlagSchema),

    defaultValues: {
      featureKey: "",
      enabled: true,
    },
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/flags", data);

      toast.success("Feature flag created");

      reset();

      onCreated();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create flag");
    }
  };

  return (
    <div className="card">
      <h2 className="mb-5 text-xl font-bold">Create Feature Flag</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Feature Key"
          placeholder="new-dashboard"
          register={register("featureKey")}
          error={errors.key}
        />

        <label className="flex items-center gap-3">
          <input type="checkbox" {...register("enabled")} />

          <span>Enabled</span>
        </label>

        <button className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Feature"}
        </button>
      </form>
    </div>
  );
}
