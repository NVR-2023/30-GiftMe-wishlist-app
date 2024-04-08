// THESE ARE THE ROUTES FOR USERS

import express from "express";
import { UserController } from "./controllers";

const router = express.Router();

// Define routes for users
router.post("/", UserController.createUser);
// Add more routes as needed

export default router;
