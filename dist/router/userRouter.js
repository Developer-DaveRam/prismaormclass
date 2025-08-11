"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controller/userController");
const express_1 = __importDefault(require("express"));
const userController = new userController_1.UserController();
const userRouter = express_1.default.Router();
userRouter.post('/create', 
// #swagger.tags = ['User']
// #swagger.description = 'Endpoint to create a user'
// #swagger.parameters['email'] = { in: 'formData', type: 'string', required: true }
// #swagger.parameters['password'] = { in: 'formData', type: 'string', required: true }
userController.create);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map