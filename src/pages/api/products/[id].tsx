import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../_lib/candles";

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;
    const product = products.find((product) => product.id === Number(id));

    if (product) {
      res.status(200).json(product);
    }

    res.status(404).json({ message: "Product not found" });
  } else {
    res.setHeader("Allow", "GET");
  }

  if (req.method === "POST") {
  }

  if (req.method === "PUT") {
  }

  if (req.method === "DELETE") {
  }
}
