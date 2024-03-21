import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker' 

const prisma = new PrismaClient();

async function seedCategories() {
  try {
    for (let i = 0; i < 100; i++) {
      await prisma.category.create({
        data: {
          name: faker.commerce.department(),
          
        },
      });
    }
    console.log('Categories seeded successfully!');
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedCategories();
