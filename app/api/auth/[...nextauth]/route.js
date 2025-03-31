import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions = {  // ✅ Define authOptions
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // activate session if user does not exist
        const {username} = credentials;
        const user = await prisma.user.findUnique({
          where: { username },
        });
        if (!user) {
          return null; // User not found
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)  // ✅ Use authOptions

export { handler as GET, handler as POST }  // ✅ Ensure API supports both GET and POST
