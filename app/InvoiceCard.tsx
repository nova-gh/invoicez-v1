import { Invoice } from "@prisma/client";
import Link from "next/link";
type Props = {
  invoice: Invoice;
};
const InvoiceCard = ({ invoice }: Props) => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const createdDate = new Date(invoice.createdAt).toLocaleDateString("en-US");
  return (
    <div
      key={invoice.id}
      className="grid grid-cols-2 p-4 text-white bg-gray-700 rounded-lg cursor-pointer place-items-center md:grid-cols-6"
    >
      <strong className="col-span-2">
        <span className="text-brand-extraLight">#</span>
        {invoice.id}
      </strong>
      <p className="font-semibold text-gray-400">Due {createdDate}</p>
      <p className="font-semibold text-gray-400">{invoice.clientName}</p>
      <strong className="order-5">
        {currencyFormatter.format(invoice.total)}
      </strong>
      <div className="flex items-center w-full md:order-5 md:space-x-6">
        <button
          disabled
          className={`mt-4 flex  w-full items-center justify-center space-x-2 rounded-xl p-3 md:mt-0
      ${
        invoice.status
          ? "bg-[#1F2C3F] text-[#46C6AA]"
          : "bg-[#2B2735] text-[#FD8F03]"
      }
      `}
        >
          <span
            className={`mr-2 h-3 w-3 rounded-full ${
              invoice.status ? "bg-[#46C6AA]" : "bg-[#FD8F03]"
            }`}
          ></span>
          {invoice.status ? "Paid" : "Pending"}
        </button>
        <Link href={`/${invoice.id}`}>
          <button className="hidden text-brand md:inline-block">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InvoiceCard;
