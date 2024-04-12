// THESE ARE THE MODELS FOR USERS

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface UserData {
  name: string;
  surname: string;
  avatarImage?: string;
  birthDate: string;
}

export const CreateUser = {
  createUser: async (userData: UserData) => {
    try {
      const newUser = await prisma.userProfile.create({
        data: {
          name: userData.name,
          surname: userData.surname,
          avatarImage: userData.avatarImage,
          birthDate: userData.birthDate,
          secondaryAddress: userData.secondaryAddress,
        },
      });
      return newUser;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  },
};
