// addUser.ts

import register from '@/server/api/routers/register';

// Define the RegisterInput type
// @ts-ignore
type RegisterInput = {
  username: string;
  email: string;
  password: string;
};

async function addUser() {
  try {
    // Sample user data
    const userData: RegisterInput = {
      username: 'sampleUser',
      email: 'sample@example.com',
      password: 'password123',
    };

    // Call the register function
    const result = await register(userData);

    console.log('User added successfully:', result.users);
  } catch (error) {
    console.error('Failed to add user:', error);
  }
}

// Call the function to add a user
addUser();
