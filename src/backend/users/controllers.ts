// THESE ARE THE CONTROLLERS FOR USERS
// @ts-nocheck

import { Request, Response } from "express";
import { CreateUser } from "./models";

export const UserController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const newUser = await CreateUser.createUser(userData);
      console.log("primary address", userData.primaryAddress);
      res.status(201).json(newUser);
    } catch (err: any) {
      console.error("Error creating user", err);
      res.status(500).json({
        err: "Failed to create user",
        message: err.message,
      });
    }
  },
};
