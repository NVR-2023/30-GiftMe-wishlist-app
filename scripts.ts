import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createUserProfile() {
  try {
    // await prisma.userProfile.deleteMany();

    const user =
      console.log('Starting user creation process...');
    await prisma.userProfile.create({
      data: {
        name: 'Jack',
        surname: 'Black',
        avatarImage: 'avatar.jpg', 
        email: 'jack@example.com',
        password: 'hashedPassword123', 
        phone: '+1234567890', 
        birthDate: new Date('1990-01-01'), 
        address: '123 Main St',
        role: 'BASIC', 
      },
    });
    console.log('User created:', user);

  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createUserProfile();
