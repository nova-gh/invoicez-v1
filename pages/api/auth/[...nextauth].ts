import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../lib/prismadb";
import type { NextAuthOptions } from "next-auth";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  callbacks: {
    session: async ({ session, token }) => {
      const fetcheUser = await prisma.user.findUnique({
        where: { id: token.sub },
      });
      if (session?.user) {
        session.user = { ...fetcheUser! };
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
