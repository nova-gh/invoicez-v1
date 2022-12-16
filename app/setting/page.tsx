import UserDetails from "@/components/setting/UserDetails";
import { getUser } from "@/lib/session";
import Image from "next/image";
import SignOut from "../../components/auth/SignOut";
const SettingPage = async () => {
  const user = await getUser();
  return (
    <main className="text-white page-wrapper lg:h-screen">
      <h1 className="page-heading">Settings</h1>
      <div className="my-4 space-y-8 ">
        <h2 className="text-xl font-medium">User Details</h2>
        <div className="">
          <Image
            src={user?.image!}
            alt="Avatar Logo"
            height={52}
            width={52}
            className="rounded-full "
          />
        </div>
        <UserDetails user={user!} />
      </div>
      <div className="self-end mt-auto">
        <SignOut />
      </div>
    </main>
  );
};

export default SettingPage;
