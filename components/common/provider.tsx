"use client";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};
const Providers = ({ children, session }: Props) => {
  return (
    <SessionProvider session={session}>
      <Toaster
        toastOptions={{
          duration: 3000,
          success: {
            style: {
              backgroundColor: "#004F44",
              color: "white",
              fontSize: "1.2rem",
              width: "100%",
              fontWeight: "bold",
              textAlign: "center",
            },
          },
          error: {
            style: {
              backgroundColor: "#ef4444",
              color: "white",
              fontSize: "1.2rem",
              width: "100%",
              fontWeight: "bold",
            },
          },
        }}
      />
      {children}
    </SessionProvider>
  );
};

export default Providers;
