import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import Input from "./ui/Input";

import { api } from "../services/api";

import { featureCheckSchema } from "../schemas/featureCheck.schema";
import FeatureResult from "./FeatureResult";

export default function FeatureCheckForm() {
  const [result, setResult] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(featureCheckSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/flags/check", data);

      setResult(response.data.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unable to check feature");
    }
  };

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Organization ID"
            placeholder="6858fbb7..."
            register={register("organizationId")}
            error={errors.organizationId}
          />

          <Input
            label="Feature Key"
            placeholder="new-dashboard"
            register={register("featureKey")}
            error={errors.featureKey}
          />

          <button disabled={isSubmitting} className="btn-primary w-full">
            {isSubmitting ? "Checking..." : "Check Feature"}
          </button>
        </form>
      </div>

      <FeatureResult result={result} />
    </>
  );
}
