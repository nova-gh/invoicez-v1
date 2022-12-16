import { prisma } from "@/lib/prismadb";
import { User } from "@prisma/client";
import { getUser } from "@/lib/session";
import InvoiceHeader from "@/components/invoice/invoiceHeader";
import InvoiceCard from "@/components/invoice/InvoiceCard";

const fetchInvoices = async (userId: User["id"]) => {
  const res = await prisma.invoice.findMany({ where: { creatorId: userId } });
  return res;
};
export default async function Home() {
  const user = await getUser();
  const invoices = await fetchInvoices(user?.id!);

  const totalInvoice = invoices.length;

  return (
    <main className="page-wrapper lg:h-screen">
      <InvoiceHeader totalInvoice={totalInvoice} />
      <div className="my-4 space-y-4 ">
        {invoices?.map((invoice) => (
          <InvoiceCard invoice={invoice} key={invoice.id} />
        ))}
      </div>
    </main>
  );
}
