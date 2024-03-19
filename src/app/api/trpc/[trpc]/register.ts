import { PrismaClient } from '@prisma/client';

import bcrypt from 'bcrypt'
import { z } from 'zod';

const prisma = new PrismaClient();

export const RegisterInput = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export default async function register(input: z.infer<typeof RegisterInput>) {
  // Validate input data
  const { username, email, password } = RegisterInput.parse(input);

  // Hash the password
  const hashedPassword = await hashPassword(password);

  // Create user in the database
  const users = await prisma.user.create({
    data:{
      username,
      email,
      password: hashedPassword,
    }
  })

  return { users };
}

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}
