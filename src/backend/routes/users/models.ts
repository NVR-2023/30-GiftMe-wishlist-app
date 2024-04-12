// THESE ARE THE MODELS FOR USERS

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface UserData {
  name: string;
  surname: string;
  avatarImage?: string;
  birthDate: Date;
  primaryAddress: string;
  secondaryAddress?: string;
}

export const CreateUser = {
  createUser: async (userData: UserData) => {
    try {
      const newUser = await prisma.userProfile.create({
        data: {
          name: userData.name,
          surname: userData.surname,
          avatarImage: userData.avatarImage,
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
