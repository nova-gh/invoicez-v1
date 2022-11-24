import SignOut from "@/components/auth/SignOut";
import Image from "next/image";
const SignInPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto space-y-4 bg-red-100">
      <div className="">
        {/* <Image width={400} height={400} alt="Logo" src={Logo} /> */}
      </div>
      <SignOut />
    </div>
  );
};

export default SignInPage;
