import User from "../models/User";

export class UserRepository {
  async create(data: {
    name: string;
    email: string;
    password: string;
    organizationId: string;
  }) {
    return User.create(data);
  }

  async findById(id: string) {
    return User.findById(id).select("-password");
  }

  async findByEmail(email: string) {
    return User.findOne({
      email: email.toLowerCase(),
    });
  }

  async findByOrganization(organizationId: string) {
    return User.find({
      organizationId,
    });
  }

  async delete(id: string) {
    return User.findByIdAndDelete(id);
  }
}
