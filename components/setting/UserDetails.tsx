"use client";

import { useState } from "react";
type Props = {
  user: {
    id: string;
    country: string;
    city: string;
    postalCode: string;
    streetAddress: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};
const UserDetails = ({ user }: Props) => {
  const [fullName, setFullName] = useState(user.name ?? "");
  const [streetAddress, setStreetAddress] = useState(user.streetAddress ?? "");
  const [city, setCity] = useState(user.city ?? "");
  const [postal, setPostal] = useState(user.postalCode ?? "");
  const [country, setCountry] = useState(user.country ?? "");
  const [update, setUpdate] = useState(false);
  return (
    <form className="p-10 mt-4 space-y-8 bg-gray-800 rounded-md ">
      <div className="gap-4 space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0">
        <div className="form-input-cont">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            min={3}
            max={20}
            className="form-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-input-cont">
          <label htmlFor="email" className="text-gray-400 form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="text-gray-400 form-input placeholder:hidden"
            readOnly
            defaultValue={user.email ?? ""}
          />
        </div>
        <div className="col-span-2 form-input-cont">
          <label htmlFor="street" className="form-label">
            Street Address
          </label>
          <input
            type="text"
            name="Street"
            id="street"
            min={3}
            max={20}
            className="form-input"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
          />
        </div>
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
            value={city}
            onChange={(e) => setCity(e.target.value)}
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
            value={postal?.toString()}
            onChange={(e) => setPostal(e.target.value)}
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
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
      </div>
      <button
        form="new-invoice"
        type="submit"
        className="flex justify-center px-4 py-2 ml-auto font-medium text-white border border-transparent rounded-md shadow-sm focus:brand-brand-500 bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-700"
        disabled={
          update ||
          (fullName == user.name &&
            streetAddress == user.streetAddress &&
            city == user.city &&
            postal == user.postalCode &&
            country == user.country)
        }
      >
        <div role="status" className={`${update ? "inline" : "hidden"}`}>
          <svg
            className="inline w-6 h-6 mr-2 text-gray-300 animate-spin fill-indigo-600"
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
        <span>{update ? "Updating" : "Update"}</span>
      </button>
    </form>
  );
};

export default UserDetails;
