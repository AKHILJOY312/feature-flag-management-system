import { OrganizationRepository } from "../repositories/organization.repository";
import { AppError } from "../utils/AppError";

export class OrganizationService {
  private organizationRepository = new OrganizationRepository();

  async createOrganization(name: string) {
    const existingOrganization = await this.organizationRepository.findByName(
      name.trim(),
    );

    if (existingOrganization) {
      throw new AppError("Organization already exists", 409);
    }

    return this.organizationRepository.create(name.trim());
  }

  async getOrganizations() {
    return this.organizationRepository.findAll();
  }

  async getOrganizationById(id: string) {
    const organization = await this.organizationRepository.findById(id);

    if (!organization) {
      throw new AppError("Organization not found", 404);
    }

    return organization;
  }
}
