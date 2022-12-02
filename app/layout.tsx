import DesktopNav from "@/components/common/DesktopNav";
import MobileNav from "@/components/common/MobileNav";
import Providers from "@/components/common/provider";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import "./globals.css";
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
      <body className="mx-auto flex max-w-[1440px] flex-col bg-gray-800 lg:flex-row">
        <Providers session={session}>
          <DesktopNav session={session} />
          <MobileNav session={session} />
          <div className="flex-1 min-h-screen bg-gray-900 ">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
