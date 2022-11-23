import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponenet from "./SignInComponenet";
const SignInPage = async () => {
  const providers = await getProviders();
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto space-y-4 bg-red-100">
      <div className="">
        {/* <Image width={400} height={400} alt="Logo" src={Logo} /> */}
      </div>
      <SignInComponenet providers={providers} />
    </div>
  );
};

export default SignInPage;
