import { Request, Response } from "express";

import { OrganizationService } from "../services/organization.service";
import { asyncHandler } from "../middlewares/asyncHandler";

const organizationService = new OrganizationService();

export class OrganizationController {
  createOrganization = asyncHandler(async (req: Request, res: Response) => {
    const { name } = req.body;

    const organization = await organizationService.createOrganization(name);

    res.status(201).json({
      success: true,
      data: organization,
    });
  });

  getOrganizations = asyncHandler(async (_req: Request, res: Response) => {
    const organizations = await organizationService.getOrganizations();

    res.status(200).json({
      success: true,
      data: organizations,
    });
  });
}
