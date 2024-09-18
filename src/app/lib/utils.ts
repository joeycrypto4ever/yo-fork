import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';


const prisma = new PrismaClient()


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function addUser({name, email, message}:{name: string, email: string, message: string}) {
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      message: message,
    },
  })
  console.log(user)
}

export const userSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z.string().email('Invalid email format'),
  message: z.string().min(100, 'Message must be at least 100 characters long'),
});