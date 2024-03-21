// @ts-nocheck
// addUser.ts
import { PrismaClient } from '@prisma/client'
// import handleRegister from '@/server/api/routers/register';


const prisma = new PrismaClient();

// Define the RegisterInput type
// @ts-ignore
const RegisterInput = {
  username: string,
  email: string,
  password: string,
};

async function addUser() {
  try {
    // Sample user data
    const userData = {
      username: 'sampleUser',
      email: 'sample@example.com',
      password: 'password123',
    };

    // Call the register function
    const result = await handleRegister(userData);

    console.log('User added successfully:', result.newUser);
  } catch (error) {
    console.error('Failed to add user:', error);
  }
}

// Call the function to add a user
addUser();
