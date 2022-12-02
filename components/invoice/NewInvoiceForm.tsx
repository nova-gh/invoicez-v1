"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
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
  const { data } = useSession();
  // Billing info
  const [bill, setBill] = useState({});
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
          creatorId: "637eb5f11f24685650bbbc78",
          paymentDue: "2023-01-01T00:00:00.000Z",
          description: "Submiting testing 2",
          clientName: "Nova Gh",
          clientEmail: "test@gmail.com",
          status: false,
          total: 99.99,
          paymentTerms: 10,
          clientAddress: {
            city: "London",
            street: "19 Union terrace",
            country: "United Kingdom",
            postCode: "ED1 9PB",
          },
          senderAddress: {
            city: "Bradford",
            street: "84 Church Way",
            country: "United Kingdom",
            postCode: "BD1 9PB",
          },
          items: [
            { name: "New Logo", price: 1532.33, total: 1532.33, quantity: 1 },
          ],
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
            name="senderStreet"
            id="sender-street-add"
            className="form-input"
            defaultValue={data?.user.streetAddress || ""}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-3 md:gap-y-0 ">
          <div className="form-input-cont">
            <label htmlFor="sender-city" className="form-label">
              City
            </label>
            <input
              type="text"
              name="senderCity"
              id="sender-city"
              className="form-input"
              defaultValue={data?.user.city || ""}
            />
          </div>
          <div className="form-input-cont">
            <label htmlFor="sender-postal" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              name="senderPostal"
              id="sender-postal"
              className="form-input"
              defaultValue={data?.user.postalCode}
            />
          </div>
          <div className="col-span-2 form-input-cont md:col-span-1">
            <label htmlFor="sender-country" className="form-label">
              Country
            </label>
            <input
              type="text"
              name="senderCountry"
              id="sender-country"
              className="form-input"
              defaultValue={data?.user.country || ""}
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
            className="form-input"
          />
        </div>
        <div className="form-input-cont">
          <label htmlFor="client-email" className="form-label">
            Client&apos;s Email
          </label>
          <input
            type="text"
            name="clientEmail"
            id="client-email"
            className="form-input"
          />
        </div>
        <div className="form-input-cont">
          <label htmlFor="client-street-address" className="form-label">
            Street Address
          </label>
          <input
            type="text"
            name="clientStreet"
            id="client-street-address"
            className="form-input"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-3 md:gap-y-0">
          <div className="form-input-cont">
            <label htmlFor="client-city" className="form-label">
              City
            </label>
            <input
              type="text"
              name="clientCity"
              id="client-city"
              className="form-input"
            />
          </div>
          <div className="form-input-cont">
            <label htmlFor="client-postal" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              name="clientPostal"
              id="client-postal"
              className="form-input"
            />
          </div>
          <div className="col-span-2 form-input-cont md:col-span-1">
            <label htmlFor="client-country" className="form-label">
              Country
            </label>
            <input
              type="text"
              name="clientCountry"
              id="client-country"
              className="form-input"
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
            >
              <option value="1">Net 30 Days</option>
              <option value="2">Net 60 Days</option>
              <option value="3">Net 90 Days</option>
            </select>
          </div>
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
              // required
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
              // required
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
              type="text"
              name={"price"}
              min="1"
              max="9999"
              className="form-input "
              value={input.price}
              // required
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
