import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";

type Props = {
  open: boolean;
  setOpen: (x: boolean) => void;
};
import NewInvoiceForm from "./NewInvoiceForm";
const NewInvoiceDrawer = ({ open, setOpen }: Props) => {
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
            <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-800 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 flex pl-5 mt-24 md:pl-10 lg:mt-0 ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <div className="flex flex-col h-full overflow-hidden text-white bg-gray-900 shadow-2xl rounded-l-2xl">
                  <div className="relative flex-1 px-4 mt-1 sm:px-6">
                    <div className="absolute inset-0 ">
                      <div
                        className="h-full px-6 py-6 mb-10 overflow-y-scroll"
                        aria-hidden="true"
                      >
                        <div className="">
                          <h2 className="text-2xl font-medium ">New Invoice</h2>
                        </div>
                        <NewInvoiceForm model={open} handleModel={setOpen} />
                      </div>
                    </div>
                    {/* /End replace */}
                  </div>
                  <div className="flex justify-between flex-shrink-0 p-6 bg-gray-600">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      form="new-invoice"
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:brand-brand-500 bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      Save
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

export default NewInvoiceDrawer;
