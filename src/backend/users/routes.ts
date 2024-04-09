// THESE ARE THE ROUTES FOR USERS

import { Request, Response, Router } from "express";
import { UserController } from "./controllers.js";
import { UserData } from "./models.js";

const router = Router();

// Define routes for users
router.post("/", (req: Request<UserData>, res: Response<UserData>) => {
  UserController.createUser(req, res);
});
// Add more routes as needed

export default router;
