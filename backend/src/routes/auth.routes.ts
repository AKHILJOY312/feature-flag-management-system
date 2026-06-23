import { Router } from "express";

import { AuthController } from "../controllers/auth.controller";
import {
  loginSchema,
  signupSchema,
  superAdminLoginSchema,
} from "@/validations/auth.validation";
import { validate } from "@/middlewares/validate";

const router = Router();

const authController = new AuthController();

router.post(
  "/super-admin/login",
  validate(superAdminLoginSchema),
  authController.superAdminLogin,
);

router.post("/signup", validate(signupSchema), authController.signup);

router.post("/login", validate(loginSchema), authController.login);

export default router;
