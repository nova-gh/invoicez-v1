import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import DesktopNav from "./DesktopNav";
import "./globals.css";
import MobileNav from "./MobileNav";
import Providers from "./provider";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession(authOptions);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=" mx-auto flex h-screen max-w-[1440px] flex-col bg-gray-800 lg:flex-row">
        <Providers session={session}>
          <DesktopNav session={session} />
          <MobileNav session={session} />
          <div className="flex-1 bg-white">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
