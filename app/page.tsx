import { unstable_getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Providers from "./provider";
import SignOut from "./SignOut";

export default async function Home() {
  const session = await unstable_getServerSession(authOptions);
  console.log("====================================");
  console.log(session);
  console.log("====================================");
  return (
    <div className="">
      <main className="flex flex-1 flex-col bg-gray-600 text-white">
        <h1 className="">{session?.user?.name}</h1>
        {session ? <SignOut /> : <Link href="/auth/signin"> Sign in</Link>}
      </main>
    </div>
  );
}
