"use client";
import { Fragment, useState } from "react";
import NewInvoiceDrawer from "./NewInvoiceDrawer";
const NewInvoiceButton = () => {
  const [open, setOpen] = useState(false);
  const handelCloseDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <button
        onClick={handelCloseDrawer}
        className="inline-flex items-center px-4 py-2 space-x-2 text-lg font-semibold text-white duration-75 ease-in-out rounded-full group bg-brand-600 hover:bg-brand-700 md:px-5 md:py-3"
      >
        <span className="px-2 py-1 mr-2 bg-white rounded-full text-brand-600 group-hover:bg-gray-100 group-hover:text-brand-700 md:mr-4">
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
        New <span className="hidden md:block"> Invoice</span>
      </button>
      <NewInvoiceDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default NewInvoiceButton;
