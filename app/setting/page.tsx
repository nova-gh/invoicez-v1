import { getUser } from "@/lib/session";
import SignOut from "../../components/auth/SignOut";
const SettingPage = async () => {
  const user = await getUser();
  return (
    <main className="page-wrapper">
      <h1 className="text-2xl">Settings</h1>
      <div className="mt-6 space-y-4">
        <h2 className="text-xl">Full Name: {user?.name}</h2>
        <h2 className="text-xl">Email: {user?.email}</h2>
        <h2 className="text-xl"></h2>
      </div>
      <div className="self-end mt-auto">
        <SignOut />
      </div>
    </main>
  );
};

export default SettingPage;
