import Organization from "../models/Organization";

export class OrganizationRepository {
  async create(name: string) {
    return Organization.create({
      name,
    });
  }

  async findAll() {
    return Organization.find().sort({
      createdAt: -1,
    });
  }

  async findById(id: string) {
    return Organization.findById(id);
  }

  async findByName(name: string) {
    return Organization.findOne({
      name,
    });
  }

  async update(id: string, name: string) {
    return Organization.findByIdAndUpdate(
      id,
      { name },
      {
        new: true,
      },
    );
  }

  async delete(id: string) {
    return Organization.findByIdAndDelete(id);
  }
}
