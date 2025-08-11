import { UserDTO } from "../model/user.modal";
export declare class UserService {
    createUser(data: UserDTO): Promise<{
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updateAt: Date;
    }>;
    getAllUser(): Promise<{
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updateAt: Date;
    }[]>;
    getUserById(id: string): Promise<{
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updateAt: Date;
    } | null>;
    deleteUser(id: string): Promise<{
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updateAt: Date;
    }>;
    updateUser(id: string, data: UserDTO): Promise<{
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updateAt: Date;
    }>;
}
//# sourceMappingURL=User.d.ts.map