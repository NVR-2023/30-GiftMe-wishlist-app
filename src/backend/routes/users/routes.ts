// THESE ARE THE ROUTES FOR USERS
import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// GET route to fetch all user profiles
router.get("/users", async (req, res) => {
  const users = await prisma.userProfile.findMany();
  res.json(users);
});

// Function to create a new user
router.post("/users", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await createUser(userData);

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user", err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

const createUser = async (userData: any) => {
  try {
    const newUser = await prisma.userProfile.create({
      data: {
        name: userData.name,
        surname: userData.surname,
        avatarImage: userData.avatarImage,
        email: userData.email,
        password: userData.password,
        birthDate: userData.birthdate,
        primaryAddress: userData.primaryAddress,
        secondaryAddress: userData.secondaryAddress,
      },
    });
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};

export default router;
