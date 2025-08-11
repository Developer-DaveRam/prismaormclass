import { PrismaClient } from "../generated/prisma";
import { UserDTO } from "../model/user.modal";

const prisma = new PrismaClient();
export class UserService {
  async createUser(data: UserDTO) {
    return await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
      },
    });
  }

  async getAllUser() {
    return await prisma.user.findMany();
  }

  async getUserById(id: string) {
    return await prisma.user.findUnique({ where: { id: id } });
  }

  async deleteUser(id: string) {
    return await prisma.user.delete({ where: { id: id } });
  }

  async updateUser(id: string, data: UserDTO) {
    return await prisma.user.update({
      where: { id: id },
      data: {
        email: data.email,
        password: data.password,
      },
    });
  }
}
