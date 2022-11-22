import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponenet from "./SignInComponenet";
const SignInPage = async () => {
  const providers = await getProviders();
  return (
    <div className="mx-auto mt-5 flex flex-col items-center justify-center space-y-4">
      <div className="">
        {/* <Image width={400} height={400} alt="Logo" src={Logo} /> */}
      </div>
      <SignInComponenet providers={providers} />
    </div>
  );
};

export default SignInPage;
