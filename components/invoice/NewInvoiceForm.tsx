"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const NewInvoiceForm = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const { data } = useSession();
  const [itemInputs, setitemInputs] = useState([
    { id: Date.now(), name: "", quantity: "", price: "", total: "" },
  ]);
  useEffect(() => {}, [itemInputs]);
  console.log("====================================");
  console.log(itemInputs);
  console.log("====================================");
  return (
    <form className="" onSubmit={(e) => e.preventDefault()}>
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
        <div className="grid grid-cols-5 gap-x-2 ">
          <label htmlFor="Item Name" className="col-span-2 form-label">
            Item Name
          </label>
          <label htmlFor="Qty." className="mx-auto form-label">
            Qty.
          </label>
          <label htmlFor="Price" className="mx-auto form-label">
            Price
          </label>
          <label htmlFor="Total" className="mx-auto form-label">
            Total
          </label>
        </div>
        {itemInputs.map((input) => (
          <div key={input.id} className="grid grid-cols-5 gap-x-3">
            <input
              type="text"
              name={input.name}
              className="col-span-2 form-input"
            />
            <input type="text" name={"quantity"} className="form-input " />
            <input type="text" name={"price"} className="form-input " />
            <input
              type="text"
              name={"total"}
              className="bg-transparent form-input"
            />
          </div>
        ))}
        <button
          className="w-full py-3 font-bold text-white bg-gray-600 rounded-full"
          onClick={() => {
            const newField = {
              id: Date.now(),
              name: "",
              quantity: "",
              price: "",
              total: "",
            };
            // if (itemInputs[0].name !== "") {
            //   setitemInputs((oldState) => [...oldState, newField]);
            // }
            setitemInputs((oldState) => [...oldState, newField]);
          }}
        >
          Add new Item +
        </button>
      </fieldset>
    </form>
  );
};

export default NewInvoiceForm;
