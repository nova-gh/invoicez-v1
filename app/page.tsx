import { unstable_getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import SignOut from "./SignOut";
import { prisma } from "../lib/prismadb";
import InvoiceCard from "./InvoiceCard";

const fetchInvoices = async (id: string) => {
  const res = await prisma.invoice.findMany({ where: { creatorId: id } });
  return res;
};
export default async function Home() {
  const session = await unstable_getServerSession(authOptions);
  const data = await fetchInvoices(session?.user?.id!);

  return (
    <div className="">
      <main className="flex flex-col h-screen p-8">
        <h1 className="text-2xl">{session?.user?.name} Invocies</h1>
        <div className="mt-4 space-y-4">
          {data.map((invoice) => (
            <InvoiceCard invoice={invoice} key={invoice.id} />
          ))}
        </div>
        {!session && <Link href="/auth/signin"> Sign in</Link>}
      </main>
    </div>
  );
}
