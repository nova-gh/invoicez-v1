import Image from "next/image";
import { Session } from "../typing";

const Avatar = ({ session }: Session) => {
  return (
    <div className="">
      <Image
        src={session?.user.image!}
        alt="Avatar Logo"
        height={42}
        width={42}
        className="rounded-full "
      />
    </div>
  );
};

export default Avatar;
