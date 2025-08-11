import { RequestHandler } from "express";
import { UserService } from "../service/User";

const userService = new UserService();

export class UserController {
  create: RequestHandler = async (req, res) => {
    try {
      const create = await userService.createUser(req.body);
      let result = create ? 1 : 0;
      return res.status(200).json({
        status: result,
        message: "The user is created",
        data: create,
        error: [],
      });
    } catch (error) {
      return res.status(400).json({
        status: 0,
        message: "The user is not created",
        data: [],
        error: error,
      });
    }
  };
}
