import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import EditInvoiceForm from "./EditInvoiceForm";
import { InvoicePlus } from "types/typing";

type Props = {
  open: boolean;
  setOpen: (x: boolean) => void;
  invoice: InvoicePlus;
};
const EditInvoiceDrawer = ({ open, setOpen, invoice }: Props) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden "
        onClose={setOpen}
      >
        <div className="absolute inset-0 mt-24 overflow-hidden lg:mt-0">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 mt-24 flex pl-2 sm:pl-5 md:pl-10 lg:mt-0">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-[calc(100vw-45px)] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <div className="flex h-full flex-col overflow-hidden rounded-l-2xl bg-gray-900 text-white shadow-2xl">
                  <div className="relative mt-1 flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 ">
                      <div
                        className="mb-10 h-full overflow-y-scroll px-6 py-6"
                        aria-hidden="true"
                      >
                        <div className="">
                          <h2 className="text-2xl font-medium ">
                            Edit Invoice
                          </h2>
                        </div>
                        <EditInvoiceForm
                          model={open}
                          handleModel={() => setOpen(false)}
                          submitLoader={setSubmitLoading}
                          invoice={invoice}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 justify-between bg-gray-600 p-6">
                    <button
                      type="button"
                      className="rounded-md bg-red-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      form="new-invoice"
                      type="submit"
                      className="focus:brand-brand-500 ml-4 inline-flex justify-center rounded-md border border-transparent bg-brand-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-700"
                      disabled={submitLoading}
                    >
                      <div
                        role="status"
                        className={`${submitLoading ? "inline" : "hidden"}`}
                      >
                        <svg
                          className="mr-2 inline h-6 w-6 animate-spin fill-indigo-600 text-gray-300"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                      <span>{submitLoading ? "Updating" : "Update"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditInvoiceDrawer;
