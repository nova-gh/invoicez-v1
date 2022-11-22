import { Invoice } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prismadb";

type Data = {
  invoices: Invoice[];
};
type ErrorData = {
  body: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  const userId = req.query.id;
  if (req.method !== "GET") {
    res.status(405).json({ body: "Method Not allowed" });
  }
  const invoices: Invoice[] = await prisma.invoice.findMany({});
  res.status(200).json({ invoices });
}
