import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createUserProfile() {
  try {
    // await prisma.userProfile.deleteMany();

    console.log('Starting user creation process...'); 

    await prisma.userProfile.create({
      data: {
        name: 'John',
        surname: 'Doe',
        avatarImage: 'avatar.jpg', 
        email: 'john_doe@example.com',
        password: '12345678', 
        phone: '+1234567890', 
        birthDate: new Date('1990-01-01'), 
        address: '123 Main St',
        role: 'BASIC', 
      },
    });
    const user = await prisma.userProfile.findUnique({
      where: {
        email: 'john_doe@example.com',
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

