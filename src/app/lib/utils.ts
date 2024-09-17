import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PrismaClient } from '@prisma/client';



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