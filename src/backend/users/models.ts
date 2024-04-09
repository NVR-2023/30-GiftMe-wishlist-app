// THESE ARE THE MODELS FOR USERS
// @ts-nocheck

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateUser = {
  createUser: async (userData: any) => {
    try {
      const newUser = await prisma.userProfile.create({
        data: {
          name: userData.name,
          surname: userData.surname,
          avatarImage: userData.avatarImage,
          email: userData.email,
          password: userData.password,
          birthDate: new Date(userData.birthDate),
          primaryAddress: userData.primaryAddress,
          secondaryAddress: userData.secondaryAddress,
        },
      });
      return newUser;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  },
};
