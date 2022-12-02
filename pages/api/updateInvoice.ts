import { Invoice } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prismadb";

type Data = {
  data: Invoice;
  message: string;
  status: number;
};
type ErrorData = {
  status: number;
  error: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "PUT") {
    res.status(405).json({ error: `${req.method} Not Allowed.`, status: 405 });
  }
  const { id, data } = req.body;
  try {
    const updatedInvoice = await prisma.invoice.update({
      where: {
        id,
      },
      data: data,
    });
    res
      .status(200)
      .json({ message: "Invoice Deleted", data: updatedInvoice, status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      console.log("err", err.message);
      res.status(400).json({
        error: err.message.replace(/(\r\n|\n|\r)/gm, ""),
        status: 404,
      });
    } else {
      res.status(400).json({ error: "Unexpected Error", status: 404 });
    }
  }
}
