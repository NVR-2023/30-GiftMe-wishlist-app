import express from 'express'; 
import { PrismaClient } from '@prisma/client';

const router = express.Router(); 

const prisma = new PrismaClient(); 

// GET route to fetch all user profiles
router.get('/', async (req, res) => {
  const users = await prisma.userProfile.findMany();
  res.json(users);
}); 

// Function to create a new user
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
        myaddress: userData.myAddress, 
        secondAddress: userData.secondAddress, 
        createdAt: new Date(), // Automatically set the createdAt field to the current date and time
        isActive: true, // Assuming new users are active by default
      },
    });
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};

export default router; 