"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  status: boolean;
  id: string;
  creatorId: string;
};
const InvoiceDetailsHeader = ({ status, id, creatorId }: Props) => {
  const router = useRouter();
  const [delLoader, setDelLoader] = useState(false);
  const [statusLoader, setStatusLoader] = useState(false);
  const [editLoader, setEditLoader] = useState(false);
  const handleEdit = async () => {
    console.log("handle edit");
  };
  const handleDelete = async (id: string) => {
    try {
      setDelLoader(true);
      const res = await fetch("/api/deleteInvoice", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      const { data, error } = await res.json();
      if (error) throw error;
      toast.success(`Deleted Invoice #${data?.id}!`);
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Error Deleting Invoice");
    } finally {
      setDelLoader(false);
    }
  };
  const handleStatusUpdate = async () => {
    try {
      setStatusLoader(true);
      const res = await fetch("/api/updateInvoice", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ id, data: { status: true } }),
      });
      const { data, error } = await res.json();
      if (error) throw error;
      toast.success(`Updated Invoice #${data?.id} as paid!`);
      router.refresh();
    } catch (error) {
      toast.error("Error Updating Invoice");
    } finally {
      setStatusLoader(false);
    }
  };

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
        <button
          onClick={handleEdit}
          className="px-5 py-3 duration-75 ease-in-out bg-gray-500 rounded-full hover:bg-gray-600"
        >
          Eidt
        </button>
        <button
          disabled={delLoader}
          onClick={() => handleDelete(id)}
          className="px-5 py-3 duration-75 ease-in-out bg-red-500 rounded-full hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-700"
        >
          Delete
        </button>
        <button
          disabled={status || statusLoader}
          onClick={handleStatusUpdate}
          className="px-5 py-3 rounded-full bg-brand-500 disabled:cursor-not-allowed disabled:bg-gray-700"
        >
          Mark as Paid
        </button>
      </div>
    </div>
  );
};

export default InvoiceDetailsHeader;
