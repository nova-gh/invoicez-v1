type Props = {
  status: boolean;
};
const InvoiceDetailsHeader = ({ status }: Props) => {
  return (
    <div className="flex items-center justify-between p-6 space-x-4 bg-gray-800 rounded-lg ">
      <div className="flex items-center w-full font-semibold md:w-auto">
        <p className="text-white">Status</p>
        <button
          disabled
          className={` ml-auto flex w-min items-center justify-center space-x-2 rounded-xl p-3 px-6 md:ml-6
        ${
          status
            ? "bg-green-100/90 text-green-600"
            : "bg-orange-100/90 text-orange-600"
        }
        `}
        >
          <span
            className={`mr-2 h-3 w-3 rounded-full ${
              status ? "bg-green-600" : "bg-orange-600"
            }`}
          ></span>
          {status ? "Paid" : "Pending"}
        </button>
      </div>
      <div className="hidden space-x-4 font-semibold text-white md:inline-flex">
        <button className="px-5 py-3 bg-gray-600 rounded-full ">Eidt</button>
        <button className="px-5 py-3 bg-red-500 rounded-full ">Delete</button>
        <button className="px-5 py-3 rounded-full bg-brand-500">
          Mark as Paid
        </button>
      </div>
    </div>
  );
};

export default InvoiceDetailsHeader;
