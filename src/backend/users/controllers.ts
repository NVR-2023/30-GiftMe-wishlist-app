// THESE ARE THE CONTROLLERS FOR USERS

import { Request, Response } from "express";
import { CreateUser } from "./models";

export interface UserData {
  name: string;
  surname: string;
  avatarImage?: string;
  email: string;
  password: string;
  birthDate: string; // Change to appropriate date format
  primaryAddress: string;
  secondaryAddress?: string;
}

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
