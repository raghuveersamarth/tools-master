import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // Check if user exists
        const user = await prisma.user.findUnique({
          where: { username: username },
        });

        if (!user) {
          // If no user found, create a new one
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = await prisma.user.create({
            data: {
              username: username,
              password: hashedPassword,
            },
          });
          return {
            id: newUser.id,
            username: newUser.username,
            role: newUser.role || 'user' // default role
          };
        } else {
          // If user exists, verify password
          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            throw new Error("Invalid password");
          }
          return {
            id: user.id,
            username: user.username,
            role: user.role || 'user'
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist user data to the token right after signin
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Important for CredentialsProvider
  },
  pages: {
    signIn: '/auth/signin', // Optional: Custom sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };