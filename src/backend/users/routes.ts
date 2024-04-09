// THESE ARE THE ROUTES FOR USERS

import { Request, Response, Router } from "express";
import { UserController, UserData } from "./controllers.js";

const router = Router();

// Define routes for users
router.post("/", (req: Request<UserData>, res: Response) => {
  UserController.createUser(req, res);
});
// Add more routes as needed

export default router;
