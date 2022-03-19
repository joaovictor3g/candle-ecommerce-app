import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../_lib/candles";

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else {
    res.setHeader("Allow", "GET");
  }
}
