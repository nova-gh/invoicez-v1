import { Invoice } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../lib/prismadb";

type Data = {
  invoices: Invoice[];
};
type ErrorData = {
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not allowed" });
  }
  // const { data } = req.body;
  console.log(req.body);
  try {
    await prisma.invoice.create({
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error" });
  }
}
