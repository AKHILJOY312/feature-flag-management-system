import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import api from "../services/api";

import { loginSchema } from "../schemas/login.schema";

import Input from "../components/ui/Input";

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data);

      const { token, user } = response.data.data;

      localStorage.setItem("token", token);

      localStorage.setItem("organizationId", user.organizationId);

      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="card w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="logo-text text-5xl text-brand">FlagFlow</h1>

          <p className="page-subtitle">Organization Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted">Don't have an account?</span>

          <Link to="/signup" className="link-text ml-2 font-semibold">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
