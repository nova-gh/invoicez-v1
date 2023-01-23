"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type Props = {
  model: boolean;
  handleModel: () => void;
  submitLoader: (loader: boolean) => void;
};
const NewInvoiceForm = ({ model, handleModel, submitLoader }: Props) => {
  const router = useRouter();
  const currentDate = new Date().toISOString().split("T")[0];
  const { data: session } = useSession();
  // Billing creator addresss
  const [creator, setCreator] = useState({
    street: session?.user.streetAddress,
    city: session?.user.city,
    postCode: session?.user.postalCode,
    country: session?.user.country,
  });
  // Billing info
  const [bill, setBill] = useState({
    clientName: "",
    clientEmail: "",
    paymentTerms: "",
    paymentDue: "",
    description: "",
  });
  const [clientAddress, setClientAddress] = useState({
    street: "",
    city: "",
    postCode: "",
    country: "",
  });
  const handleCreatorInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };
  const handleBillInputs = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.name == "paymentDue") {
      setBill({
        ...bill,
        [e.target.name]: new Date(e.target.value).toISOString(),
      });
    } else {
      setBill({ ...bill, [e.target.name]: e.target.value });
    }
  };

  const handleStreetInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientAddress({ ...clientAddress, [e.target.name]: e.target.value });
  };
  // Item list rows
  const [itemInputs, setItemInputs] = useState([
    { id: Date.now(), name: "", quantity: "", price: "", total: "" },
  ]);
  const addNewItemRow = () => {
    const lastAddedRow = itemInputs[itemInputs.length - 1];
    const { name, quantity, price } = lastAddedRow;
    if (!name || !quantity || !price) {
      return;
    } else {
      const newField = {
        id: Date.now(),
        name: "",
        quantity: "",
        price: "",
        total: "",
      };
      setItemInputs((current) => [...current, newField]);
    }
  };
  const removeNewItemRow = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    if (itemInputs.length > 1) {
      setItemInputs((current) =>
        current.filter((item) => item.id !== Number(id))
      );
    } else if (itemInputs.length == 1) {
      setItemInputs((current) =>
        current.map((obj) => {
          if (obj.id === Number(id)) {
            let n = "";
            let p = "";
            let q = "";
            let t = "";
            return { ...obj, name: n, price: p, quantity: q, total: t };
          }
          return obj;
        })
      );
    }
  };
  const handleFormSubmission = async () => {
    try {
      submitLoader(true);
      const res = await fetch(`/api/createInvoice`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          creatorId: session?.user.id,
          paymentDue: bill.paymentDue,
          description: bill.description,
          clientName: bill.clientName,
          clientEmail: bill.clientEmail,
          total: itemInputs.reduce(
            (pv, cv) => Number(pv) + Number(cv.total),
            0
          ),
          paymentTerms: Number(bill.paymentTerms),
          clientAddress: clientAddress,
          senderAddress: creator,
          items: itemInputs,
        }),
      });
      const { data, error } = await res.json();
      if (error) throw error;
      handleModel();
      router.refresh();
      toast.success(`Created Invoice #${data?.id}!`);
    } catch (error) {
      toast.error("Error Creating Invoice");
    } finally {
      submitLoader(false);
    }
  };
  return (
    <form
      id="new-invoice"
      className=""
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmission();
      }}
    >
      <fieldset className="form-fieldset">
        <legend className="form-legend">Bill From</legend>
        <div className="form-input-cont">
          <label htmlFor="sender-street-add" className="form-label">
            Street Address
          </label>
          <input
            type="text"
            name="street"
            id="sender-street-add"
            className="form-input"
            value={creator.street!}
            onChange={handleCreatorInputs}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-3 md:gap-y-0 ">
          <div className="form-input-cont">
            <label htmlFor="sender-city" className="form-label">
              City
            </label>
            <input
              type="text"
              name="city"
              id="sender-city"
              className="form-input"
              value={creator.city!}
              onChange={handleCreatorInputs}
              required
            />
          </div>
          <div className="form-input-cont">
            <label htmlFor="sender-postal" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              name="postCode"
              id="sender-postal"
              className="form-input"
              value={creator.postCode?.toString()}
              onChange={handleCreatorInputs}
              required
            />
          </div>
          <div className="col-span-2 form-input-cont md:col-span-1">
            <label htmlFor="sender-country" className="form-label">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="sender-country"
              className="form-input"
              value={creator.country!}
              onChange={handleCreatorInputs}
              required
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="form-fieldset ">
        <legend className="form-legend">Bill To</legend>
        <div className="form-input-cont">
          <label htmlFor="client-name" className="form-label">
            Client&apos;s Name
          </label>
          <input
            type="text"
            name="clientName"
            id="client-name"
            min={3}
            max={20}
            className="form-input"
            onChange={handleBillInputs}
            value={bill.clientName}
            required
          />
        </div>
        <div className="form-input-cont">
          <label htmlFor="client-email" className="form-label">
            Client&apos;s Email
          </label>
          <input
            type="email"
            name="clientEmail"
            id="client-email"
            className="form-input"
            onChange={handleBillInputs}
            value={bill.clientEmail}
            required
          />
        </div>
        <div className="form-input-cont">
          <label htmlFor="client-street-address" className="form-label">
            Street Address
          </label>
          <input
            type="text"
            name="street"
            id="client-street-address"
            min={10}
            max={30}
            className="form-input"
            onChange={handleStreetInputs}
            value={clientAddress.street}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-3 md:gap-y-0">
          <div className="form-input-cont">
            <label htmlFor="client-city" className="form-label">
              City
            </label>
            <input
              type="text"
              name="city"
              id="client-city"
              min={3}
              max={12}
              className="form-input"
              onChange={handleStreetInputs}
              value={clientAddress.city}
              required
            />
          </div>
          <div className="form-input-cont">
            <label htmlFor="client-postal" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              name="postCode"
              min={5}
              max={6}
              id="client-postal"
              className="form-input"
              onChange={handleStreetInputs}
              value={clientAddress.postCode}
              required
            />
          </div>
          <div className="col-span-2 form-input-cont md:col-span-1">
            <label htmlFor="client-country" className="form-label">
              Country
            </label>
            <input
              type="text"
              name="country"
              min={2}
              max={10}
              id="client-country"
              className="form-input"
              onChange={handleStreetInputs}
              value={clientAddress.country}
              required
            />
          </div>
        </div>
        <div className="grid gap-y-6 gap-x-4 md:grid-cols-2">
          <div className="form-input-cont">
            <label htmlFor="invoice-date" className="text-gray-400 form-label">
              Invoice Date
            </label>
            <input
              type="date"
              name="invoiceDate"
              id="invoice-date"
              className="text-gray-400 form-input placeholder:hidden"
              defaultValue={currentDate}
              readOnly
            />
          </div>
          <div className="form-input-cont">
            <label htmlFor="payment-terms" className="form-label">
              Payment Terms
            </label>
            <select
              name="paymentTerms"
              id="payment-terms"
              className="form-input"
              onChange={handleBillInputs}
              required
            >
              <option value="30">Net 30 Days</option>
              <option value="60">Net 60 Days</option>
              <option value="90">Net 90 Days</option>
            </select>
          </div>
        </div>
        <div className="form-input-cont">
          <label htmlFor="project-paymentDue" className="form-label">
            Payment Due Date
          </label>
          <input
            type="date"
            min="2022-01-01"
            max="2050-01-01"
            name="paymentDue"
            id="project-paymentDue"
            className="form-input"
            value={bill.paymentDue.split("T")[0]}
            onChange={handleBillInputs}
            required
          />
        </div>
        <div className="form-input-cont">
          <label htmlFor="project-description" className="form-label">
            Project Description
          </label>
          <input
            type="text"
            name="description"
            id="project-description"
            className="form-input"
            value={bill.description}
            onChange={handleBillInputs}
            required
          />
        </div>
      </fieldset>
      <fieldset className="form-fieldset">
        <legend className="text-2xl form-legend">Item List</legend>
        <div className="grid grid-cols-6 gap-x-2 ">
          <label htmlFor="Item Name" className="col-span-2 form-label">
            Item Name
          </label>
          <label htmlFor="Qty." className=" form-label">
            Qty.
          </label>
          <label htmlFor="Price" className="mx-auto form-label">
            Price
          </label>
          <label htmlFor="Total" className="mx-auto form-label">
            Total
          </label>
        </div>
        {itemInputs?.map((input) => (
          <div
            id="item-form"
            key={input.id}
            className="grid grid-cols-6 gap-x-3"
          >
            <input
              type="text"
              name={input.name}
              className="col-span-2 form-input"
              value={input.name}
              required
              onChange={(e) => {
                setItemInputs((current) =>
                  current.map((obj) => {
                    if (obj.id === input.id) {
                      return { ...obj, name: e.target.value };
                    }
                    return obj;
                  })
                );
              }}
            />
            <input
              type="number"
              min="1"
              step="1"
              name={"quantity"}
              className=" form-input"
              value={input.quantity}
              required
              onChange={(e) => {
                setItemInputs((current) =>
                  current.map((obj) => {
                    if (obj.id === input.id) {
                      let q = e.target.value;
                      let p = obj.price;
                      let t = Number(q) * Number(p);
                      return {
                        ...obj,
                        quantity: q,
                        total: String(t.toFixed(2)),
                      };
                    }
                    return obj;
                  })
                );
              }}
            />
            <input
              type="number"
              name={"price"}
              min="1"
              max="9999"
              className="form-input "
              value={input.price}
              required
              onChange={(e) => {
                setItemInputs((current) =>
                  current.map((obj) => {
                    if (obj.id === input.id) {
                      let p = e.target.value;
                      let q = obj.quantity;
                      let t = Number(q) * Number(p);
                      return { ...obj, price: p, total: String(t.toFixed(2)) };
                    }
                    return obj;
                  })
                );
              }}
            />
            <input
              type="text"
              name={"total"}
              readOnly
              tabIndex={-1}
              value={input.total}
              className="bg-transparent form-input"
            />
            <button
              id={String(input.id)}
              className="flex items-center justify-center mx-2 duration-75 ease-in-out text-gray-white hover:text-red-500 sm:mx-5"
              onClick={removeNewItemRow}
              type="button"
            >
              <span className="sr-only">Delete</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        ))}
        <button
          className="flex items-center justify-center w-full py-3 text-lg font-bold text-white duration-75 ease-in-out bg-gray-600 rounded-full hover:text-opacity-90 "
          onClick={addNewItemRow}
          type="button"
        >
          Add new item
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </fieldset>
    </form>
  );
};

export default NewInvoiceForm;
