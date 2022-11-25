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
  const createdDate = new Date(invoice.paymentDue).toLocaleDateString("en-US");
  return (
    <div>
      <div
        key={invoice.id}
        className="grid grid-cols-2 p-4 py-6 space-y-4 text-white bg-gray-800 rounded-lg place-items-center lg:grid-cols-7 lg:place-items-start lg:items-center lg:justify-items-center lg:space-y-0 lg:px-10"
      >
        <strong className="col-span-2">
          <span>#</span>
          {invoice.id}
        </strong>
        <p className="font-semibold text-gray-300 lg:px-4 xl:px-0">
          Due {createdDate}
        </p>
        <p className="font-semibold text-gray-300 ">{invoice.clientName}</p>
        <strong className="">{currencyFormatter.format(invoice.total)}</strong>
        <div className="flex items-center justify-center w-full md:order-5 md:justify-evenly lg:col-span-2">
          <button
            disabled
            className={`flex w-32 items-center justify-center space-x-2 rounded-xl p-3 font-medium
            ${
              invoice.status
                ? "bg-green-100/90 text-green-600"
                : "bg-orange-100/90 text-orange-600"
            }
            `}
          >
            <span
              className={`mr-2 h-3 w-3 rounded-full ${
                invoice.status ? "bg-green-600" : "bg-orange-600"
              }`}
            ></span>
            {invoice.status ? "Paid" : "Pending"}
          </button>
          <Link
            href={`/invoice/${invoice.id}`}
            aria-label="Go to invoice details"
          >
            <button className="hidden p-2 duration-75 ease-in-out rounded-full text-brand text-brand-100 hover:bg-brand-600 hover:text-white md:inline-block">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 "
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
        <div className="col-span-2 mx-auto !mt-6 md:hidden">
          <Link
            href={`/invoice/${invoice.id}`}
            aria-label="Go to invoice details"
            className="px-4 py-3 text-white duration-75 ease-in-out rounded-full bg-brand-600 hover:bg-brand-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
