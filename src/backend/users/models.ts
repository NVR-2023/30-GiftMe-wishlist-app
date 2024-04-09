// THESE ARE THE MODELS FOR USERS

import { PrismaClient, UserProfile } from "@prisma/client";

const prisma = new PrismaClient();

interface UserData {
  name: string;
  surname: string;
  avatarImage?: string;
  email: string;
  password: string;
  birthDate: string; // Change to string or appropriate date format
  primaryAddress: string;
  secondaryAddress?: string;
}

export const CreateUser = {
  createUser: async (userData: UserData): Promise<UserProfile> => {
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
