import { InvoicePlus } from "types/typing";

type Props = {
  invoice: InvoicePlus;
};
const InvoiceDetails = ({ invoice }: Props) => {
  const createdDate = new Date(invoice.createdAt).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
  const paymentDate = new Date(invoice.paymentDue).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
        <div className="col-span-2 pt-10 lg:mx-auto lg:pt-0 ">
          <p className="text-gray-300 ">Sent to</p>
          <p className="text-lg text-white">{invoice.clientEmail}</p>
        </div>
      </div>
      {/* items tabel */}
      <div className="overflow-hidden bg-gray-700 rounded-lg ">
        <div className="w-full p-8 space-y-4 text-white">
          <div className="hidden mb-4 text-lg text-gray-300 capitalize md:grid md:grid-cols-4 lg:text-xl">
            <p className="">{"name"}</p>
            <p className="place-self-center">{"qty."}</p>
            <p className="place-self-end">{"price"}</p>
            <p className="place-self-end">{"total"}</p>
          </div>
          {invoice?.items.map((item, i) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-white md:grid md:grid-cols-4 lg:text-lg "
            >
              <div className="text-base md:hidden">
                <p className="text-lg font-bold text-gray-300">{item.name}</p>
                <p className="">
                  {item.quantity} x{" "}
                  {currencyFormatter.format(Number(item.price))}
                </p>
              </div>
              <p className="hidden md:inline">{item.name}</p>
              <p className="hidden place-self-center md:inline">
                {item.quantity}
              </p>
              <p className="hidden place-self-end md:inline">
                {currencyFormatter.format(Number(item.price))}
              </p>
              <p className="text-lg font-bold md:inline md:place-self-end md:text-base lg:text-lg">
                {currencyFormatter.format(Number(item.total))}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between h-20 p-8 py-12 space-x-3 bg-black sm:space-x-0">
          <p className="text-lg text-gray-300 sm:text-xl">Amount Due</p>
          <p className="text-xl text-white sm:text-3xl">
            {currencyFormatter.format(invoice.total)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
