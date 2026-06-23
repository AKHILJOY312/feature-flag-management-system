import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import api from "../services/api";

import { signupSchema } from "../schemas/signup.schema";

import Input from "../components/ui/Input";

export default function SignupPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/signup", data);

      toast.success("Account created successfully");

      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="card w-full max-w-lg">
        <div className="mb-8 text-center">
          <h1 className="logo-text text-5xl text-brand">FlagFlow</h1>

          <p className="page-subtitle">Create Organization Admin Account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Name"
            placeholder="John Doe"
            register={register("name")}
            error={errors.name}
          />

          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            register={register("email")}
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            register={register("password")}
            error={errors.password}
          />

          <Input
            label="Organization ID"
            placeholder="6858fbb7f7c9c0f5f67d7e6f"
            register={register("organizationId")}
            error={errors.organizationId}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted">Already have an account?</span>

          <Link to="/" className="link-text ml-2 font-semibold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
