import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createUserProfile() {
  try {
    // await prisma.userProfile.deleteMany();

    const user =
      console.log('Starting user creation process...');
    await prisma.userProfile.create({
      data: {
        name: 'Rui',
        surname: 'Silva',
        avatarImage: 'avatar.jpg', 
        email: 'rui@example.com',
        password: '123456', 
        phone: '+1234567890', 
        birthDate: new Date('1990-01-01'), 
        address: '123 Main St',
        role: 'ADMIN', 
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
