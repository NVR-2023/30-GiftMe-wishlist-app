import express from "express";
import { UserController } from "../backend/users/controllers";

const router = express.Router();

router.get("/users", UserController.createUser);
// Define other user routes...

export default router;
