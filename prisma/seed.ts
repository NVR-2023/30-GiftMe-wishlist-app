import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createUserProfile() {
  try {
    // await prisma.userProfile.deleteMany();

    const user = console.log("Starting user creation process...");
    await prisma.userProfile.create({
      data: {
        name: "Rui",
        surname: "Silva",
        avatarImage: "avatar.jpg",
        email: "rui@example.com",
        password: "123456",
        birthDate: new Date("1990-01-01"),
        myaddress: "Rua Benjamim Constant 267",
        secondAddress: "Rua Correa Dutra 50",
        isActive: true,
      },
    });
    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUserProfile();
