import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import SignOut from "../SignOut";
const SettingPage = async () => {
  const session = await unstable_getServerSession(authOptions);
  return (
    <main className="flex flex-col h-screen p-8 ">
      <h1 className="text-2xl">Settings</h1>
      <div className="mt-6 space-y-4">
        <h2 className="text-xl">Full Name: {session?.user.name}</h2>
        <h2 className="text-xl">Email: {session?.user.email}</h2>
        <h2 className="text-xl"></h2>
      </div>
      <div className="self-end mt-auto">
        <SignOut />
      </div>
    </main>
  );
};

export default SettingPage;
