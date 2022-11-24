type Props = {
  totalInvoice: number;
};
const InvoiceHeader = ({ totalInvoice }: Props) => {
  return (
    <div className="flex items-center ">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white lg:text-3xl">Invoices</h1>
        <p className="flex text-gray-300">
          <span className="hidden mr-1 lg:block">There are </span>
          {totalInvoice} total {totalInvoice > 1 ? "invocies" : "invocie"}.
        </p>
      </div>
      <div className="flex items-center ml-auto space-x-10">
        <button className="flex items-center p-1 space-x-2 text-lg font-semibold text-white">
          Filter
          <span className="hidden ml-1 lg:block"> by status</span>
          <span className="text-brand-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
        <button className="inline-flex items-center px-5 py-3 space-x-2 text-lg font-semibold text-white rounded-full bg-brand-600">
          <span className="p-1 mr-4 bg-white rounded-full text-brand-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
          New <span className="hidden lg:block">Invoice</span>
        </button>
      </div>
    </div>
  );
};

export default InvoiceHeader;
