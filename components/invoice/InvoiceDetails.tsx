import { Invoice } from "@prisma/client";

type Props = {
  invoice: Invoice;
};
const InvoiceDetails = ({ invoice }: Props) => {
  const createdDate = new Date(invoice.createdAt).toLocaleDateString("en-US");
  const paymentDate = new Date(invoice.paymentDue).toLocaleDateString("en-US");
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const amountDue = invoice.items
    .map((items) => items.total)
    .reduce((pv, cv) => pv + cv, 0);

  return (
    <div className="flex flex-col w-full p-8 space-y-10 font-medium bg-gray-800 rounded-lg">
      <div className="flex flex-col w-full space-y-10 md:flex-row md:justify-between md:space-y-0">
        <div className="">
          <strong className="text-white">
            <span className="">#</span>
            {invoice?.id}
          </strong>
          <p className="font-semibold text-gray-300">{invoice?.description}</p>
        </div>
        {/* address */}
        <address className="not-italic font-medium text-white">
          {invoice?.senderAddress?.street}
          <br />
          {invoice?.senderAddress?.city}
          <br />
          {invoice?.senderAddress?.postCode}
          <br />
          {invoice?.senderAddress?.country}
        </address>
      </div>
      {/* Billing & payment  */}
      <div className="grid w-full ml-0 lg:grid-cols-4">
        <div className="flex flex-col justify-between col-span-1">
          <div>
            <p className="text-gray-300">Invoice Date</p>
            <p className="text-lg text-white">{createdDate}</p>
          </div>
          <div>
            <p className="text-gray-300">Payment Due</p>
            <p className="text-lg text-white">{paymentDate}</p>
          </div>
        </div>
        <div className="col-span-1 mx-auto space-y-5">
          <div>
            <p className="text-gray-300">Bill To</p>
            <p className="text-lg text-white">{invoice.clientName}</p>
          </div>
          <address className="not-italic font-medium text-white">
            {invoice?.clientAddress?.street}
            <br />
            {invoice?.clientAddress?.city}
            <br />
            {invoice?.clientAddress?.postCode}
            <br />
            {invoice?.clientAddress?.country}
          </address>
        </div>
        <div className="col-span-2 mx-auto ">
          <p className="text-gray-300 ">Sent to</p>
          <p className="text-lg text-white">{invoice.clientEmail}</p>
        </div>
      </div>
      {/* items tabel */}
      <div className="overflow-hidden bg-gray-700 rounded-lg ">
        <div className="w-full p-8 font-bold text-white table-fixed ">
          {/* {invoice?.items.map((item, i) => (
            ))} */}
        </div>
        <div className="flex items-center justify-between h-20 p-8 py-12 bg-black">
          <p className="text-xl text-gray-300">Amount Due</p>
          <p className="text-3xl text-white">
            {currencyFormatter.format(amountDue)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
