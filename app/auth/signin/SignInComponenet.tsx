"use client";
import { getProviders, signIn } from "next-auth/react";
type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};
const SignInComponenet = ({ providers }: Props) => {
  return (
    <div>
      {Object.values(providers!).map((provider) => (
        <div key={provider.name} className="">
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "http://localhost:3000",
              })
            }
            className="px-4 py-2 font-bold text-white rounded bg-brand/80 hover:bg-brand"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignInComponenet;
