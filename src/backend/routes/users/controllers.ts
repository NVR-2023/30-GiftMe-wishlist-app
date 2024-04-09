// THESE ARE THE CONTROLLERS FOR USERS

import { Request, Response } from "express";
import { CreateUser, UserData } from "./models";

export const UserController = {
  createUser: async (req: Request<object, UserData>, res: Response) => {
    try {
      const userData: UserData = req.body;
      const newUser = await CreateUser.createUser(userData);
      console.log("primary address", userData.primaryAddress);
      res.status(201).json(newUser);
    } catch (error: unknown) {
      console.error("Error creating user", error);
      res.status(500).json({
        err: "Failed to create user",
        message: (error as Error).message,
      });
    }
  },
};
