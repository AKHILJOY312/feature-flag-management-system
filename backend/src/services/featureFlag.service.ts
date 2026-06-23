import { FeatureFlagRepository } from "../repositories/featureFlag.repository";
import { AppError } from "../utils/AppError";

export class FeatureFlagService {
  private featureFlagRepository = new FeatureFlagRepository();

  async createFlag(data: {
    featureKey: string;
    enabled: boolean;
    organizationId: string;
  }) {
    const existingFlag = await this.featureFlagRepository.findByFeatureKey(
      data.organizationId,
      data.featureKey,
    );

    if (existingFlag) {
      throw new AppError("Feature flag already exists", 409);
    }

    return this.featureFlagRepository.create({
      featureKey: data.featureKey.trim(),
      enabled: data.enabled,
      organizationId: data.organizationId,
    });
  }

  async getFlags(organizationId: string) {
    return this.featureFlagRepository.findByOrganization(organizationId);
  }

  async updateFlag(
    flagId: string,
    organizationId: string,
    data: {
      featureKey?: string;
      enabled?: boolean;
    },
  ) {
    const flag = await this.featureFlagRepository.findById(flagId);

    if (!flag) {
      throw new AppError("Feature flag not found", 404);
    }

    if (flag.organizationId.toString() !== organizationId) {
      throw new AppError("Access denied", 403);
    }

    return this.featureFlagRepository.update(flagId, data);
  }

  async deleteFlag(flagId: string, organizationId: string) {
    const flag = await this.featureFlagRepository.findById(flagId);

    if (!flag) {
      throw new AppError("Feature flag not found", 404);
    }

    if (flag.organizationId.toString() !== organizationId) {
      throw new AppError("Access denied", 403);
    }

    await this.featureFlagRepository.delete(flagId);

    return {
      message: "Feature flag deleted successfully",
    };
  }

  async checkFeature(organizationId: string, featureKey: string) {
    const feature = await this.featureFlagRepository.findByFeatureKey(
      organizationId,
      featureKey,
    );

    return {
      featureKey,
      enabled: feature?.enabled ?? false,
    };
  }
}
