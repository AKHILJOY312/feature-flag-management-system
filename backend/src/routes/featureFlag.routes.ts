import { Router } from "express";

import { FeatureFlagController } from "../controllers/featureFlag.controller";

import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";
import {
  checkFeatureSchema,
  createFeatureFlagSchema,
  updateFeatureFlagSchema,
} from "@/validations/featureFlag.validation";
import { validate } from "@/middlewares/validate";

const router = Router();

const featureFlagController = new FeatureFlagController();

router.post(
  "/",
  authenticate,
  authorize("ORG_ADMIN"),
  validate(createFeatureFlagSchema),
  featureFlagController.createFlag,
);

router.get(
  "/",
  authenticate,
  authorize("ORG_ADMIN"),
  featureFlagController.getFlags,
);

router.patch(
  "/:id",
  authenticate,
  authorize("ORG_ADMIN"),
  validate(updateFeatureFlagSchema),
  featureFlagController.updateFlag,
);

router.delete(
  "/:id",
  authenticate,
  authorize("ORG_ADMIN"),
  featureFlagController.deleteFlag,
);

router.post(
  "/check",
  validate(checkFeatureSchema),
  featureFlagController.checkFeature,
);

export default router;
