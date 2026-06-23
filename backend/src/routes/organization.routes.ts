import { Router } from "express";

import { OrganizationController } from "../controllers/organization.controller";

import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";
import { createOrganizationSchema } from "@/validations/organization.validation";
import { validate } from "@/middlewares/validate";

const router = Router();

const organizationController = new OrganizationController();

router.post(
  "/",
  authenticate,
  authorize("SUPER_ADMIN"),
  validate(createOrganizationSchema),
  organizationController.createOrganization,
);

router.get(
  "/",
  authenticate,
  authorize("SUPER_ADMIN"),
  organizationController.getOrganizations,
);

export default router;
