import { unstable_getServerSession } from "next-auth";

export type Session = {
  session: Awaited<ReturnType<typeof unstable_getServerSession>>;
};
