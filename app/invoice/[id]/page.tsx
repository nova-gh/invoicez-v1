import { Invoice } from "@prisma/client";
import { prisma } from "@/lib/prismadb";
import { getUser } from "@/lib/session";
import InvoiceDetails from "@/components/invoice/InvoiceDetails";
import InvoiceDetailsHeader from "@/components/invoice/InvoiceDetailsHeader";
import InvoiceDetailsBackButton from "@/components/invoice/InvoiceDetailsBackButton";
import { notFound } from "next/navigation";
type Props = {
  params: { id: string };
};

const fetchInvoiceForUser = async (
  id: Invoice["id"],
  creatorId: Invoice["creatorId"]
) => {
  const res = await prisma.invoice.findFirst({
    where: {
      id,
      creatorId,
    },
  });
  return res;
};
const SingleInvoicePage = async ({ params }: Props) => {
  const user = await getUser();
  const invoice = await fetchInvoiceForUser(params.id, user?.id!);
  if (!invoice) {
    notFound();
  }
  return (
    <main className="page-wrapper">
      <div className={`my-5 flex flex-col space-y-10 `}>
        <InvoiceDetailsBackButton />
        <InvoiceDetailsHeader
          invoice={invoice!}
          status={invoice?.status!}
          id={invoice.id}
          creatorId={user?.id!}
        />
        <InvoiceDetails invoice={invoice!} />
      </div>
    </main>
  );
};

export default SingleInvoicePage;
