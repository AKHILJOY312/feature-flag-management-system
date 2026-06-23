import { Request, Response } from "express";

import { AuthService } from "../services/auth.service";
import { asyncHandler } from "../middlewares/asyncHandler";

const authService = new AuthService();

export class AuthController {
  superAdminLogin = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await authService.superAdminLogin(email, password);

    res.status(200).json({
      success: true,
      data: result,
    });
  });

  signup = asyncHandler(async (req: Request, res: Response) => {
    const result = await authService.signup(req.body);

    res.status(201).json({
      success: true,
      data: result,
    });
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await authService.login(email, password);

    res.status(200).json({
      success: true,
      data: result,
    });
  });
}
