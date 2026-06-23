import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes";
import organizationRoutes from "./routes/organization.routes";
import featureFlagRoutes from "./routes/featureFlag.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/organizations", organizationRoutes);

app.use("/api/flags", featureFlagRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
