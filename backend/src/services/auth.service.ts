import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { UserRepository } from "../repositories/user.repository";
import { OrganizationRepository } from "../repositories/organization.repository";

import { AppError } from "../utils/AppError";
import { ENV } from "@/config/env";

export class AuthService {
  private userRepository = new UserRepository();

  private organizationRepository = new OrganizationRepository();

  private generateToken(payload: {
    id?: string;
    email: string;
    role: string;
    organizationId?: string;
  }) {
    return jwt.sign(payload, ENV.JWT_SECRET!, {
      expiresIn: "1d",
    });
  }

  async superAdminLogin(email: string, password: string) {
    const adminEmail = ENV.SUPER_ADMIN_EMAIL;

    const adminPassword = ENV.SUPER_ADMIN_PASSWORD;

    if (email !== adminEmail || password !== adminPassword) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = this.generateToken({
      email,
      role: "SUPER_ADMIN",
    });

    return {
      token,
    };
  }

  async signup(data: {
    name: string;
    email: string;
    password: string;
    organizationId: string;
  }) {
    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new AppError("Email already registered", 409);
    }

    const organization = await this.organizationRepository.findById(
      data.organizationId,
    );

    if (!organization) {
      throw new AppError("Organization not found", 404);
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    const token = this.generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
      organizationId: user.organizationId.toString(),
    });

    return {
      user,
      token,
    };
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = this.generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
      organizationId: user.organizationId.toString(),
    });

    return {
      user,
      token,
    };
  }
}
