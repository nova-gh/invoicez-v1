import NewInvoiceButton from "./NewInvoiceButton";

type Props = {
  totalInvoice: number;
};
const InvoiceHeader = ({ totalInvoice }: Props) => {
  return (
    <div className="flex items-center ">
      <div className="space-y-1">
        <h1 className="page-heading">Invoices</h1>
        <p className="flex text-gray-300">
          <span className="hidden mr-1 lg:block">There are </span>
          {totalInvoice} total {totalInvoice > 1 ? "invocies" : "invoice"}.
        </p>
      </div>
      <div className="flex items-center ml-auto space-x-4 md:space-x-10">
        <NewInvoiceButton />
      </div>
    </div>
  );
};

export default InvoiceHeader;
