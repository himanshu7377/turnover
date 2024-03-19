import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkDatabaseConnection() {
  try {
    // Fetch a user from the database (you can replace User with any model you have)
    const user = await prisma.user.findFirst();

    // If the user exists, it means the connection to the database is successful
    if (user) {
      console.log('Connected to the database!');
    } else {
      console.log('No data found in the database.');
    }
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // Make sure to disconnect from the database after checking
    await prisma.$disconnect();
  }
}

// Call the function to check the database connection
checkDatabaseConnection();
