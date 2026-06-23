import { Request, Response } from "express";

import { FeatureFlagService } from "../services/featureFlag.service";
import { asyncHandler } from "../middlewares/asyncHandler";

const featureFlagService = new FeatureFlagService();

export class FeatureFlagController {
  createFlag = asyncHandler(async (req: Request, res: Response) => {
    const { featureKey, enabled } = req.body;

    const result = await featureFlagService.createFlag({
      featureKey,
      enabled,
      organizationId: req.user!.organizationId!,
    });

    res.status(201).json({
      success: true,
      data: result,
    });
  });

  getFlags = asyncHandler(async (req: Request, res: Response) => {
    const result = await featureFlagService.getFlags(req.user!.organizationId!);

    res.status(200).json({
      success: true,
      data: result,
    });
  });

  updateFlag = asyncHandler(async (req: Request, res: Response) => {
    const result = await featureFlagService.updateFlag(
      req.params.id,
      req.user!.organizationId!,
      req.body,
    );

    res.status(200).json({
      success: true,
      data: result,
    });
  });

  deleteFlag = asyncHandler(async (req: Request, res: Response) => {
    const result = await featureFlagService.deleteFlag(
      req.params.id,
      req.user!.organizationId!,
    );

    res.status(200).json({
      success: true,
      data: result,
    });
  });

  checkFeature = asyncHandler(async (req: Request, res: Response) => {
    const { organizationId, featureKey } = req.body;

    const result = await featureFlagService.checkFeature(
      organizationId,
      featureKey,
    );

    res.status(200).json({
      success: true,
      data: result,
    });
  });
}
