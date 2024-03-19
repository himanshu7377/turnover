// src/api/trpc/login.ts

import { z } from 'zod';
import { prisma } from 'src/lib/prisma';

export const LoginInput = z.object({
  usernameOrEmail: z.string(),
  password: z.string(),
});

export default async function login(input: z.infer<typeof LoginInput>) {
  // Validate input data
  const { usernameOrEmail, password } = LoginInput.parse(input);

  // Find user by username or email
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { username: usernameOrEmail },
        { email: usernameOrEmail },
      ],
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  // Verify password
  // Implement password verification logic (e.g., using bcrypt)
  const passwordMatch = await verifyPassword(password, user.password);

  if (!passwordMatch) {
    throw new Error('Invalid password');
  }

  // Generate authentication token (e.g., JWT)
  const token = generateToken(user.id);

  return { token };
}

async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  // Implement password verification logic (e.g., using bcrypt)
}

function generateToken(userId: number): string {
  // Implement token generation logic (e.g., using JWT)
}
