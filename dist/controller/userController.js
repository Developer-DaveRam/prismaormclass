"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../service/User");
const userService = new User_1.UserService();
class UserController {
    create = async (req, res) => {
        try {
            const create = await userService.createUser(req.body);
            let result = create ? 1 : 0;
            return res.status(200).json({
                status: result,
                message: "The user is created",
                data: create,
                error: [],
            });
        }
        catch (error) {
            return res.status(400).json({
                status: 0,
                message: "The user is not created",
                data: [],
                error: error,
            });
        }
    };
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map