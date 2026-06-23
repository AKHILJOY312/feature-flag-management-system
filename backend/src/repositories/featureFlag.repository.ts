import FeatureFlag from "../models/FeatureFlag";

export class FeatureFlagRepository {
  async create(data: {
    featureKey: string;
    enabled: boolean;
    organizationId: string;
  }) {
    return FeatureFlag.create(data);
  }

  async findById(id: string) {
    return FeatureFlag.findById(id);
  }

  async findByFeatureKey(organizationId: string, featureKey: string) {
    return FeatureFlag.findOne({
      organizationId,
      featureKey,
    });
  }

  async findByOrganization(organizationId: string) {
    return FeatureFlag.find({
      organizationId,
    }).sort({
      createdAt: -1,
    });
  }

  async update(
    id: string,
    data: {
      featureKey?: string;
      enabled?: boolean;
    },
  ) {
    return FeatureFlag.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async delete(id: string) {
    return FeatureFlag.findByIdAndDelete(id);
  }
}
