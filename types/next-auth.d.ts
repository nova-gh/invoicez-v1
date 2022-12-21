import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      country: string | null;
      city: string | null;
      postalCode: string | null;
      streetAddress: string | null;
    } & DefaultSession["user"];
  }
}
