import Image from "next/image";
import { Session } from "../../typing";

const Avatar = ({ session }: Session) => {
  const fullName = session?.user.name?.split(" ");
  const first = fullName?.at(0)?.at(0);
  const last = fullName?.at(1)?.at(0);
  const avatarSrc = `https://api.dicebear.com/5.x/initials/svg?seed=${
    fullName ? first! + last! : session?.user.email?.at(0)
  }&radius=50&backgroundColor=312e81&fontFamily=Helvetica`;
  return (
    <div className="">
      <Image
        src={avatarSrc}
        alt="Avatar Logo"
        height={42}
        width={42}
        className="rounded-full hover:border-2 hover:border-white"
      />
    </div>
  );
};

export default Avatar;
