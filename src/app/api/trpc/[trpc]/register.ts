// src/app/api/register.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });


  }

  const { username, email, password } = req.body;
  try {
    const response = await fetch("api/trpc/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(username,email,password),
    });
    if (response.ok) {
      console.log("User registered successfully!");
      // Redirect to a success page or perform any other action
      // Redirect(Verify)
      // router.push("/verify");
      
    } else {
      console.error("Failed to register user:", await response.text());
    }
  } catch (error) {
    console.error("Error registering user:", error);
  }

 

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Adjust the salt rounds as needed

    // Create user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
