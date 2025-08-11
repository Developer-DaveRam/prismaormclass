"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class UserService {
    async createUser(data) {
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
    async getUserById(id) {
        return await prisma.user.findUnique({ where: { id: id } });
    }
    async deleteUser(id) {
        return await prisma.user.delete({ where: { id: id } });
    }
    async updateUser(id, data) {
        return await prisma.user.update({
            where: { id: id },
            data: {
                email: data.email,
                password: data.password,
            },
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=User.js.map