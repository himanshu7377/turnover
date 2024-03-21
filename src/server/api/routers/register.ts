// server/api/routers/register.ts

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// Define input schema using Zod
export const RegisterInput = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(3), // Adjust the minimum password length as needed
});

// Define the register procedure resolver
export const handleRegister = async ({ input }: { input: z.infer<typeof RegisterInput> }) => {
  // Validate input data
  const { username, email, password } = input;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10); // Adjust the salt rounds as needed

  // Create user in the database
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      categories: []
    },
  });

  console.log(newUser);
  return newUser; // Return the created user object
};

// Create the register router
export const registerRouter = createTRPCRouter({
  register: publicProcedure.input(RegisterInput).mutation(handleRegister),
});

export default handleRegister;
