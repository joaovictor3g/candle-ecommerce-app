import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const httpMethod = req.method;

  if (httpMethod === "GET") {
    const products = await prisma.product.findMany({
      include: { stock: true },
    });

    return res.status(200).json(products);
  }

  if (httpMethod === "POST") {
    const { name, price, img, stock } = req.body;

    try {
      const create = await prisma.product.create({
        data: {
          name,
          img,
          price,
        },
      });

      await prisma.stock.create({
        data: {
          ...stock,
          productId: create.id,
        },
      });

      return res.status(201).json({ message: "Product created" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
