import Image from "next/image";
import SignOut from "./SignOut";
const SignInPage = async () => {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center space-y-4 bg-red-100">
      <div className="">
        {/* <Image width={400} height={400} alt="Logo" src={Logo} /> */}
      </div>
      <SignOut />
    </div>
  );
};

export default SignInPage;
