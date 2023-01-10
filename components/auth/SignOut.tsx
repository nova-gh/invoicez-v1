"use client";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      onClick={() =>
        signOut({ redirect: true, callbackUrl: "http://localhost:3000" })
      }
      className="px-4 py-2 font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
