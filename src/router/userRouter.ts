import { UserController } from "../controller/userController";
import express from "express";
const userController = new UserController();
const userRouter = express.Router();

userRouter.post(
  '/create',
  // #swagger.tags = ['User']
  // #swagger.description = 'Endpoint to create a user'
  // #swagger.parameters['email'] = { in: 'formData', type: 'string', required: true }
  // #swagger.parameters['password'] = { in: 'formData', type: 'string', required: true }
  userController.create
);

export default userRouter;
