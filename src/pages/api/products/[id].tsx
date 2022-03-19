import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;

    const product = await prisma.product.findUnique({
      where: {
        id: String(id),
      },
    });

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  }

  if (req.method === "PUT") {
  }

  if (req.method === "DELETE") {
  }
}
