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
        // Fake user for demo purposes
        const user = { id: "1", name: "John Doe", password: "password123" };
        console.log(credentials)
        // Check if the entered username and password match
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user; // ✅ Success: Return user object
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)  // ✅ Use authOptions

export { handler as GET, handler as POST }  // ✅ Ensure API supports both GET and POST
